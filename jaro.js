const Jaro = (input, cmp) => ({
	_matrix: undefined,
	
	get matrix() {
		return this._matrix
	},

	initMatrix: function() {
		this._matrix = []
		return (this)
	},

	compare: function() {
		const mat = this.initMatrix()
	}
})

const jaro = Jaro("test", "test")
console.log(jaro.initMatrix().matrix)
jaro
	.initMatrix()
	.compare()

module.exports = Jaro