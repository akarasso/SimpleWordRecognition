const { initMatrix } = require('./utils')

const getMaxTranspositonDistance = (input, cmp) => Math.floor((Math.max(input.length, cmp.length) / 2) - 1)

const get_number_of_transposition = mat => {
	let lastindex = -1
	let count = 0
	for (let x = 0; x < mat[0].length; x++) {
		for (let y = 0; y < mat.length; y++) {
			if (mat[y][x] == 1) {
				if (lastindex == -1) {
					lastindex = y
				} else {
					if (y < lastindex)
						count++
					lastindex = y
				}
				break
			}
		}
	}
	return count
}

const Jaro = (input, cmp) => {
	const matrix = initMatrix(input, cmp)
	const maxTranspositionDistance = getMaxTranspositonDistance(input, cmp)

	let count_transpositions
	let	count_matches = 0
	let value = 0
	for(let index = 0; index < input.length; index++) {
		let char = input[index]
		let start = Math.max(0, index - maxTranspositionDistance - 1)
		let end = Math.min(cmp.length, index + maxTranspositionDistance + 2)
		for(let x = start; x < end; x++) {
			if (char == cmp[x]) {
				matrix[index][x] = 1
				count_matches++
				break;
			}
		}
	}
	count_transpositions = get_number_of_transposition(matrix)
	if (count_matches != 0) {
		value = ((count_matches / input.length)
			+ (count_matches / cmp.length)
			+ ((count_matches - count_transpositions) / count_matches)) / 3.0
	}
	return (1 - value)
}

const countLen = (mat, y, x) => {
	let len = 1

	while (y < mat.length - 1 &&
		x < mat[0].length - 1 &&
		mat[y][x] == mat[y + 1][x + 1]) {
		x++
		y++
		len++
	}
	return len
}

const getMaxContigusLen = mat => {
	let y = 0
	let maxlen = 0
	let len
	let x

	while (y < mat.length) {
		x = 0
		while (x < mat[0].length) {
			if (mat[y][x] != 0) {
				len = countLen(mat, y, x)
				if (maxlen < len)
					maxlen = len
			}
			x++
		}
		y++
	}
	return maxlen
}

const JaroWinkler = (input, cmp, coef = 0.20) => {
	const matrix = initMatrix(input, cmp)
	const maxTranspositionDistance = getMaxTranspositonDistance(input, cmp)

	let count_transpositions
	let	count_matches = 0
	let value = 0
	for(let index = 0; index < input.length; index++) {
		let char = input[index]
		let start = Math.max(0, index - maxTranspositionDistance - 1)
		let end = Math.min(cmp.length, index + maxTranspositionDistance + 2)
		for(let x = start; x < end; x++) {
			if (char == cmp[x]) {
				matrix[index][x] = 1
				count_matches++
				break;
			}
		}
	}
	const maxLen = getMaxContigusLen(matrix)
	console.log({ maxLen })
	count_transpositions = get_number_of_transposition(matrix)
	if (count_matches != 0) {
		value = ((count_matches / input.length)
			+ (count_matches / cmp.length)
			+ ((count_matches - count_transpositions) / count_matches)) / 3.0
	}
	return (1 - (value + maxLen * coef * (1 - value)))
}

module.exports = {
	Jaro,
	JaroWinkler,
}
