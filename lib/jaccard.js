const { init_matrix } = require('./utils')

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

module.exports = Jaccard = (input, cmp) => {
	const matrix = init_matrix(2, 2)
	calc_diff(matrix, input, cmp)
	return coef_simi(matrix)
}