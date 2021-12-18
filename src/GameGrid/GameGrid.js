import { useSelector } from 'react-redux';
import './GameGrid.css';

export const GameGrid = () => {
  const grid = useSelector(state => state);

  return (
    <div className="tttGrid">
      {grid.map((row, x) => {
        return (
          <div key={x} className="tttRow">
            {row.map((tile, y) => {
              return (
                <button key={y} onClick={() => {}} className={'tttTile'}>
                  tile
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
