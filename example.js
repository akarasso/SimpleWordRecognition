#!/usr/bin/node

const {
	Levenshtein,
	Jaccard,
	Damerau_Levenshtein,
	Jaro,
	JaroWinkler,
	get_closest_word,
} = require('./lib')

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

console.log(get_closest_word(JaroWinkler, process.argv[2], ["next", "dev", "previous", "prev"]))