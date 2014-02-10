/**
 * The parseDecimal() funtion parses a string argument and returns an integer of the Decimal.
 * @param  {string} num The value to parse.
 * @return {number} Return Description number.
 */
function parseDecimal(num)
{
	return parseInt(num, 10);
}

/**
 * The is_array() function if argument is array object, return true.
 * @param  {object}  obj The value to check.
 * @return {Boolean} Return to results of verification.
 */
function is_array(obj)
{
	return obj &&
		typeof obj === 'object' &&
		typeof obj.length === 'number' &&
		typeof obj.splice === 'function' &&
		!(obj.propertyIsEnumerable('length'));
}