import { useDispatch, useSelector } from 'react-redux';
import { getGameFinishedMark, getActivePlayerMark } from '../selectors';
import './GamePanel.css';

export const GamePanel = () => {
  const dispatch = useDispatch();
  const gameFinishedMark = useSelector(getGameFinishedMark);
  const activeMark = useSelector(getActivePlayerMark);

  const resetButton = (
    <button className="resetButton" onClick={() => dispatch({ type: 'RESET' })}>
      Reset game
    </button>
  );

  return (
    <div className="gamePanel">
      {gameFinishedMark ? (
        <>
          {gameFinishedMark === 'none' ? (
            <>
              None of the players won
              {resetButton}
            </>
          ) : (
            <>
              Player controlling {gameFinishedMark} won
              {resetButton}
            </>
          )}
        </>
      ) : (
        <>Player controlling {activeMark} to move</>
      )}
    </div>
  );
};
