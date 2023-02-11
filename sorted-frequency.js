/**
Returns the frequency of a target number in a sorted array

@param {Array} array - A sorted array of numbers
@param {Number} target - The number to search for
@returns {Number} - The frequency of the target number in the array, or -1 if it's not present
*/

function sortedFrequency(array, target) {
	// Find the index of the first occurrence of target in array
	let first = findFirstLast(array, target, true);

	// If target is not found, return -1
	if (first === -1) return -1;

	// Find the index of the last occurrence of target in array
	let last = findFirstLast(array, target, false);

	// Return the frequency of the target in array
	return last - first + 1;
}

/**
	Helper function to find the index of the first or last occurrence of a target number in a sorted array
	
	@param {Array} array - A sorted array of numbers
	@param {Number} target - The number to search for
	@param {Boolean} findFirst - A boolean indicating whether to find the first or last occurrence of target
	@returns {Number} - The index of the first or last occurrence of target in the array, or -1 if it's not present
	*/
function findFirstLast(array, target, findFirst) {
	// Initialize first and last indices of array
	let first = 0;
	let last = array.length - 1;

	// Initialize idx to -1, in case target is not present in array
	let idx = -1;

	// Binary search loop to find target index
	while (first <= last) {
		let middle = first + Math.floor((last - first) / 2);
		// If middle element of array matches target
		if (array[middle] === target) {
			idx = middle;

			// If findFirst is true, move the last index to left of the middle index
			// else, move the first index to right of the middle index
			if (findFirst) {
				last = middle - 1;
			} else {
				first = middle + 1;
			}
		} else if (array[middle] < target) {
			// Move the first index to right of the middle index
			first = middle + 1;
		} else {
			// Move the last index to left of the middle index
			last = middle - 1;
		}
	}

	// Return the index of the first or last occurrence of target in the array, or -1 if it's not present
	return idx;
}

module.exports = sortedFrequency;
