function removeDuplicates(arr) {
  const hMap = {};
  const result = [];
  for (let i=0; i<arr.length; i++) {
    const num = arr[i];
    if (num in hMap) {
      hMap[num] += 1;
    } else {
      hMap[num] = 1;
    }

    if (hMap[num] == 1) {
      result.push(num);
    }
  }
  return result;
}

console.log(removeDuplicates([1,2,3,4,5,6])); // [ 1, 2, 3, 4, 5, 6 ]
console.log(removeDuplicates([1,2,3,4,2,4])); // [ 1, 2, 3, 4 ]
