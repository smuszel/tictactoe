const transpose = xs => xs[0].map((x, i) => xs.map(x => x[i]));
const allMarked = mark => row => row.every(tile => tile.marked === mark);
const diagonals = xs => [
  [xs[0][0], xs[1][1], xs[2][2]],
  [xs[0][2], xs[1][1], xs[2][0]],
];

export const getGameFinishedMark = state => {
  const checkFinish = mark => {
    const _allMarked = allMarked(mark);
    const horizontal = Boolean(state.find(_allMarked));
    const vertical = Boolean(transpose(state).find(_allMarked));
    const diagonal = Boolean(diagonals(state).find(_allMarked));

    return horizontal || vertical || diagonal;
  };

  const allDepleted = state.flat().every(tile => tile.marked);

  return checkFinish('x') ? 'x' : checkFinish('o') ? 'o' : allDepleted ? 'none' : false;
};

export const getActivePlayerMark = state => {
  return state.flat().filter(tile => tile.marked === 'o').length >
    state.flat().filter(tile => tile.marked === 'x').length
    ? 'x'
    : 'o';
};
