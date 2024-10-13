const arrayToSort1 = [3, 2, 1, 13, 8, 5, 0, 1];
const arrayToSort2 = [105, 79, 100, 110];

const mergeSort = (arr) => {
  const sorted = [];
  if (!arr) return;
  if (arr.length === 1) return [arr[0]];
  const chunk1 = arr.slice(0, arr.length / 2);
  const chunk2 = arr.slice(arr.length / 2, arr.length);

  const newArr1 = mergeSort(chunk1);
  const newArr2 = mergeSort(chunk2);
  console.log({ newArr1 });
  console.log({ newArr2 });

  let index1 = 0;
  let index2 = 0;

  while (index1 < newArr1.length || index2 < newArr2.length) {
    if (typeof newArr1[index1] === "undefined") {
      sorted.push(newArr2[index2]);
      index2 += 1;
    } else if (newArr1[index1] > newArr2[index2]) {
      sorted.push(newArr2[index2]);
      index2 += 1;
    } else {
      sorted.push(newArr1[index1]);
      index1 += 1;
    }
  }

  return sorted;
};

console.log(mergeSort(arrayToSort1));
// console.log(mergeSort(arrayToSort2));
