// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

const arrayDif = (array1, array2) => {
  let newArray = [];
  for (const element of array1) {
    if (!array2.includes(element)) {
      newArray.push(element);
    }
  }
  return newArray;
};

const arrayDiffSpliced = (array1, array2) => {
  const newArray = [...array1];
  for (let i = 0; i <= newArray.length; i++) {
    if (array2.includes(newArray[i])) {
      newArray.splice(i, 1);
      i--;
    }
  }
  return newArray;
};

const arrayDiffFilter = (array1, array2) => {
  return array1.filter((element) => !array2.includes(element));
};

array1 = [1, 2, 3, 4];
array2 = [2, 3];
console.log(arrayDif(array1, array2));
console.log(arrayDiffSpliced(array1, array2));
console.log(arrayDiffFilter(array1, array2));
