import { createStore } from 'redux';
import { getActivePlayerMark } from './selectors';

const gameSize = [3, 3];

const defaultState = Array(gameSize[0])
  .fill()
  .map((_, x) =>
    Array(gameSize[1])
      .fill()
      .map((_, y) => ({ x, y, marked: false })),
  );

export default createStore((state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_MARKING':
      const { x, y } = action.payload;
      const nextSign = getActivePlayerMark(state);
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
