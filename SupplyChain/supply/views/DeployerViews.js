import React from 'react';
import PlayerViews from './PlayerViews';

const exports = {...PlayerViews};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Deployer">
        <h2>Product Deployer (Alice) (Seller)</h2>
        {content}
      </div>
    );
  }
} 

exports.AreaSelect = class extends React.Component {
  render() {
    const {parent} = this.props;
    const productArea =  (this.state || {}).productArea || '';
  return (
    <div>
      <h3>Select Product Area</h3>
      <form class="formarea">
      <input type="radio" name="p_area" onChange={() => this.setState({productArea: 'FoodAndDrink'})}/>
      <label class="area">FoodAndDrink</label>
      <br/>
      <input type="radio" name="p_area" onChange={() => this.setState({productArea: 'Clothing'})}/>
      <label class="area">Clothing</label>
      <br/>
      <input type="radio" name="p_area" onChange={() => this.setState({productArea: 'Electronics'})}/>
      <label class="area">Electronics</label>
      </form>
      <br/><br/>
      <button onClick={() => parent.DeployProduct1(productArea)}>Next</button>
      </div>
    );
  }
}

exports.DeployProduct = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentDateTime: Date().toLocaleString()}
  }
  render() {
    const {parent, standardUnit, productArea} = this.props;
    const productId = (this.state || {}).productId || '';
    const productName = (this.state || {}).productName || '';
    const productPrice = (this.state || {}).productPrice || '';
    const productImage = (this.state || {}).productImage || '';
    const productManufactureDate = (this.state || {}).productManufactureDate || '';
    return (
      <div>
        <h3>Deploy Product ({productArea})</h3>
        <label for="upload">Upload Product Image: </label>
        <input id="upload" class="inputfile" type="file" accept="image/jpeg, image/png, image/jpg"
          onChange={(e) => this.setState({productImage: URL.createObjectURL(e.target.files[0])})}
        />
        <br />
        <label for='PID'>Product ID(Max ID: 10):</label>
        <input
          className='PID'
          id= 'PID'
          type='number'
          placeholder='0'
          min='0'
          max='10'
          required
          onChange={(e) => this.setState({productId: e.currentTarget.value})}
        />
        <label for='PNAME'>Product Name(Max Length: 20):</label>
        <input
          className='PNAME'
          id='PNAME'
          type='text'
          placeholder='Name'
          minLength='1'
          maxLength='20'
          required
          onChange={(e) => this.setState({productName: e.currentTarget.value})}
        />
        <label for='PPRICE'>Product Price:</label>
        <input
         className='PPRICE'
          id='PPRICE'
          type='number'
          placeholder='2'
          required
          onChange={(e) => this.setState({productPrice: e.currentTarget.value})} 
        /> <h3 class="Unit"/> <strong class="Unitalgo">{standardUnit}</strong>
        <form>
          <input class="checking" type="checkbox" id="check" required onChange={() => this.setState({productManufactureDate: this.state.currentDateTime})}/>
          <label class="area" for="check">I agree to the terms and conditions</label>
          <button className="DeployButton" onClick={() => parent.deployProduct(productId, productName, productPrice, productImage, productManufactureDate)}>Check Product</button>
        </form>
      </div>
    );
  }
}
exports.Deploy = class extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {currentDateTime: Date().toLocaleString()}
  // }
  render() {
    const {parent, standardUnit} = this.props;
    const {productId, productName, productPrice, productImage, productArea, productManufactureDate} = this.props;
    //const productManufactureDate = (this.state || {}).productManufactureDate || '';
    return (
      <div>
        Product Area: <strong>{productArea}</strong>
        <br />
        ProductImage
        <br />
        <img src={productImage}/>
        <br />
        Product ID: <strong>{productId}</strong>
        <br/>
        Product Name: <strong>{productName}</strong>
        <br/>
        Product Price: <strong>{productPrice} {standardUnit}</strong>
        <br/>
        Product Manufacture Date: <strong>{productManufactureDate}</strong>
        <br />
        <button 
          onClick={() => parent.deploy()}
        >Deploy</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>Deploying... please wait.</div>
    );
  }
}

exports.WaitingForAttacher = class extends React.Component {
  async copyToClipboard(button) {
    const {ctcInfoStr} = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Copied!';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const {ctcInfoStr} = this.props;
    return (
      <div>
        Waiting for Attacher to join...
        <br /> Please give them this contract info:
        <pre className='ContractInfo'>
          {ctcInfoStr}
        </pre>
        <button
          onClick={(e) => this.copyToClipboard(e.currentTarget)}
        >Copy to clipboard</button>
      </div>
    )
  }
}

export default exports;