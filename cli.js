#!/usr/bin/env node
const meow = require('meow');
const zimap = require('./');

const cli = meow(`
	Usage
	  $ zimap [filename]

	Examples
	  $ zimap ./test/style.css
	  { count: 4, levels: [ 1, 10, 100, -1 ] }
`);

zimap(cli.input[0])
	.then(stats => {
		console.log(stats);
	});
