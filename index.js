function toString(object) {
	return Object.prototype.toString.call(object)
}

module.exports = function isMergeableObject(val) {
	var nonNullObject = !!val && typeof val === 'object'

	return nonNullObject
		&& toString(val) !== '[object RegExp]'
		&& toString(val) !== '[object Date]'
}
