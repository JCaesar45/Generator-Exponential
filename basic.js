function* squareGenerator() {
  let i = 1;
  while (true) {
    yield { index: i, value: i * i };
    i++;
  }
}

function isPerfectCube(n) {
  const c = Math.round(Math.cbrt(n));
  return c * c * c === n;
}

function* filteredSquares() {
  const gen = squareGenerator();
  while (true) {
    const { index, value } = gen.next().value;
    if (!isPerfectCube(index)) {
      yield value;
    }
  }
}

function exponentialGenerator(n) {
  const gen = filteredSquares();
  let result;
  for (let i = 0; i < n; i++) {
    result = gen.next().value;
  }
  return result;
}
