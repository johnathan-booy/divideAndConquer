/**
 * expect(findRotationCount([15, 18, 2, 3, 4, 6, 12])).toBe(2)
 * expect(findRotationCount([7, 9, 11, 12, 5])).toBe(4)
 * expect(findRotationCount([7, 9, 11, 12, 15])).toBe(0)
 * expect(findRotationCount([7, 7, 7, 7, 5])).toBe(4)
 */

function findRotationCount(array) {
	let first = 0;
	let last = array.length - 1;
	while (first <= last) {
		const middle = first + Math.ceil((last - first) / 2);
		if (array[middle] < array[middle - 1]) return middle;
		if (array[middle] >= array[first]) {
			first = middle + 1;
		} else {
			last = middle - 1;
		}
	}
	return 0;
}

module.exports = findRotationCount;
