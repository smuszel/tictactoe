import { useSelector, useDispatch } from 'react-redux';
import { getGameFinishedMark } from '../selectors';
import './GameGrid.css';

export const GameGrid = () => {
  const grid = useSelector(state => state);
  const gameFinished = useSelector(getGameFinishedMark);
  const dispatch = useDispatch();

  return (
    <div className="tttGridOuter">
      <div className="tttGridInner">
        {grid.map((row, x) => {
          return (
            <div key={x} className="tttRow">
              {row.map((tile, y) => {
                return (
                  <button
                    key={y}
                    onClick={() => dispatch({ type: 'ADD_MARKING', payload: { x, y } })}
                    disabled={tile.marked || gameFinished}
                    className={'tttTile'}
                  >
                    {tile.marked ? (
                      <div className={'tttMark' + tile.marked}></div>
                    ) : (
                      <div className="tttMarkEmpty"></div>
                    )}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
