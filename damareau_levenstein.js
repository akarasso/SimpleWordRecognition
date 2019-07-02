const initMatrix = (input, cmp) => {
	const mat = new Array(input.length + 1)
	for (let y = 0; y < input.length + 1; y++) {
		mat[y] = new Array(cmp.length + 1)
		for (let x = 0; x < cmp.length + 1; x++) {
			if (y === 0) {
				mat[y][x] = x
			} else if (x === 0) {
				mat[y][x] = y
			} else {
				mat[y][x] = 0
			}
		}
	}
	return mat
}

const calc_cost_matrix = (input, cmp) => {
	const ret = new Array(input.length)
	for (let i = 0; i < input.length; i++) {
		ret[i] = new Array(cmp.length)
		let char = input[i]
		for (let j = 0; j < cmp.length; j++) {
			ret[i][j] = (char != cmp[j]) ? 1 : 0
		}
	}
	return ret
}

const distance = (mat, costMat, input, cmp) => {
	for (var y = 1; y < mat.length; y++) {
		for (var x = 1; x < mat[0].length; x++) {
			mat[y][x] = Math.min(
				mat[y-1][x] + 1,
				mat[y][x-1] + 1,
				mat[y-1][x - 1] + costMat[y - 1][x - 1]
			)
			if (y > 1 && x > 1 && input[y] == cmp[x - 1] && input[y - 1] == cmp[x]) {
				mat[y][x] = Math.min(
					mat[y][x],
					mat[y - 2][x - 2],
				)		
			}
		}
	}
	return mat[mat.length - 1][mat[0].length - 1]
}


/*
**	Damereau Levenshtein method
*/

const damereau_levenshtein = (input, cmp) => {
	const matrix = initMatrix(input, cmp)
	const costMat = calc_cost_matrix(input, cmp)
	return distance(matrix, costMat, input, cmp)
}

/*
**	Levenshtein method
*/

const levenshtein = (input, cmp) => {
	const matrix = initMatrix(input, cmp)
	const costMat = calc_cost_matrix(input, cmp)
	return distance(matrix, costMat)
}

module.exports = {
	damereau_levenshtein,
	levenshtein,
}