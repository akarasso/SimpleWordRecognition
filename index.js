#!/usr/bin/node

/*
**	Returns closest word from list
*/

module.exports = get_closest_word = async (method, input, list, max_distance) => {
	const distances = list.map(e => method(input, e))
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
