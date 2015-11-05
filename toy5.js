/*given an arbitrary input string, return the first non-repeated character in the string
 */

//solution for first non-repeated character

function norepeat(str) {
	var newArr = str.split("");
	for (var i = 0; i < str.length; i++) {
		if (i > 0) {
			if (str[i - 1] !== str[i] && str[i] !== str[i + 1]) {
				return str[i];
			}
		}
	}
}

//solution for first non-unique 

function norepeat(str) {
	var newArr = str.split("");
	var test =
		return newArr.filter(function (val) {
			return (!newArr.indexOf(val));
		})
	test.forEach(function (value, index) {
		if (value === true) {
			return value;
		}

	});
}


//johns solution

function norepeat(str) {
	for (var i = 0; i < str.length; i++) {
		if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
			return str[i];
		}
	}

}


//group filter solution

function firstNonRepeatedCharacter(str) {
	var newStr = str.split('');
	return newStr.filter(function (x) {
		return this.indexOf(x) === this.lastIndexOf(x)
	}, newStr).shift();
}