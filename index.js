const fs = require('fs-promise');

const indicesRegex = /z-index\s*:\s*(\-?\d+);?/g;

/**
 * This function, when called with a valid filename, returns a Promise
 * which resolves to z-index stats about the given file.
 *
 * @param  {string} filename Name of the file to give stats about.
 * @return {Promise<Object>} A Promise which resolves to z-index stats.
 */
module.exports = filename => {
	return fs.readFile(filename, 'utf8')
		.then(data => {
			let match = indicesRegex.exec(data);
			const indices = new Set();

			while (match !== null) {
				indices.add(parseInt(match[1], 10));
				match = indicesRegex.exec(data);
			}

			return {
				count: indices.size,
				levels: Array.from(indices.values())
			};
		})
		.catch(err => {
			throw err;
		});
};
