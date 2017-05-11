'use strict';
module.exports = function reverseString(strs) {
	if (typeof strs === 'number') {
	return "Please enter a string";
	}
		
	if (!Boolean(strs)) {
	return null;
	}
	if (strs === strs.split('').reverse().join('')) {
	return true;
	}
	if(strs.length > 1){
	return strs.split('').reverse().join('');
	}
   
}