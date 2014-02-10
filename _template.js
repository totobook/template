/**
 * The parseDecimal() funtion parses a string argument and returns an integer of the Decimal.
 * If cannot parses a string argument, return 0.
 * @param  {string} num The value to parse.
 * @return {number} Return Description number.
 */
var parseDecimal = function(num) {
	var parsed_num = parseInt(num, 10);
	return isNaN(parsed_num) ? 0 : parsed_num;
}

/**
 * The is_array() function if argument is array object, return true.
 * @param  {object}  obj The value to check.
 * @return {Boolean} Return to results of verification.
 */
var is_array = function(obj) {
	return obj &&
		typeof obj === 'object' &&
		typeof obj.length === 'number' &&
		typeof obj.splice === 'function' &&
		!(obj.propertyIsEnumerable('length'));
}