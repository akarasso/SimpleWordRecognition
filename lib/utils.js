const init_matrix = (input, cmp) => {
	const height = (typeof input == "string") ? input.length : input
	const width = (typeof cmp == "string") ? cmp.length : cmp
	const matrix = new Array(height)
	for(let j = 0; j < height; j++) {
		matrix[j] = new Array(width).fill(0)
	}
	return matrix
}

module.exports = {
	init_matrix,
}
