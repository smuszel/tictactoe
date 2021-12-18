import { createStore } from 'redux';

const gameSize = [3, 3];

const defaultState = Array(gameSize[0])
  .fill()
  .map(x =>
    Array(gameSize[1])
      .fill()
      .map(y => ({ x, y, marked: false })),
  );

export default createStore((state = defaultState, action) => {
  const { x, y } = action.payload;
  switch (action.type) {
    case 'ADD_MARKING':
      const nextSign =
        state.flat().filter(tile => tile.marked === 'o').length >
        state.flat().filter(tile => tile.marked === 'x').length
          ? 'x'
          : 'o';
      const rowToUpdate = state.find((row, ix) => ix === x);
      const tileToUpdate = rowToUpdate.find((tile, ix) => ix === y);
      const updatedTile = { ...tileToUpdate, marked: nextSign };
      return state.map((row, ix) =>
        ix === x ? row.map((tile, ix) => (ix === y ? updatedTile : tile)) : row,
      );
    case 'RESET':
      return defaultState;
    default:
      return state;
  }
});
