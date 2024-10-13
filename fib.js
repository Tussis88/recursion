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

console.log("for:");
console.log(fibs(8));

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

console.log("recursive");
console.log(fibsRec(8));
