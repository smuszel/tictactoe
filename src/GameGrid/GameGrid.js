import { useSelector, useDispatch } from 'react-redux';
import './GameGrid.css';

export const GameGrid = () => {
  const grid = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="tttGrid">
      {grid.map((row, x) => {
        return (
          <div key={x} className="tttRow">
            {row.map((tile, y) => {
              return (
                <button
                  key={y}
                  onClick={() => dispatch({ type: 'ADD_MARKING', payload: { x, y } })}
                  disabled={tile.marked}
                  className={'tttTile'}
                >
                  {tile.marked ? tile.marked : ''}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
