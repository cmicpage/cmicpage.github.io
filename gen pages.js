"use strict";

let fs = require("fs");

let page_count = parseInt(process.argv[2]);
let page_range = (
	(new Array(page_count))
	.fill()
	.map((_,i) => i + 1));

let gen_page = n => (
`<title>cmic${n}</title>

<style>
	#menu-bar {
		display: grid;
		grid-display-columns: auto max-content auto;
	}
</style>

<div id="menu-bar">
	<div style="grid-column-start: 1; text-align:left;">${n > 1 ? `<a href="./${n-1}">cmic${n-1}</a>` : ""}</div>
	<div style="grid-column-start: 2; text-align:center;"><a href=".">all comics</a></div>
	<div style="grid-column-start: 3; text-align:right;">${n < page_count ? `<a href="./${n+1}">cmic${n+1}</a>` : ""}</div>
</div>

<img src="./cmic${n}.png" />`
);

let index = (
`<title>cmicpage</title>

<img src="./Banner.png" />

<p><a href="https://discord.gg/2C6st5Swpc">https://discord.gg/2C6st5Swpc</a></p>

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