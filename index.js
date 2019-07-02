#!/usr/bin/node

/*
**	Returns closest word from list
*/

module.exports = get_closest_word = async (method, input, list, max_distance) => {
	let distances = list.map(e => method(input, e))
	if (typeof input === 'string') {
		if (Array.isArray(list))
			distances = list.map(e => method(input, e))
		else if (typeof list === 'string')
			distances = [ method(input, list) ]
		else
			throw new Error("Unhandle list type")
	}
	else
		throw new Error("Unhandle input type")
	const closest = distances.reduce((acc, dist, index) => {
		if (dist < acc.dist || acc.index < 0) {
			if (typeof max_distance !== 'undefined' && dist > max_distance)
				return acc
			return { index, dist }
		}
		return acc
	}, { index: -1, dist: -1})
	return list[closest.index]
}
