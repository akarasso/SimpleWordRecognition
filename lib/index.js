const Jaccard = require('./jaccard')

const {
	Damerau_Levenshtein,
	Levenstein,
} = require('./damerau_levenshtein')

const {
	Jaro,
	JaroWinkler,
} = require('./jaro')

const get_closest_word = (method, input, words, max_distance) => {
	if (Array.isArray(words) == false)
		throw new Error("Unhandle words type")
	if (typeof input != 'string')
		throw new Error("Unhandle input type")
	const distances = words.map(e => method(input, e))
	const closest = distances.reduce((acc, dist, index) => {
		if (dist < acc.dist || acc.index < 0) {
			if (typeof max_distance !== 'undefined' && dist > max_distance)
				return acc
			return { index, dist }
		}
		return acc
	}, { index: -1, dist: -1})
	return words[closest.index]
}

module.exports = {
	Damerau_Levenshtein,
	Levenstein,
	Jaccard,
	Jaro,
	JaroWinkler,
	get_closest_word,
}