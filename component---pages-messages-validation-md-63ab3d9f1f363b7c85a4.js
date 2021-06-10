(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{dddk:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return b}));var a=n("Fcif"),i=n("+I+c"),s=(n("mXGw"),n("/FXl")),o=n("TjRS"),r=(n("aD51"),{});void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"pages/Messages/Validation.md"}});var c={_frontmatter:r},l=o.a;function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)(l,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"message-validation"},"Message Validation"),Object(s.b)("p",null,"All messages must be validated by announcers before being included in a batch file, however clients and indexers should not rely on announcer validation alone and should perform their own validation on incoming messages as well.\nMessage validation in this document is defined as a collection of independent checks which may be run in parallel depending on implementation, however all checks are required to pass for a message to be considered valid."),Object(s.b)("p",null,"In general, all implementations must validate announcements for correctness against the ",Object(s.b)("a",{parentName:"p",href:"/Messages/Overview"},"DSNP message schema")," and authenticity using ",Object(s.b)("a",{parentName:"p",href:"/Messages/Signatures"},"their provided signatures"),".\nClient and indexer implementations must also validate the activity pub content of applicable messages for correctness with the ",Object(s.b)("a",{parentName:"p",href:"https://www.w3.org/TR/activitypub/"},"Activity Pub schema")," and authenticity using the provided content hash.\nAnnouncers may choose to skip content validation checks in the interest of performance given the high cost of fetching content."),Object(s.b)("h2",{id:"specification-status"},"Specification Status"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Version"),Object(s.b)("th",{parentName:"tr",align:null},"Status"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"0.1"),Object(s.b)("td",{parentName:"tr",align:null},"Tentative")))),Object(s.b)("h2",{id:"purpose"},"Purpose"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Describe the process of validating messages for inclusion in a batch.")),Object(s.b)("h2",{id:"assumptions"},"Assumptions"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"All assumptions from ",Object(s.b)("a",{parentName:"li",href:"/Messages/Overview"},"DSNP Messages")),Object(s.b)("li",{parentName:"ul"},"All assumptions from ",Object(s.b)("a",{parentName:"li",href:"/Messages/Signatures"},"DSNP Signatures"))),Object(s.b)("h2",{id:"announcement-correctness"},"Announcement Correctness"),Object(s.b)("p",null,"Validation of announcement correctness will vary depending on which fields are present on a particular DSNP message type.\nValidating correctness for a message will consist of verifying that each field in the message is defined and meets the formatting rules listed in the subsections below for the given field type."),Object(s.b)("h3",{id:"emoji"},"Emoji"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Emoji fields must not be empty."),Object(s.b)("li",{parentName:"ol"},"Emoji fields must only consist of ",Object(s.b)("a",{parentName:"li",href:"https://unicode.org/standard/standard.html"},"Unicode points")," from ",Object(s.b)("inlineCode",{parentName:"li"},"U+2000")," to ",Object(s.b)("inlineCode",{parentName:"li"},"U+2BFF"),", from ",Object(s.b)("inlineCode",{parentName:"li"},"U+E000")," to ",Object(s.b)("inlineCode",{parentName:"li"},"U+FFFF"),", or from ",Object(s.b)("inlineCode",{parentName:"li"},"U+1F000")," to ",Object(s.b)("inlineCode",{parentName:"li"},"U+10FFFF"),".")),Object(s.b)("p",null,"For example, all of the following should be considered valid emoji:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'"😀", "🤌🏼", "👩🏻‍🎤", "🧑🏿‍🏫", "🏳️‍🌈", "🏳️‍⚧️", "⚛︎", "🃑", "♻︎"\n')),Object(s.b)("p",null,"Additionally, none of the following should be considered valid:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'"F", ":custom-emoji:", "<custom-emoji>", "ᚱ", "ᘐ", "״"\n')),Object(s.b)("h3",{id:"hashes"},"Hashes"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Hash fields must be exactly 32 bytes.")),Object(s.b)("h3",{id:"message-ids"},"Message Ids"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Message Identifier fields must meet all standards defined in the ",Object(s.b)("a",{parentName:"li",href:"/Messages/Identifiers"},"Message Identifiers")," specification.")),Object(s.b)("h3",{id:"signatures"},"Signatures"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Signature fields must be exactly 64 bytes.")),Object(s.b)("h3",{id:"type-enumerators"},"Type Enumerators"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Type Enumerator fields must be a valid enumerator value as defined in the ",Object(s.b)("a",{parentName:"li",href:"/Messages/Overview"},"Message Overview"),".")),Object(s.b)("h3",{id:"uri-fields"},"URI Fields"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"URI fields must include meet all standards defined in ",Object(s.b)("a",{parentName:"li",href:"http://www.ietf.org/rfc/rfc3986.txt"},"RFC3986"),"."),Object(s.b)("li",{parentName:"ol"},"URI fields must not refer to localhost or any reserved IP addresses as defined in ",Object(s.b)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc6890"},"RFC6890")),Object(s.b)("li",{parentName:"ol"},"URI fields must use the ",Object(s.b)("inlineCode",{parentName:"li"},"https")," protocol. Support for other protocols may be added in the future.")),Object(s.b)("h3",{id:"user-ids"},"User Ids"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"User Id fields must be exactly 8 bytes.")),Object(s.b)("h2",{id:"announcement-authenticity"},"Announcement Authenticity"),Object(s.b)("p",null,"Validation of announcement authenticity will consist of verifying the message's signature using the appropriate public key for the user listed in the ",Object(s.b)("inlineCode",{parentName:"p"},"fromId")," field.\nSpecific steps for fetching a public key are as follows:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Resolve the identity contract from the ",Object(s.b)("inlineCode",{parentName:"li"},"fromId")," included in the DSNP messages."),Object(s.b)("li",{parentName:"ol"},"Use the ",Object(s.b)("a",{parentName:"li",href:"https://spec.projectliberty.io/Messages/Signatures"},"https://spec.projectliberty.io/Messages/Signatures")," spec with ",Object(s.b)("inlineCode",{parentName:"li"},"ecrecovery")," to recover the signer's public key."),Object(s.b)("li",{parentName:"ol"},"Test the public key against the identity contract using ",Object(s.b)("inlineCode",{parentName:"li"},"IDelegation.isAuthorizedTo"),".")),Object(s.b)("p",null,"Once the key is fetched, the signature can be verified against it using the ",Object(s.b)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/Secp256k1"},"Secp256k1")," and the ",Object(s.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SHA-3"},"keccak-256")," hash of the serialized message as described in the ",Object(s.b)("a",{parentName:"p",href:"/Messages/Signatures#verifying-messages"},"Message Signatures")," specification."),Object(s.b)("h2",{id:"content-correctness"},"Content Correctness"),Object(s.b)("p",null,"Like announcement correctness, validating content correctness will vary greatly depending on the content of the message, but generally, it will consist of verifying the overall structure of the activity pub object and format of values associated with each field.\nAs previously stated, announcers may skip this check in the interest of performance, but clients and indexers must not.\nSpecifically, the following rules detail how activity pub content should be validated:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Content must be a valid JSON object as defined in ",Object(s.b)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc7159"},"RFC7159"),"."),Object(s.b)("li",{parentName:"ol"},"Content must include a type field matching one or more of the ",Object(s.b)("a",{parentName:"li",href:"https://www.w3.org/TR/activitystreams-vocabulary/#h-types"},"core types")," or ",Object(s.b)("a",{parentName:"li",href:"https://www.w3.org/TR/activitystreams-vocabulary/#h-extendedtypes"},"extended types")," defined in the ",Object(s.b)("a",{parentName:"li",href:"https://www.w3.org/TR/activitystreams-vocabulary/"},"Activity Vocabulary")," specification."),Object(s.b)("li",{parentName:"ol"},"Content must include all necessary fields associated with the given type defined in the ",Object(s.b)("a",{parentName:"li",href:"https://www.w3.org/TR/activitypub/"},"Activity Pub")," specification.")),Object(s.b)("p",null,"Additional fields not required or defined by the Activity Pub specifications may also be included in accordance with various extensions of the specification, such as ",Object(s.b)("a",{parentName:"p",href:"https://docs.joinmastodon.org/spec/activitypub/"},"Mastodon"),", ",Object(s.b)("a",{parentName:"p",href:"https://github.com/forgefed/forgefed"},"ForgeFed")," or one of the many ",Object(s.b)("a",{parentName:"p",href:"https://www.w3.org/wiki/ActivityPub_extensions"},"potential future extensions")," proposed by the ",Object(s.b)("a",{parentName:"p",href:"https://www.w3.org"},"W3C"),"."),Object(s.b)("p",null,"If the content of a message is no longer accessible, i.e. the URI of the message returns a 404 or 500 HTTP status, the message is invalid and should be ignored.\nIt is also recommended that implementations provide a warning either in the console or directly to the user with the associated HTTP status.\nFor example, a message such as ",Object(s.b)("inlineCode",{parentName:"p"},'"Content Inaccessible: Error 404"')," would suffice."),Object(s.b)("h2",{id:"content-authenticity"},"Content Authenticity"),Object(s.b)("p",null,"Authentication of a message's contents must be verified by hashing the exact contents of the body returned by the message URI and comparing it with the ",Object(s.b)("inlineCode",{parentName:"p"},"contentHash")," field of the given message.\nGiven that the signature of the message is valid, this hash serves as proof that the signing user posted the activity pub content."),Object(s.b)("p",null,"For example, given a DSNP message with the following content at it's URI:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": "https://www.w3.org/ns/activitystreams",\n  "type": "Note",\n  "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."\n}\n')),Object(s.b)("p",null,"The resulting hash would be ",Object(s.b)("inlineCode",{parentName:"p"},"0x70ae98439569700ae8328f204ba496e4ac151dc117d08ac217daa15b412641f7"),".\nNotice that this hash is generated including spaces and newlines exactly as they appear in the content body.\nThe content body must be hashed byte for byte from the response of the URI with absolutely no processing."))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"pages/Messages/Validation.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---pages-messages-validation-md-63ab3d9f1f363b7c85a4.js.map