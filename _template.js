// Whole-script strict mode syntax
"use strict";

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

/**
 * The isSmartPhone() function check,is access device smart phone from useragent.
 * @return {Boolean} Return to results of check.
 */
var isSmartPhone = function() {
	var ua = window.navigator.userAgent;
	return (ua.indexOf('Android') > 0 || ua.indexOf('iPhone') > 0);
}

/**
 * The _ua object is browser sniffing information without useragent.
 * via. https://w3g.jp/blog/tools/js_browser_sniffing
 */
var _ua = (function() {
	return {
		ltIE6:typeof window.addEventListener == "undefined" &&
			typeof document.documentElement.style.maxHeight == "undefined",
		ltIE7:typeof window.addEventListener == "undefined" &&
			typeof document.querySelectorAll == "undefined",
		ltIE8:typeof window.addEventListener == "undefined" &&
			typeof document.getElementsByClassName == "undefined",
		ltIE9:document.uniqueID && !window.matchMedia,
		gtIE10:document.uniqueID && document.documentMode >= 10,
		Trident:document.uniqueID,
		Gecko:'MozAppearance' in document.documentElement.style,
		Presto:window.opera,
		Blink:window.chrome,
		Webkit:!window.chrome &&
			'WebkitAppearance' in document.documentElement.style,
		Touch:typeof document.ontouchstart != "undefined",
		Mobile:typeof window.orientation != "undefined",
		Pointer:window.navigator.pointerEnabled,
		MSPoniter:window.navigator.msPointerEnabled
	}
})();