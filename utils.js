module.exports = getMin = (...values) => values.reduce((acc, v) => {
	if (v < acc || acc === null)
		return v
	return acc
}, null)