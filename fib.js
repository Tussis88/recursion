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

  function recursion(repetitions) {
    if (repetitions < 2 && arrayFib.length < 2) {
      console.log(repetitions);
      arrayFib.push(0);
      arrayFib.push(1);
      return;
    }

    arrayFib.push(recursion(repetitions - 1) + recursion(repetitions - 2));
    return;
  }
  recursion(repetitions);
}

console.log("recursive");
console.log(fibsRec(8));
