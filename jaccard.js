const initMatrix = () => {
	const mat = new Array(2)
	for (let i = 0; i < 2; i++) {
		mat[i] = new Array(2).fill(0)
	}
	return mat
}

const calc_diff = (mat, input, cmp) => {
	const count = {}
	input.split('').forEach(v => {
		if (count[v]) {
			count[v]++
		} else {
			count[v] = 1
		}
	})

	cmp.split('').forEach(v => {
		if (count[v]) {
			count[v]--
			mat[1][1]++
			if (count[v] === 0)
				delete count[v]
		} else {
			mat[0][1]++
		}
	})

	for (let [k, v] of Object.entries(count)) {
		mat[1][0] += v
	}
}

const coef_simi = mat => ((mat[0][1] + mat[1][0]) / (mat[0][1] + mat[1][0] + mat[1][1]))

module.exports = jaccard = (input, cmp) => {
	const matrix = initMatrix()
	calc_diff(matrix, input, cmp)
	return coef_simi(matrix)
}