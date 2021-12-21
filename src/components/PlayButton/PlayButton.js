import { useSelector, useDispatch } from 'react-redux';

import { getIsGameOver, getIsPause } from '../../redux/selectors';
import { setPause, resetGame } from '../../redux/actions';
import './PlayButton.css';

const PlayButton = () => {
  const isGameOver = useSelector(getIsGameOver);
  const isPause = useSelector(getIsPause);
  const dispatch = useDispatch();

  const getSelector = () => {

    let selector;
    if (isGameOver) {
      selector = 'play-button_restart';
    } else if (isPause) {
      selector = 'play-button_start';
    } else {
      selector = 'play-button_pause';
    }

    return selector;
  }

  const getText = () => {

    let text;
    if (isGameOver) {
      text = 'РЕСТАРТ';
    } else if (isPause) {
      text = 'ИГРАТЬ';
    } else {
      text = 'ПАУЗА';
    }

    return text;
  }

  const onClick = () => {

    if (isGameOver) {
      dispatch(resetGame());
    } else {
      dispatch(setPause(!isPause));
    }
  }

  return (
    <div className={`control-element play-button ${getSelector()}`} onClick={() => { onClick() }}>
      {getText()}
    </div>
  );
}

export default PlayButton;