/**
 * Finds the closest number in a sorted array that is less than or equal to a target value.
 * If there is no such number, returns -1.
 *
 * @param {array} array - The sorted array to search in.
 * @param {number} target - The target value to find the closest number to.
 * @returns {number} - The closest number that is less than or equal to the target, or -1 if no such number exists.
 */
function findFloor(array, target) {
	let first = 0;
	let last = array.length - 1;

	// Closest number that is less than or equal to target
	let closestFloor = null;

	while (first <= last) {
		const middle = first + Math.floor((last - first) / 2);
		const value = array[middle];
		if (value === target) {
			// If the target is found in the array, return it
			return value;
		} else if (value < target) {
			// If the value at the middle index is less than the target, search the right half of the array
			// and update closestFloor if the value is closer to the target than the current closestFloor
			if (value > closestFloor || closestFloor === null) closestFloor = value;
			first = middle + 1;
		} else {
			// If the value at the middle index is greater than the target, search the left half of the array
			last = middle - 1;
		}
	}
	// If a closestFloor was found, return it
	if (closestFloor) return closestFloor;
	// If no closestFloor was found, return -1
	return -1;
}

module.exports = findFloor;
