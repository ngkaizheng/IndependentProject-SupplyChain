// Automatically generated with Reach 0.1.12 (96568703)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (96568703)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      3: [ctc0, ctc1, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '21'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '300'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Address;
  
  
  const v141 = stdlib.protect(ctc0, interact.productArea, 'for Alice\'s interact field productArea');
  const v142 = stdlib.protect(ctc1, interact.productId, 'for Alice\'s interact field productId');
  const v143 = stdlib.protect(ctc2, interact.productImage, 'for Alice\'s interact field productImage');
  const v144 = stdlib.protect(ctc3, interact.productManufactureDate, 'for Alice\'s interact field productManufactureDate');
  const v145 = stdlib.protect(ctc4, interact.productName, 'for Alice\'s interact field productName');
  const v146 = stdlib.protect(ctc1, interact.productPrice, 'for Alice\'s interact field productPrice');
  
  const txn1 = await (ctc.sendrecv({
    args: [v145, v142, v146, v143, v141, v144],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc1, ctc1, ctc2, ctc0, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v150, v151, v152, v153, v154, v155], secs: v157, time: v156, didSend: v37, from: v149 } = txn1;
      
      ;
      const v164 = stdlib.safeAdd(v156, stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, '30'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1, ctc2, ctc0, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v150, v151, v152, v153, v154, v155], secs: v157, time: v156, didSend: v37, from: v149 } = txn1;
  ;
  const v164 = stdlib.safeAdd(v156, stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, '30'));
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc5],
    timeoutAt: ['time', v164],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v149, v152, v164],
      evt_cnt: 0,
      funcNum: 2,
      lct: v156,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v218, time: v217, didSend: v116, from: v216 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc6, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v218, time: v217, didSend: v116, from: v216 } = txn3;
    ;
    stdlib.protect(ctc5, await interact.informTimeout(), {
      at: './index.rsh:32:29:application',
      fs: ['at ./index.rsh:31:9:application call to [unknown function] (defined at: ./index.rsh:31:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:30:28:function exp)', 'at ./index.rsh:54:50:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [v169], secs: v171, time: v170, didSend: v45, from: v168 } = txn2;
    ;
    const v178 = stdlib.safeAdd(v170, stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, '30'));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: ['time', v178],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v149, v152, v168, v178],
        evt_cnt: 0,
        funcNum: 4,
        lct: v170,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v200, time: v199, didSend: v85, from: v198 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc6, ctc1, ctc6, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v200, time: v199, didSend: v85, from: v198 } = txn4;
      ;
      const v201 = stdlib.addressEq(v149, v198);
      const v202 = stdlib.addressEq(v168, v198);
      const v203 = v201 ? true : v202;
      stdlib.assert(v203, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:61:50:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      stdlib.protect(ctc5, await interact.informTimeout(), {
        at: './index.rsh:32:29:application',
        fs: ['at ./index.rsh:31:9:application call to [unknown function] (defined at: ./index.rsh:31:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:30:28:function exp)', 'at ./index.rsh:61:50:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [], secs: v184, time: v183, didSend: v55, from: v182 } = txn3;
      ;
      const v187 = stdlib.addressEq(v168, v182);
      stdlib.assert(v187, {
        at: './index.rsh:60:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc5, await interact.seeResult(v152, v151, v150, v153, v154, v155), {
        at: './index.rsh:66:23:application',
        fs: ['at ./index.rsh:65:7:application call to [unknown function] (defined at: ./index.rsh:65:18:function exp)'],
        msg: 'seeResult',
        who: 'Alice'
        });
      
      return;
      }
    
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '300'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '21'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 6,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v150, v151, v152, v153, v154, v155], secs: v157, time: v156, didSend: v37, from: v149 } = txn1;
  ;
  const v164 = stdlib.safeAdd(v156, stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, '30'));
  stdlib.protect(ctc5, await interact.receiveTheProduct(v151, v150, v152, v153, v154, v155), {
    at: './index.rsh:51:68:application',
    fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:13:function exp)'],
    msg: 'receiveTheProduct',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v149, v152, v164, null],
    evt_cnt: 1,
    funcNum: 1,
    lct: v156,
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:53:6:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v169], secs: v171, time: v170, didSend: v45, from: v168 } = txn2;
      
      ;
      const v178 = stdlib.safeAdd(v170, stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, '30'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v164],
    tys: [ctc6, ctc1, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v149, v152, v164],
      evt_cnt: 0,
      funcNum: 2,
      lct: v156,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v218, time: v217, didSend: v116, from: v216 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc6, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v218, time: v217, didSend: v116, from: v216 } = txn3;
    ;
    stdlib.protect(ctc5, await interact.informTimeout(), {
      at: './index.rsh:32:29:application',
      fs: ['at ./index.rsh:31:9:application call to [unknown function] (defined at: ./index.rsh:31:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:30:28:function exp)', 'at ./index.rsh:54:50:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [v169], secs: v171, time: v170, didSend: v45, from: v168 } = txn2;
    ;
    const v178 = stdlib.safeAdd(v170, stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, '30'));
    stdlib.protect(ctc5, await interact.DoPayment(v152), {
      at: './index.rsh:58:23:application',
      fs: ['at ./index.rsh:57:9:application call to [unknown function] (defined at: ./index.rsh:57:13:function exp)'],
      msg: 'DoPayment',
      who: 'Bob'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v149, v152, v168, v178],
      evt_cnt: 0,
      funcNum: 3,
      lct: v170,
      onlyIf: true,
      out_tys: [],
      pay: [v152, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v184, time: v183, didSend: v55, from: v182 } = txn3;
        
        sim_r.txns.push({
          amt: v152,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v149,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v178],
      tys: [ctc6, ctc1, ctc6, ctc1],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v149, v152, v168, v178],
        evt_cnt: 0,
        funcNum: 4,
        lct: v170,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v200, time: v199, didSend: v85, from: v198 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc6, ctc1, ctc6, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v200, time: v199, didSend: v85, from: v198 } = txn4;
      ;
      const v201 = stdlib.addressEq(v149, v198);
      const v202 = stdlib.addressEq(v168, v198);
      const v203 = v201 ? true : v202;
      stdlib.assert(v203, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:61:50:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      stdlib.protect(ctc5, await interact.informTimeout(), {
        at: './index.rsh:32:29:application',
        fs: ['at ./index.rsh:31:9:application call to [unknown function] (defined at: ./index.rsh:31:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:30:28:function exp)', 'at ./index.rsh:61:50:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      
      return;
      
      }
    else {
      const {data: [], secs: v184, time: v183, didSend: v55, from: v182 } = txn3;
      ;
      const v187 = stdlib.addressEq(v168, v182);
      stdlib.assert(v187, {
        at: './index.rsh:60:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc5, await interact.seeResult(v152, v151, v150, v153, v154, v155), {
        at: './index.rsh:66:23:application',
        fs: ['at ./index.rsh:65:7:application call to [unknown function] (defined at: ./index.rsh:65:18:function exp)'],
        msg: 'seeResult',
        who: 'Bob'
        });
      
      return;
      }
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAJAAEDAgRIICgeJgIBAAAiNQAxGEECJylkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJJQxAAMFJJAxAAJNJIQQMQAA9IQQSRCQ0ARJENARJIhJMNAISEUQoZDUDgASRJzTzsDIGNAMhBVsPRDQDVwAgMQASNANXKCAxABIRREIBX0gkNAESRDQESSISTDQCEhFEKGRJNQMhBls1/4AEp2XEtLAyBjQDIQVbDEQ0/4gBnDQDVyggMQASRLEisgE0/7III7IQNANXACCyB7NCARBIIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyEHWw9EQgDoSSMMQABfSCM0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yEGWzX+STUFNf2ABJKjUII0/VCwMgY0AyEHWwxEMgYhCAg1/DT/NP4WUDEAUDT8FlAoSwFXAFBnSCQ1ATIGNQJCAJ9IgaCNBogA6CI0ARJENARJIhJMNAISEURJNQVJSkpXABQ1/4EUWzX+gRxbNf2BJIGsAlg1/IHQAoEVWDX7geUCgVBYNfqABC+X0kE0/1A0/hZQNP0WUDT8UDT7UDT6ULAyBiEICDX5MQA0/RZQNPkWUChLAVcAMGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQlMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 80,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes20",
                "name": "v150",
                "type": "bytes20"
              },
              {
                "internalType": "uint256",
                "name": "v151",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v152",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem4",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem5",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem6",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem7",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem8",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes12",
                    "name": "elem9",
                    "type": "bytes12"
                  }
                ],
                "internalType": "struct T1",
                "name": "v153",
                "type": "tuple"
              },
              {
                "internalType": "bytes21",
                "name": "v154",
                "type": "bytes21"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes16",
                    "name": "elem2",
                    "type": "bytes16"
                  }
                ],
                "internalType": "struct T2",
                "name": "v155",
                "type": "tuple"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes20",
                "name": "v150",
                "type": "bytes20"
              },
              {
                "internalType": "uint256",
                "name": "v151",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v152",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem4",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem5",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem6",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem7",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem8",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes12",
                    "name": "elem9",
                    "type": "bytes12"
                  }
                ],
                "internalType": "struct T1",
                "name": "v153",
                "type": "tuple"
              },
              {
                "internalType": "bytes21",
                "name": "v154",
                "type": "bytes21"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes16",
                    "name": "elem2",
                    "type": "bytes16"
                  }
                ],
                "internalType": "struct T2",
                "name": "v155",
                "type": "tuple"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v169",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v169",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620011f7380380620011f783398101604081905262000026916200038f565b60008080554360035560408051602081018252918252517f25a7b7d05335e64a5075bc04f5986cef7b072914ef2af1f4afca72a246ef7e8c906200006e9033908590620004d0565b60405180910390a1620000843415600762000113565b6200009143601e6200013e565b81526040805160608082018352600060208084018281528486018381523380875289840151880151835288518252600194859055439094558651928301939093525194810194909452519083015290608001604051602081830303815290604052600290805190602001906200010992919062000195565b505050506200064b565b816200013a5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000826200014d8382620005e7565b91508110156200018f5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000131565b92915050565b828054620001a3906200060e565b90600052602060002090601f016020900481019282620001c7576000855562000212565b82601f10620001e257805160ff191683800117855562000212565b8280016001018555821562000212579182015b8281111562000212578251825591602001919060010190620001f5565b506200022092915062000224565b5090565b5b8082111562000220576000815560010162000225565b604080519081016001600160401b03811182821017156200026c57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c081016001600160401b03811182821017156200026c57634e487b7160e01b600052604160045260246000fd5b60405161014081016001600160401b03811182821017156200026c57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b031981168114620002ee57600080fd5b919050565b80516001600160581b031981168114620002ee57600080fd5b6000606082840312156200031f57600080fd5b604051606081016001600160401b03811182821017156200035057634e487b7160e01b600052604160045260246000fd5b6040908152835182526020808501519083015283015190915081906001600160801b0319811681146200038257600080fd5b6040919091015292915050565b6000818303610240811215620003a457600080fd5b620003ae6200023b565b83518152610220601f1983011215620003c657600080fd5b620003d062000272565b60208501516001600160601b031981168114620003ec57600080fd5b81526040858101516020830152606086015190820152610140607f1984018113156200041757600080fd5b62000421620002a3565b93506080860151845260a0860151602085015260c0860151604085015260e086015160608501526101008087015160808601526101208088015160a08701528288015160c087015261016088015160e0870152610180880151828701526200048d6101a08901620002d5565b81870152505050826060820152620004a96101c08601620002f3565b6080820152620004be866101e087016200030c565b60a08201526020820152949350505050565b60006102608201905060018060a01b038416825282516020830152602083015160018060601b0319815116604084015260208101516060840152604081015160808401526060810151805160a0850152602081015160c0850152604081015160e08501526060810151610100818187015260808301519150610120828188015260a084015161014088015260c084015161016088015260e0840151610180880152818401516101a08801528084015193505050506200059c6101c08501826001600160a01b0319169052565b5060808101516001600160581b0319166101e084015260a0015180516102008401526020810151610220840152604001516001600160801b0319166102409092019190915292915050565b600082198211156200060957634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200062357607f821691505b602082108114156200064557634e487b7160e01b600052602260045260246000fd5b50919050565b610b9c806200065b6000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100c15780639a3e3912146100d6578063a7661d54146100e9578063ab53f2c6146100fc57005b80631e93b0f11461007757806373b4522c1461009b5780637eea518c146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a936600461093b565b61011f565b6100756100bc36600461093b565b6102bc565b3480156100cd57600080fd5b50600154610088565b6100756100e436600461093b565b6103f8565b6100756100f736600461093b565b6105dd565b34801561010857600080fd5b50610111610737565b60405161009292919061095e565b61012f60036000541460126107d4565b6101498135158061014257506001548235145b60136107d4565b60008080556002805461015b906109bb565b80601f0160208091040260200160405190810160405280929190818152602001828054610187906109bb565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610a0c565b90506101ff8160600151431060146107d4565b7f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c63383604051610230929190610a9c565b60405180910390a16102498160200151341460106107d4565b6040810151610264906001600160a01b0316331460116107d4565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156102a1573d6000803e3d6000fd5b50600080805560018190556102b89060029061084d565b5050565b6102cc600160005414600d6107d4565b6102e6813515806102df57506001548235145b600e6107d4565b6000808055600280546102f8906109bb565b80601f0160208091040260200160405190810160405280929190818152602001828054610324906109bb565b80156103715780601f1061034657610100808354040283529160200191610371565b820191906000526020600020905b81548152906001019060200180831161035457829003601f168201915b50505050508060200190518101906103899190610ad1565b905061039d8160400151431015600f6107d4565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516103ce929190610a9c565b60405180910390a16103e23415600c6107d4565b600080805560018190556102b89060029061084d565b61040860016000541460096107d4565b6104228135158061041b57506001548235145b600a6107d4565b600080805560028054610434906109bb565b80601f0160208091040260200160405190810160405280929190818152602001828054610460906109bb565b80156104ad5780601f10610482576101008083540402835291602001916104ad565b820191906000526020600020905b81548152906001019060200180831161049057829003601f168201915b50505050508060200190518101906104c59190610ad1565b90506104dd6040518060200160405280600081525090565b6104ee82604001514310600b6107d4565b7fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f4915338460405161051f929190610a9c565b60405180910390a1610533341560086107d4565b61053e43601e6107fa565b815260408051608080820183526000808352602080840182815284860183815260608087018581528a516001600160a01b03908116808a528c87015186523385528b518352600390975543600155895195860196909652925197840197909752519092169481019490945251908301529060a001604051602081830303815290604052600290805190602001906105d692919061088a565b5050505050565b6105ed60036000541460176107d4565b6106078135158061060057506001548235145b60186107d4565b600080805560028054610619906109bb565b80601f0160208091040260200160405190810160405280929190818152602001828054610645906109bb565b80156106925780601f1061066757610100808354040283529160200191610692565b820191906000526020600020905b81548152906001019060200180831161067557829003601f168201915b50505050508060200190518101906106aa9190610a0c565b90506106be816060015143101560196107d4565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072233836040516106ef929190610a9c565b60405180910390a1610703341560156107d4565b80516103e2906001600160a01b0316331461072d5760408201516001600160a01b03163314610730565b60015b60166107d4565b60006060600054600280805461074c906109bb565b80601f0160208091040260200160405190810160405280929190818152602001828054610778906109bb565b80156107c55780601f1061079a576101008083540402835291602001916107c5565b820191906000526020600020905b8154815290600101906020018083116107a857829003601f168201915b50505050509050915091509091565b816102b85760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826108078382610b40565b91508110156108475760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016107f1565b92915050565b508054610859906109bb565b6000825580601f10610869575050565b601f016020900490600052602060002090810190610887919061090e565b50565b828054610896906109bb565b90600052602060002090601f0160209004810192826108b857600085556108fe565b82601f106108d157805160ff19168380011785556108fe565b828001600101855582156108fe579182015b828111156108fe5782518255916020019190600101906108e3565b5061090a92915061090e565b5090565b5b8082111561090a576000815560010161090f565b60006040828403121561093557600080fd5b50919050565b60006040828403121561094d57600080fd5b6109578383610923565b9392505050565b82815260006020604081840152835180604085015260005b8181101561099257858101830151858201606001528201610976565b818111156109a4576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806109cf57607f821691505b6020821081141561093557634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610a0757600080fd5b919050565b600060808284031215610a1e57600080fd5b6040516080810181811067ffffffffffffffff82111715610a4f57634e487b7160e01b600052604160045260246000fd5b604052610a5b836109f0565b815260208301516020820152610a73604084016109f0565b6040820152606083015160608201528091505092915050565b80358015158114610a0757600080fd5b6001600160a01b038316815281356020808301919091526060820190610ac3908401610a8c565b151560408301529392505050565b600060608284031215610ae357600080fd5b6040516060810181811067ffffffffffffffff82111715610b1457634e487b7160e01b600052604160045260246000fd5b604052610b20836109f0565b815260208301516020820152604083015160408201528091505092915050565b60008219821115610b6157634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220016434793862a3cd3c713bd2a58a957026f7718f6cb33009d4b601dcfcad104d64736f6c634300080c0033`,
  BytecodeLen: 4599,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:48:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:54:50:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:55:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:61:50:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:63:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
