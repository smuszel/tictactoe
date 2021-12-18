import { useDispatch, useSelector } from 'react-redux';
import { getGameFinishedMark, getActivePlayerMark } from '../selectors';

export const GamePanel = () => {
  const dispatch = useDispatch();
  const gameFinishedMark = useSelector(getGameFinishedMark);
  const activeMark = useSelector(getActivePlayerMark);

  return (
    <div>
      {gameFinishedMark ? (
        <>
          Player controlling {gameFinishedMark} won
          <button onClick={() => dispatch({ type: 'RESET' })}>Reset game</button>
        </>
      ) : (
        <>Player controlling {activeMark} to move</>
      )}
    </div>
  );
};
