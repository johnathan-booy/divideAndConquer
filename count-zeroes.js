function countZeroes(array) {
	const firstZero = findFirst(array);
	if (firstZero === -1) return 0;
	return array.length - firstZero;
}

function findFirst(array, leftIdx = 0, rightIdx = array.length - 1) {
	if (rightIdx >= leftIdx) {
		let middleIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2);
		if (
			(middleIdx === 0 || array[middleIdx - 1] === 1) &&
			array[middleIdx] === 0
		) {
			return middleIdx;
		} else if (array[middleIdx] === 1) {
			return findFirst(array, middleIdx + 1, rightIdx);
		}
		return findFirst(array, leftIdx, middleIdx - 1);
	}
	return -1;
}

module.exports = countZeroes;
