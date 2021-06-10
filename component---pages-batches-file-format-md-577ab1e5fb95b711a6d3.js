(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{ViJ7:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));var r=a("Fcif"),i=a("+I+c"),o=(a("mXGw"),a("/FXl")),n=a("TjRS"),s=(a("aD51"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"pages/Batches/FileFormat.md"}});var l={_frontmatter:s},c=n.a;function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(c,Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"batch-file-storage"},"Batch File Storage"),Object(o.b)("p",null,"Batch files are stored and transferred in Apache Parquet format."),Object(o.b)("h2",{id:"specification-status"},"Specification Status"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Version"),Object(o.b)("th",{parentName:"tr",align:null},"Status"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"0.1"),Object(o.b)("td",{parentName:"tr",align:null},"Draft")))),Object(o.b)("h2",{id:"purpose"},"Purpose"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Specify the format for storing and transferring Batch files."),Object(o.b)("li",{parentName:"ol"},"Specify recommended parameters of the Batch files"),Object(o.b)("li",{parentName:"ol"},"Describe reasons for the choice of format.")),Object(o.b)("h2",{id:"assumptions"},"Assumptions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"All assumptions from ",Object(o.b)("a",{parentName:"li",href:"/Messages/Overview"},"DSNP Messages"))),Object(o.b)("h2",{id:"details"},"Details"),Object(o.b)("p",null,"Parameters for Batch file storage with Bloom filters are to be chosen with client applications in mind; consumer devices must be able to query, download and sift through downloaded batch files without adversely affecting user experience by way of long download times, heavy processing requirements which may quickly sap battery power, or by using lots of memory."),Object(o.b)("p",null,"Note this carries implications for row group size as well as configuration of Bloom filters for the batch file."),Object(o.b)("h2",{id:"bloom-filter-row-group-size"},"Bloom filter, row group size"),Object(o.b)("p",null,"Optimal settings are still under investigation, however, the maximum row group size allowed in a Parquet file (128",Object(o.b)("em",{parentName:"p"},"1024"),"1024 rows) is far too large for a browser or small client application to handle in JavaScript.\nWe are currently defaulting to 128*1024 rows.  "),Object(o.b)("p",null,"In Parquet, the Bloom filter type is Split Block; the calculation for filter bits is different and nearly a factor of 10 lower than for the normal Bloom filter.\n128*1024 rows with a 0.001 false positive rate results in around 29,000 bits for a Split Block Bloom filter."),Object(o.b)("p",null,"Absent benchmarks, the False Positive Rate currently defaults to 0.001."),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("p",null,"Batch announcements are done via the SDK API for Announcements.\nBloom filter settings are set as described above in the SDK.\nThis may be configurable without changing the source code at a later date.  "),Object(o.b)("h2",{id:"benchmarks"},"Benchmarks"),Object(o.b)("p",null,"TBD"),Object(o.b)("h2",{id:"justifications"},"Justifications"),Object(o.b)("h3",{id:"requirements"},"Requirements"),Object(o.b)("p",null,"Batch files need to be quickly and easily searchable.\nMinimal storage size and fast, simple querying are preferred to guarantees of no false positives or advanced data manipulation and column relationships.\nThe files are parseable by client applications, web views or browsers running pure JavaScript without a need to convert the format."),Object(o.b)("p",null,"Applications need to know if a given Batch file has any information they are interested in without downloading the file first."),Object(o.b)("h3",{id:"why-parquet"},"Why Parquet?"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Parquet is a ",Object(o.b)("strong",{parentName:"li"},"column-oriented format"),". Since DSNP Batch Message data will have a very small column-to-row ratio compared to a typical web application database, it makes sense to prefer a column-oriented format."),Object(o.b)("li",{parentName:"ol"},"Parquet format ",Object(o.b)("strong",{parentName:"li"},"has been field-tested under extreme network conditions"),". It has broad support in cloud storage solutions, with libraries in multiple languages."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Bloom filters are already supported")," in the Parquet specification, which allows for fast and accurate searching (with caveats for proper configuration)."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Amazon S3 support"),": we anticipate that some Batch Announcers, and possibly Archivists, will store Batch files on Amazon S3. Amazon Athena also supports storage in Parquet, and its API supports SQL-like queries."),Object(o.b)("li",{parentName:"ol"},"Parquet also ",Object(o.b)("strong",{parentName:"li"},"allows references to the same column across files"),", which could enable multi-file querying in the future."),Object(o.b)("li",{parentName:"ol"},"Parquet ",Object(o.b)("strong",{parentName:"li"},"supports compression formats")," such as Brötli, which itself is already a browser standard and has a demonstrated improvement in compression speed and file size over older formats."),Object(o.b)("li",{parentName:"ol"},"Parquet ",Object(o.b)("strong",{parentName:"li"},"files can be transferred directly")," to clients, which can parse the files in the app or browser. No conversion to some serialization format is necessary. This eliminates an entire class of bugs as well as making both fetching and querying faster."),Object(o.b)("li",{parentName:"ol"},"Parquet ",Object(o.b)("strong",{parentName:"li"},"uses schemas"),", which additionally reduces file size.")),Object(o.b)("h3",{id:"rejected-alternatives"},"Rejected alternatives"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Cassandra, RocksDB, CouchDB, MongoDB, HBASE were rejected since DSNP data needs neither a database for storage nor the overhead of one. Each of these was designed for use cases ranging from somewhat to drastically different to the DSNP network."),Object(o.b)("li",{parentName:"ol"},"JSON, BSON and SQLite, while used for storage sometimes, are intended for serialization. They are schemaless, which results in redundant information and therefore a larger size than formats with schemas. They also don't support Bloom filters; instead indexing would be required, or new batches would need to be downloaded entirely.  The exception is SQLite, which does support more advanced queries, however, it was designed for in-memory storage.")))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"pages/Batches/FileFormat.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---pages-batches-file-format-md-577ab1e5fb95b711a6d3.js.map