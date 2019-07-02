#!/usr/bin/node

const levenshtein = require('./levenshtein')
const jaccard = require('./jaccard')
const get_closest_word = require('./index')

/*
**	Example
**
**	get_closest_word(process.argv[2], ["next", "dev", "previous", "prev"])
**		.then(console.log)
**		.catch(console.log)
**	get_closest_word(process.argv[2], ["next", "dev", "previous", "prev"], 2)
**		.then(console.log)
**		.catch(console.log)
*/

get_closest_word(jaccard, process.argv[2], ["next", "dev", "previous", "prev"])
	.then(console.log)
	.catch(console.log)