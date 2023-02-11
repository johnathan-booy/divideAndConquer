/**
Given a sorted array consisting of 1s and 0s, returns the number of zeroes in the array.

@param {array} array - The sorted array of 1s and 0s to search for zeroes.
@returns {number} The number of zeroes in the input array.
*/

function countZeroes(array) {
	// Find the index of the first zero in the input array using binary search
	const firstZero = findFirst(array);

	// If no zeroes are found, return 0
	if (firstZero === -1) {
		return 0;
	}

	// Otherwise, return the number of zeroes in the input array, which is equal to the length of the array minus the index of the first zero
	return array.length - firstZero;
}

/**
Uses binary search to find the index of the first zero in a sorted array of 1s and 0s.

@param {array} array - The sorted array of 1s and 0s to search for the first zero.
@param {number} first - The starting index of the search range. Defaults to 0.
@param {number} last - The ending index of the search range. Defaults to the last index in the array.

@returns {number} The index of the first zero in the input array, or -1 if no zeroes are found.
*/
function findFirst(array, first = 0, last = array.length - 1) {
	if (last >= first) {
		// Calculate the middle index of the search range
		let middle = first + Math.floor((last - first) / 2);

		// If the middle element is a zero and the element before it is a one (or the middle element is the first element), then we've found the first zero in the array and return its index
		if ((middle === 0 || array[middle - 1] === 1) && array[middle] === 0) {
			return middle;
		}
		// If the middle element is a one, search the right half of the array
		else if (array[middle] === 1) {
			return findFirst(array, middle + 1, last);
		}
		// If the middle element is a zero and the element before it is also a zero (i.e., we haven't found the first zero yet), search the left half of the array
		return findFirst(array, first, middle - 1);
	}
	// If the search range is empty and no zeroes are found, return -1
	return -1;
}

module.exports = countZeroes;
