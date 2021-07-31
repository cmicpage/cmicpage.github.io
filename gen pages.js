"use strict";

let fs = require("fs");

let page_count = parseInt(process.argv[2]);
let page_range = (
	(new Array(page_count))
	.fill()
	.map((_,i) => i + 1));

let gen_page = n => (
`<meta property="og:title" content="cmic${n}" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://cmicpage.github.io/cmic${n}.png" />
<meta property="og:url" content="https://cmicpage.github.io/cmic${n}" />

<meta property="og:description" content="READERADERE TEHEH CMICMICI" />

<title>cmic${n}</title>

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
`<meta property="og:title" content="cmic" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://cmicpage.github.io/Thumbnail.png" />
<meta property="og:url" content="https://cmicpage.github.io" />
<meta property="og:description" content="READERADERE TEHEH CMICMICI" />

<title>cmicpage</title>

<img src="./Banner.png" />

<p>View all the comics from here.</p>

<ul>
${page_range.map(n =>
	`\t<li><a href="./${n}">cmic${n}</a></li>`
).join("\n")}
</ul>

<p><a href="https://discord.gg/2C6st5Swpc">https://discord.gg/2C6st5Swpc</a></p>`
);

fs.writeFileSync("index.html", index);

for(let n of page_range)
	fs.writeFileSync(`${n}.html`, gen_page(n));