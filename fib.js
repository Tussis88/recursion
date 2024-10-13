function fibs(fibRepetitions) {
  const fibArray = [];

  for (let i = 0; i < fibRepetitions - 2; i++) {
    if (!fibArray.at(-2)) {
      if (!fibArray.at(-1)) {
        fibArray.push(0);
      }
      fibArray.push(1);
    }
    fibArray.push(fibArray.at(-2) + fibArray.at(-1));
  }
  return fibArray;
}

function betterFibs(n) {
  arr = [0, 1];

  if (n === 0) return [];
  if (n === 1) return [1];

  while (arr.length < n) {
    arr.push(arr.at(-1) + arr.at(-2));
  }
  return arr;
}

console.log("for:");
console.log(fibs(8));

console.log("better for:");

console.log(betterFibs(0));
console.log(betterFibs(1));
console.log(betterFibs(8));

// didn`t know how to deal with the array inside the recursion so i came up with this idea
function fibsRec(repetitions) {
  const arrayFib = [];
  function recursion(rep) {
    if (rep === 0) {
      arrayFib.push(0);
      return;
    }
    if (rep === 1) {
      recursion(rep - 1);
      arrayFib.push(1);
      return;
    }
    recursion(rep - 1);
    arrayFib.push(arrayFib[rep - 1] + arrayFib[rep - 2]);
    return;
  }
  recursion(repetitions - 1);
  return arrayFib;
}

// looked for some solutions from other people and this one looked the better imho
function fibsRec2(n, arr = [0, 1]) {
  // the .slice() makes sure that the array get treated correctly in corner cases.
  if (arr.length >= n) return arr.slice(0, n);
  arr.push(arr.at(-1) + arr.at(-2));
  return fibsRec2(n, arr);
}

console.log("recursive");
console.log(fibsRec(8));

console.log("recursive 2:");
console.log(fibsRec2(1));
