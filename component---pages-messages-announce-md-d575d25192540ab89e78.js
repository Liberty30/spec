(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{ZHrw:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a("Fcif"),b=a("+I+c"),c=(a("mXGw"),a("/FXl")),r=a("TjRS"),l=(a("aD51"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"pages/Messages/Announce.md"}});var i={_frontmatter:l},o=r.a;function s(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(c.b)(o,Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"announcing-messages"},"Announcing Messages"),Object(c.b)("h2",{id:"specification-status"},"Specification Status"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Version"),Object(c.b)("th",{parentName:"tr",align:null},"Status"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"0.1"),Object(c.b)("td",{parentName:"tr",align:null},"Tentative")))),Object(c.b)("h2",{id:"purpose"},"Purpose"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Describe the method to announce ",Object(c.b)("a",{parentName:"li",href:"/Messages/Overview"},"DSNP Messages")," to the blockchain."),Object(c.b)("li",{parentName:"ol"},"Provide Solidity code examples (pending final contract)"),Object(c.b)("li",{parentName:"ol"},"Facilitate use of SDK and locating of on-chain data")),Object(c.b)("h2",{id:"assumptions"},"Assumptions"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Chain messages are on Ethereum"),Object(c.b)("li",{parentName:"ul"},"Message data is posted via ",Object(c.b)("a",{parentName:"li",href:"https://medium.com/mycrypto/understanding-event-logs-on-the-ethereum-blockchain-f4ae7ba50378"},"Ethereum log events")),Object(c.b)("li",{parentName:"ul"},"Signature algorithm is ",Object(c.b)("a",{parentName:"li",href:"https://en.bitcoin.it/wiki/Secp256k1"},"secp256k1"),". This allows the use ",Object(c.b)("inlineCode",{parentName:"li"},"ecreover"),"\nto get public keys. A public key also need not be included in a log event for ease of validation."),Object(c.b)("li",{parentName:"ul"},"content hashes are created via the same ",Object(c.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/SHA-3"},"keccak-256 hashing algorithm")," used by Ethereum.")),Object(c.b)("h2",{id:"announcing-dsnp-events"},"Announcing DSNP Events"),Object(c.b)("h3",{id:"dsnpbatch-event"},"DSNPBatch Event"),Object(c.b)("p",null,"The DSNPBatch event is a standard event topic to be used for announcing a location that a list of ",Object(c.b)("a",{parentName:"p",href:"/Messages/Overview"},"DSNP Messages")," can be found."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"interface IAnnounce {\n    event DSNPBatch(bytes32 dsnpHash, string dsnpUri);\n}\n")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"field"),Object(c.b)("th",{parentName:"tr",align:null},"description"),Object(c.b)("th",{parentName:"tr",align:null},"type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"dsnpHash"),Object(c.b)("td",{parentName:"tr",align:null},"Keccak-256 hash of each hash included in the batch"),Object(c.b)("td",{parentName:"tr",align:null},"bytes32")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"dsnpUri"),Object(c.b)("td",{parentName:"tr",align:null},"Uri containing the batch file matching ",Object(c.b)("a",{parentName:"td",href:"/Messages/Overview"},"DSNP Messages")),Object(c.b)("td",{parentName:"tr",align:null},"string")))),Object(c.b)("h3",{id:"event-topic"},"Event Topic"),Object(c.b)("p",null,"The event topic for DSNPBatch follows the standard Solidity event name to hash standard."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'0xb4ac029c8b5c911494e703c67200023f015b73f7b42c3cb4b580b5588fac2d10 = keccak-256("DSNPBatch(bytes32,string)")\n')),Object(c.b)("h3",{id:"announce-requirements"},"Announce Requirements"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Interface"),Object(c.b)("th",{parentName:"tr",align:null},"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"IAnnounce"),Object(c.b)("td",{parentName:"tr",align:null},"Required")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-165"},"ERC165")),Object(c.b)("td",{parentName:"tr",align:null},"Optional")))),Object(c.b)("h2",{id:"default-announce-contract"},"Default Announce Contract"),Object(c.b)("p",null,"An open public announce contract will be available for anyone to use.\nThe contract address and link to code to be updated here once completed."),Object(c.b)("h3",{id:"address"},"Address"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Network"),Object(c.b)("th",{parentName:"tr",align:null},"Address"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"testnet"),Object(c.b)("td",{parentName:"tr",align:null},"TBD")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"Beta Mainnet"),Object(c.b)("td",{parentName:"tr",align:null},"TBD")))))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"pages/Messages/Announce.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---pages-messages-announce-md-d575d25192540ab89e78.js.map