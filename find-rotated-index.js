const findRotationCount = require("./find-rotation-count");

/**
 * expect(findRotatedIndex([3, 4, 1, 2], 4)).toBe(1)
 * expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)).toBe(2)
 * expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)).toBe(6)
 * expect(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)).toBe(-1)
 * expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)).toBe(-1)
 * */
function findRotatedIndex(array, target) {
	// How many rotations has the array undergone?
	const rotationCount = findRotationCount(array);

	// First and last indeces, if the array wasn't rotated
	let first = 0;
	let last = array.length - 1;

	while (first <= last) {
		// Middle index, if the array wasn't rotated
		let middle = first + Math.floor((last - first) / 2);

		// Rotated index. This is the actual position in the array
		let rotatedMiddle = middle - rotationCount;
		if (rotatedMiddle < 0) rotatedMiddle = array.length - rotatedMiddle * -1;
		if (rotatedMiddle > array.length - 1)
			rotatedMiddle = rotatedMiddle - (array.length - 1);

		// Value at the rotated middle index
		let value = array[rotatedMiddle];

		// If the value equals the target, return it
		if (value === target) return rotatedMiddle;

		// If the value is greater than the target, it must abe on the left side of the middle
		if (value > target) last = middle - 1;

		// If the value is less than the target, it must be on the right side of the middle
		if (value < target) first = middle + 1;
	}
	// If the value is still not found, it does not exist in the array
	return -1;
}

module.exports = findRotatedIndex;
