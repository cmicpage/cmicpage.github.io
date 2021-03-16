"use strict";

let fs = require("fs");

let page_count = parseInt(process.argv[2]);
let page_range = (
	(new Array(page_count))
	.fill()
	.map((_,i) => i + 1));

let gen_page = n => (
`<title>cmic${n}</title>

${n > 1 ? `<span style="float:left;"><a href="./${n-1}">cmic${n-1}</a></span>` : ""}
${n < page_count ? `<span style="float:right;"><a href="./${n+1}">cmic${n+1}</a></span>` : ""}

<img src="./cmic${n}.png" />`
);

let index = (
`<title>cmicpage</title>

<img src="./Banner.png" />

<p>View all the comics from here.</p>

<ul>
${page_range.map(n =>
	`\t<li><a href="./${n}">cmic${n}</a></li>`
).join("\n")}
</ul>`
);

fs.writeFileSync("index.html", index);

for(let n of page_range)
	fs.writeFileSync(`${n}.html`, gen_page(n));