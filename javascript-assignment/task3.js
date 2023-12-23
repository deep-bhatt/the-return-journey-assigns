function findCommonElements(arr1, arr2) {
  const hMap = {};
  const commonElements = [];
  for(let i=0; i<arr1.length; i++) {
    const num = arr1[i];
    if (num in hMap) {
      hMap[num] += 1;
    } else {
      hMap[num] = 1;
    }
  }
  for(let i=0; i<arr2.length; i++) {
    const num = arr2[i];
    if (num in hMap) {
      hMap[num] += 1;
    } else {
      hMap[num] = 1;
    }
  }

  for (num in hMap) {
    if (hMap[num] == 2) {
      commonElements.push(num);
    }
  }
  return commonElements;
}

console.log(findCommonElements([1,2,3], [2,3,4])); // [ '2', '3' ]
