(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4552d106"],{"0c73":function(t,e,n){"use strict";(function(t){var i=n("1da1"),a=n("5530"),r=(n("96cf"),n("e9c4"),n("d3b7"),n("25f0"),n("4de4"),n("2ca0"),n("fb6a"),n("b680"),n("2f62")),o=n("e0e0"),s=n("e35c"),c=n("f71e"),u=n("ed08"),l=(n("35e4"),n("901e")),p=n.n(l);n("c0d8");e["a"]={name:"EvmInsBulkOnline",data:function(){return{scanUrl:"",scan:"Scan",mintForm:{tick:"",p:"",op:"mint",amt:"1000"},createLoading:!1,notifyInstance:null,modeShow:!1,modeIndex:1,jsonFormat:'{"p":"asc-20","op":"mint","tick":...',hexFormat:"0x646174613a2c...",mintJson:"",mintHex:"",toMintHex1:"",toMintJson1:"",proxyAddress:"",bulkMintContract:null,inscribeCount:"50"}},computed:Object(a["a"])(Object(a["a"])({},Object(r["b"])(["web3","wallet","chainId","device","connectNonce"])),{},{validMintParam:function(){return""!==this.mintForm.tick&&""!==this.mintForm.p&&""!==this.mintForm.amt},toMintJson:function(){return"data:,"+JSON.stringify(this.mintForm)},toMintHex:function(){var e="data:,"+JSON.stringify(this.mintForm),n=t.from(e,"utf-8");return"0x"+n.toString("hex")}}),watch:{web3:function(t){},wallet:function(t){},chainId:function(t){this.getChainInfos()}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getChainInfos();case 2:case"end":return e.stop()}}),e)})))()},methods:{getChainInfos:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n=0;n<o["a"].length;n++)t.chainId===o["a"][n].id&&(t.scanUrl=o["a"][n].url,t.scan=o["a"][n].scan,o["a"][n]["bulkBrc20Mint"]&&(t.proxyAddress=o["a"][n]["bulkBrc20Mint"]));if(!(t.chainId>0&&""===t.proxyAddress)){e.next=6;break}return e.next=4,Object(s["b"])("/api/v1/web/contract",{name:"bulkbrc20mint",chain:t.chainId});case 4:i=e.sent,t.proxyAddress=null===i.data.contract?"":i.data.contract;case 6:return e.next=8,t.initContract();case 8:case"end":return e.stop()}}),e)})))()},initContract:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.web3){e.next=2;break}return e.abrupt("return");case 2:if(""!==t.proxyAddress){e.next=4;break}return e.abrupt("return");case 4:n=[{inputs:[{internalType:"uint256",name:"count",type:"uint256"},{internalType:"bytes",name:"inscription",type:"bytes"}],name:"batchMint",outputs:[],stateMutability:"payable",type:"function"}],t.bulkMintContract=new t.web3.eth.Contract(n,t.proxyAddress);case 6:case"end":return e.stop()}}),e)})))()},contractMsg:function(){var t=this;this.checkRequire()&&this.$confirm(this.$t("coin.batchContractTip"),this.$t("global.tip"),{confirmButtonText:this.$t("coin.create1"),cancelButtonText:this.$t("global.cancel"),type:"warning"}).then((function(){t.generateContract()})).catch((function(){}))},generateContract:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,i,a,r,o,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.web3){e.next=2;break}return e.abrupt("return");case 2:return n="",i="",a={chain:t.chainId,sourcename:"bulkbrc20mint",opensource:!1,address:t.wallet},t.createLoading=!0,e.prev=6,e.next=9,Object(s["c"])("/api/v1/web/bulkbrc20mint/generate",a);case 9:r=e.sent,t.requestData=a,r=r.data,n=r.bytecode,i=r.abi,t.apiKey=r.apikey,e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](6),t.createLoading=!1;case 20:if(""!==i){e.next=22;break}return e.abrupt("return");case 22:o=new t.web3.eth.Contract(i),c=t,u=[],o.deploy({data:n,arguments:u}).send({from:t.wallet},(function(t,e){})).on("error",(function(t){c.createLoading=!1})).on("transactionHash",(function(t){c.hashNotify(t)})).on("receipt",(function(t){c.proxyAddress!==t.contractAddress&&(c.proxyAddress=t.contractAddress,c.notifyInstance.close(),c.markSourceCode(),c.createLoading=!1,c.mint())}));case 26:case"end":return e.stop()}}),e,null,[[6,17]])})))()},markSourceCode:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n={contract:t.proxyAddress,address:t.wallet},e.next=4,Object(s["c"])("/api/v1/web/mark",n);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log("error: ",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},setConnectNonce:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("crypto/setConnectNonce",t.connectNonce+1);case 2:case"end":return e.stop()}}),e)})))()},invalidFunc:function(){},handleClipboard:function(t,e){Object(c["a"])(t,e)},querySearch:function(t,e){var n=t?Object(u["l"])().filter(this.createFilter(t)):Object(u["l"])();e(n)},createFilter:function(t){return function(e){return 0===e.toLowerCase().indexOf(t.toLowerCase())}},handleSelect:function(t){this.mintForm.p=t.toLowerCase()},handleIconClick:function(t){},modeSelect:function(t){this.modeShow=!1,this.modeIndex!==t&&(this.modeIndex=t,this.mintJson="",this.mintHex="",this.resetMintForm())},resetMintForm:function(){this.mintForm.p="",this.mintForm.tick="",this.mintForm.amt=""},jsonParse:function(){if(""===this.mintJson)return this.toMintHex1="",void this.resetMintForm();try{this.mintJson.startsWith("data:,")&&(this.mintJson=this.mintJson.slice("data:,".length));var e="data:,"+this.mintJson,n=t.from(e,"utf-8");this.toMintHex1="0x"+n.toString("hex");var i=JSON.parse(this.mintJson);for(var a in i)"p"===a&&(this.mintForm.p=i[a]),"tick"===a&&(this.mintForm.tick=i[a]),"amt"===a&&(this.mintForm.amt=i[a])}catch(r){}},hexParse:function(){if(""===this.mintHex)return this.toMintJson1="",void this.resetMintForm();var e=this.mintHex;"0x"===e.substring(0,2)&&(e=e.slice(2));try{this.toMintJson1=t.from(e,"hex").toString("utf8");var n=this.toMintJson1;n.startsWith("data:,")&&(n=n.slice("data:,".length));var i=JSON.parse(n);for(var a in i)"p"===a&&(this.mintForm.p=i[a]),"tick"===a&&(this.mintForm.tick=i[a]),"amt"===a&&(this.mintForm.amt=i[a])}catch(r){}},hashNotify:function(t){var e=this.scanUrl+"tx/"+t;"mobile"===this.device&&(e="javaScript:void(0);");var n="View on "+this.scan+" : "+t.substring(0,8)+"...",i=this.$t("coin.transDetails"),a=Object(u["i"])(i,e,n);this.notifyInstance=this.$notify({dangerouslyUseHTMLString:!0,message:a,duration:8e3,customClass:"notify-class",showClose:!1})},checkRequire:function(){for(var t in this.mintForm)if(""===this.mintForm[t]){var e=t;return"tick"===t&&(e=this.$t("global.name")),"p"===t&&(e=this.$t("coin.protocol")),"amt"===t&&(e=this.$t("coin.amount")),0===this.modeIndex?this.$message({message:e+this.$t("coin.cantNull"),type:"error"}):1===this.modeIndex?this.$message({message:this.$t("coin.textStringError"),type:"error"}):2===this.modeIndex&&this.$message({message:this.$t("coin.hexStringError"),type:"error"}),!1}return""!==this.inscribeCount||(this.$message({message:this.$t("coin.inscribeTimes")+this.$t("coin.cantNull"),type:"error"}),!1)},mint:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,i,a,r,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.checkRequire()){e.next=2;break}return e.abrupt("return");case 2:if(null!==t.bulkMintContract){e.next=5;break}return e.next=5,t.initContract();case 5:if(n="",0===t.modeIndex?n=t.toMintHex:1===t.modeIndex?n=t.toMintHex1:2===t.modeIndex&&(n=t.mintHex),""!==n){e.next=9;break}return e.abrupt("return");case 9:return i=t,t.createLoading=!0,a="0",r=parseInt(t.inscribeCount),r>=5&&(a=1==t.chainId||42161==t.chainId||8453==t.chainId?t.getEthValue("0.0001",t.inscribeCount):56==t.chainId?t.getEthValue("0.0005",t.inscribeCount):137==t.chainId?t.getEthValue("0.01",t.inscribeCount):t.getEthValue("0.001",t.inscribeCount)),e.prev=14,e.next=17,t.bulkMintContract.methods.batchMint(r,n).estimateGas({from:t.wallet});case 17:return o=e.sent,e.next=20,Object(u["d"])(t.web3,t.wallet,t.chainId,o);case 20:return s=e.sent,r>=5&&(s["value"]=a),e.next=24,t.bulkMintContract.methods.batchMint(r,n).send(s).on("error",(function(t){i.createLoading=!1})).on("transactionHash",(function(t){i.hashNotify(t)})).on("receipt",(function(t){i.notifyInstance.close()}));case 24:t.createLoading=!1,t.success(),e.next=32;break;case 28:e.prev=28,e.t0=e["catch"](14),t.createLoading=!1,t.fail();case 32:case"end":return e.stop()}}),e,null,[[14,28]])})))()},getEthValue:function(t,e){return new p.a(t).times(e).times(new p.a(10).pow(18)).toFixed(0).toString(10)},success:function(){this.$message({type:"success",center:!0,dangerouslyUseHTMLString:!0,message:"<strong>"+this.$t("coin.inscribeSuccess")+"</strong>"})},fail:function(){this.$message({type:"error",center:!0,dangerouslyUseHTMLString:!0,message:"<strong>"+this.$t("coin.inscribeFailed")+"</strong>"})}}}}).call(this,n("b639").Buffer)},"2ca0":function(t,e,n){"use strict";var i=n("23e7"),a=n("06cf").f,r=n("50c4"),o=n("5a34"),s=n("1d80"),c=n("ab13"),u=n("c430"),l="".startsWith,p=Math.min,m=c("startsWith"),d=!u&&!m&&!!function(){var t=a(String.prototype,"startsWith");return t&&!t.writable}();i({target:"String",proto:!0,forced:!d&&!m},{startsWith:function(t){var e=String(s(this));o(t);var n=r(p(arguments.length>1?arguments[1]:void 0,e.length)),i=String(t);return l?l.call(e,i,n):e.slice(n,n+i.length)===i}})},"35e4":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i=[{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}]},c631:function(t,e,n){},d956:function(t,e,n){"use strict";n("c631")},e2e3:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"mobile"===t.device?"app-container":"app-container-pc"},[n("div",{staticStyle:{"text-align":"center"}},[n("h2",{staticStyle:{color:"#333"}},[t._v(t._s(t.$t("coin.evmInsBatchMint")))])]),n("div",{staticStyle:{"text-align":"center","font-size":"14px",color:"#777"}},[t._v(t._s(t.$t("coin.inscribeDesc2")))]),n("div",{staticStyle:{"margin-top":"4px","text-align":"center","font-size":"14px",color:"#888"}},[t._v(t._s(t.$t("coin.inscribeDesc1")))]),n("div",{class:"mobile"===t.device?"padding-mobile":"padding-pc",staticStyle:{"margin-top":"12px",border:"1px solid rgba(0,0,0,0.15)","border-radius":"16px"}},[n("div",{staticStyle:{"margin-top":"12px",display:"inline-block"}},[n("el-popover",{attrs:{placement:"bottom-start","visible-arrow":!1,"popper-class":"popover-custom",trigger:"click"},model:{value:t.modeShow,callback:function(e){t.modeShow=e},expression:"modeShow"}},[t._l(t.$t("coin.inscriptionMode"),(function(e,i){return n("div",{key:i,staticClass:"mode-item",on:{click:function(e){return t.modeSelect(i)}}},[t._v(t._s(e))])})),n("div",{staticClass:"title-item",attrs:{slot:"reference"},slot:"reference"},[n("span",{staticStyle:{"margin-left":"6px",cursor:"pointer","font-weight":"500",color:"#333","font-size":"12px","margin-right":"4px"}},[t._v(t._s(t.$t("coin.inscriptionMode")[t.modeIndex]))]),t._v(" "),n("i",{class:t.modeShow?"el-icon-arrow-up":"el-icon-arrow-down",staticStyle:{"font-size":"12px"}})])],2)],1),0===t.modeIndex?n("div",[n("div",{staticStyle:{"margin-top":"20px",display:"grid","grid-template-columns":"repeat(3,1fr)"},style:"mobile"===t.device?{columnGap:"6px"}:{columnGap:"16px"}},[n("div",[n("div",{staticStyle:{color:"#333","font-size":"13px","margin-left":"2px"}},[t._v(t._s(t.$t("global.name")))]),n("div",{staticStyle:{"margin-top":"6px"}},[n("el-input",{attrs:{placeholder:"BNBS"},model:{value:t.mintForm.tick,callback:function(e){t.$set(t.mintForm,"tick",e)},expression:"mintForm.tick"}})],1)]),n("div",[n("div",{staticStyle:{color:"#333","font-size":"13px","margin-left":"2px"}},[t._v(t._s(t.$t("coin.protocol")))]),n("el-autocomplete",{staticClass:"inline-input",staticStyle:{"margin-top":"6px",width:"100%"},attrs:{"fetch-suggestions":t.querySearch,placeholder:t.$t("coin.searchP")},on:{select:t.handleSelect},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.item;return[n("div",{staticClass:"name",staticStyle:{"letter-spacing":"2px"}},[t._v(t._s(i))])]}}],null,!1,4245009297),model:{value:t.mintForm.p,callback:function(e){t.$set(t.mintForm,"p",e)},expression:"mintForm.p"}},[n("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"prefix"},on:{click:t.handleIconClick},slot:"prefix"})])],1),n("div",[n("div",{staticStyle:{color:"#333","font-size":"13px","margin-left":"2px"}},[t._v(t._s(t.$t("coin.amount")))]),n("div",{staticStyle:{"margin-top":"6px"}},[n("el-input",{attrs:{type:"number",placeholder:"1000"},model:{value:t.mintForm.amt,callback:function(e){t.$set(t.mintForm,"amt",e)},expression:"mintForm.amt"}})],1)])]),n("div",{staticClass:"input-block input-bg",staticStyle:{"margin-top":"32px"},style:t.validMintParam?{}:{opacity:"0.5"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.toMintJson,expression:"toMintJson"}],staticClass:"input-item",attrs:{required:"required",disabled:!0,placeholder:"data:,"},domProps:{value:t.toMintJson},on:{input:function(e){e.target.composing||(t.toMintJson=e.target.value)}}}),n("i",{staticClass:"el-icon-copy-document",on:{click:function(e){t.validMintParam?t.handleClipboard(t.toMintJson,e):t.invalidFunc}}})]),n("div",{staticClass:"input-block input-bg",staticStyle:{"margin-top":"12px"},style:t.validMintParam?{}:{opacity:"0.5"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.toMintHex,expression:"toMintHex"}],staticClass:"input-item",attrs:{required:"required",disabled:!0,placeholder:"data:,"},domProps:{value:t.toMintHex},on:{input:function(e){e.target.composing||(t.toMintHex=e.target.value)}}}),n("i",{staticClass:"el-icon-copy-document",on:{click:function(e){t.validMintParam?t.handleClipboard(t.toMintHex,e):t.invalidFunc}}})])]):1===t.modeIndex?n("div",[n("div",{staticClass:"input-block ",staticStyle:{"margin-top":"12px"}},[n("span",{staticStyle:{color:"#333","font-size":"15px"}},[t._v("data:,")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.mintJson,expression:"mintJson"}],staticClass:"input-item color-enable",attrs:{required:"required",placeholder:t.jsonFormat},domProps:{value:t.mintJson},on:{input:[function(e){e.target.composing||(t.mintJson=e.target.value)},t.jsonParse]}})]),n("div",{staticClass:"input-block input-bg",staticStyle:{"margin-top":"12px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.toMintHex1,expression:"toMintHex1"}],staticClass:"input-item",attrs:{disabled:!0,placeholder:t.hexFormat},domProps:{value:t.toMintHex1},on:{input:function(e){e.target.composing||(t.toMintHex1=e.target.value)}}}),n("i",{staticClass:"el-icon-copy-document",style:""===t.toMintHex1?{opacity:"0.5"}:{},on:{click:function(e){""===t.mintJson?t.invalidFunc:t.handleClipboard(t.toMintHex1,e)}}})])]):2===t.modeIndex?n("div",[n("div",{staticClass:"input-block ",staticStyle:{"margin-top":"12px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.mintHex,expression:"mintHex"}],staticClass:"input-item color-enable",attrs:{required:"required",placeholder:t.hexFormat},domProps:{value:t.mintHex},on:{input:[function(e){e.target.composing||(t.mintHex=e.target.value)},t.hexParse]}})]),n("div",{staticClass:"input-block input-bg",staticStyle:{"margin-top":"12px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.toMintJson1,expression:"toMintJson1"}],staticClass:"input-item",attrs:{disabled:!0,placeholder:t.jsonFormat},domProps:{value:t.toMintJson1},on:{input:function(e){e.target.composing||(t.toMintJson1=e.target.value)}}}),n("i",{staticClass:"el-icon-copy-document",style:""===t.toMintJson1?{opacity:"0.5"}:{},on:{click:function(e){""===t.mintHex?t.invalidFunc:t.handleClipboard(t.toMintJson1,e)}}})])]):t._e(),n("div",{staticStyle:{"margin-top":"16px"}},[n("div",{staticStyle:{color:"#333","font-size":"13px","margin-left":"2px"}},[t._v(t._s(t.$t("coin.inscribeTimes")))]),n("div",{staticClass:"input-block ",staticStyle:{"margin-top":"4px"}},[n("span",{staticStyle:{"margin-left":"4px",color:"#888","font-size":"12px"}},[t._v("x")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inscribeCount,expression:"inscribeCount"}],staticClass:"input-item color-enable",attrs:{required:"required",type:"number",placeholder:"100"},domProps:{value:t.inscribeCount},on:{input:function(e){e.target.composing||(t.inscribeCount=e.target.value)}}})])]),n("div",{staticStyle:{margin:"20px 0","text-align":"center"}},[t.web3?n("el-button",{staticStyle:{"min-width":"20%"},attrs:{type:"primary",loading:t.createLoading},on:{click:function(e){""===t.proxyAddress?t.contractMsg():t.mint()}}},[t._v(t._s(t.$t("coin.bulkInscribe")))]):n("el-button",{staticStyle:{"min-width":"20%"},attrs:{type:"primary"},on:{click:t.setConnectNonce}},[t._v(t._s(t.$t("navbar.connect")))])],1)])])},a=[],r=n("0c73"),o=r["a"],s=(n("d956"),n("e5d1"),n("2877")),c=Object(s["a"])(o,i,a,!1,null,"98e56f98",null);e["default"]=c.exports},e5d1:function(t,e,n){"use strict";n("fbdc")},fbdc:function(t,e,n){}}]);