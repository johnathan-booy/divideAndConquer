/**
 * expect(findRotationCount([15, 18, 2, 3, 4, 6, 12])).toBe(2)
 * expect(findRotationCount([7, 9, 11, 12, 5])).toBe(4)
 * expect(findRotationCount([7, 9, 11, 12, 15])).toBe(0)
 * expect(findRotationCount([7, 7, 7, 7, 5])).toBe(4)
 */

function findRotationCount(array) {
	let leftIdx = 0;
	let rightIdx = array.length - 1;
	while (leftIdx <= rightIdx) {
		const middleIdx = leftIdx + Math.ceil((rightIdx - leftIdx) / 2);
		if (array[middleIdx] < array[middleIdx - 1]) return middleIdx;
		if (array[middleIdx] >= array[leftIdx]) {
			leftIdx = middleIdx + 1;
		} else {
			rightIdx = middleIdx - 1;
		}
	}
	return 0;
}

module.exports = findRotationCount;
