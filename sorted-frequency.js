function sortedFrequency(array, target) {
	let firstIdx = findFirstLast(array, target, true);
	if (firstIdx === -1) return -1;
	let lastIdx = findFirstLast(array, target, false);
	return lastIdx - firstIdx + 1;
}

function findFirstLast(array, target, findFirst) {
	let firstIdx = 0;
	let lastIdx = array.length - 1;
	let idx = -1;

	while (firstIdx <= lastIdx) {
		let middleIdx = firstIdx + Math.floor((lastIdx - firstIdx) / 2);

		if (array[middleIdx] === target) {
			idx = middleIdx;
			if (findFirst) {
				lastIdx = middleIdx - 1;
			} else {
				firstIdx = middleIdx + 1;
			}
		} else if (array[middleIdx] < target) {
			firstIdx = middleIdx + 1;
		} else {
			lastIdx = middleIdx - 1;
		}
	}

	return idx;
}

module.exports = sortedFrequency;
