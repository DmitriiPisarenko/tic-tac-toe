const winSets = [
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],

  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],

  [[0, 0], [1, 1], [2, 2]],
  [[0, 2], [1, 1], [2, 0]],
];

export default function getWinner(field) {
  for (let setIndex = 0; setIndex < winSets.length; setIndex += 1) {
    const currentSet = winSets[setIndex];
    let mark;
    for (let cellIndex = 0; cellIndex < currentSet.length; cellIndex += 1) {
      const [row, col] = currentSet[cellIndex];
      const cell = field[row][col];
      if (!cell) {
        mark = cell;
        break;
      }
      if (!mark) {
        mark = cell;
      }
      if (mark !== cell) {
        mark = undefined;
        break;
      }
    }
    if (mark) {
      return mark;
    }
  }
  return undefined;
}
