'reach 0.1';

const [ isProductID, ZEROID, ONEID, TWOID, THREEID, FOURID, FIVEID ] = makeEnum(6);

const DEADLINE = 30;

export const main = Reach.App(() => {
  
  const Visitor = {
    ...hasRandom,
    seeResult: Fun([UInt, UInt, Bytes(20), Bytes(300), Bytes(21), Bytes(80)], Null),
    informTimeout: Fun([], Null),
  };

  const A = Participant('Alice', {
    ...Visitor,
    productId: UInt,
    productName: Bytes(20),
    productPrice: UInt,
    productImage: Bytes(300),
    productArea: Bytes(21),
    productManufactureDate: Bytes(80),
  });
  const B = Participant('Bob', {
    ...Visitor,
    receiveTheProduct: Fun([UInt, Bytes(20), UInt, Bytes(300), Bytes(21), Bytes(80)], Null),
    DoPayment: Fun([UInt], Null),
  });

  const informTimeout = () => {
    each([A, B], () => {
      interact.informTimeout(); 
      }
    );
  };

  init();
  
  A.only(() => {
    const productName = declassify(interact.productName)
    const productId = declassify(interact.productId)
    const productPrice = declassify(interact.productPrice)
    const productImage = declassify(interact.productImage)
    const productArea = declassify(interact.productArea)
    const productManufactureDate = declassify(interact.productManufactureDate)
  });
  A.publish(productName, productId, productPrice, productImage, productArea, productManufactureDate);
  commit();
  
  B.only(() => {
    const receiveTheProduct = declassify(interact.receiveTheProduct(productId, productName, productPrice, productImage, productArea, productManufactureDate));
  });
   B.publish(receiveTheProduct)
   .timeout(relativeTime(DEADLINE), () => closeTo(A, informTimeout));
  commit();

  B.only(() => {
    interact.DoPayment(productPrice);
  });
  B.pay(productPrice)
   .timeout(relativeTime(DEADLINE), () => closeTo(A, informTimeout));
  transfer(productPrice).to(A)
  commit();

  each([A,B], () => {
    interact.seeResult(productPrice, productId, productName, productImage, productArea, productManufactureDate);
  });

});
