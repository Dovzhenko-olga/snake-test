import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getIsGameOver, getIsPause } from '../../redux/selectors';
import { gameTick, addDirection, setPause } from '../../redux/actions';

import Board from '../Board';
import Score from '../Score';
import PlayButton from '../PlayButton';
import Name from '../Name';

import styles from './Game.module.css';
import {
  UP,
  RIGHT,
  DOWN,
  LEFT,
  intervalBetweenSteps
} from '../../helpers/constants';

function Game() {
  const isGameOver = useSelector(getIsGameOver);
  const isPause = useSelector(getIsPause);
  // const score = useSelector(getScore);
  const dispatch = useDispatch();
  const intervalId = useRef(null);

  const arrowKeysCallback = (e) => {
    if ((isPause || isGameOver) && e.code !== 'Space') {
      return;
    }

    switch (e.code) {
      case 'Space':
        dispatch(setPause(!isPause));
        break;
      case 'ArrowLeft':
        dispatch(addDirection(LEFT));
        break;
      case 'ArrowUp':
        dispatch(addDirection(UP));
        break;
      case 'ArrowRight':
        dispatch(addDirection(RIGHT));
        break;
      case 'ArrowDown':
        dispatch(addDirection(DOWN));
        break;
      default:
    }
  }

  useEffect(() => {
    // let interval = intervalBetweenSteps - Math.floor(score / 5) * 30;

    if (isPause || isGameOver) {
      clearInterval(intervalId.current);
    } else {
      intervalId.current = setInterval(() => {
        console.log(intervalId.current);
        dispatch(gameTick())
      }, intervalBetweenSteps);
    }
  }, [dispatch, isGameOver, isPause]);

  useEffect(() => {
    return () => {
      clearInterval(intervalId.current);
    };
  }, [])

  return (
    <div className={styles.game} onKeyDown={arrowKeysCallback} tabIndex="0">
      <div className={styles.board}>
        <Board />
      </div>
      <div className={styles.controls}>
        <Name />
        <div className={styles.controls__element}>
          <Score />
        </div>
        <PlayButton />
      </div>
    </div>
  );
}

export default Game;
// class oldGame extends React.Component {
//   constructor(props) {
//     super(props);
//     this.arrowKeysCallback = this.arrowKeysCallback.bind(this);
//   }

//   componentDidUpdate() {
//     const { isPause, isGameOver, gameTick } = this.props;
//     // let interval = intervalBetweenSteps - Math.floor(score / 5) * 30;
//     // console.log(interval);

//     if (isPause || isGameOver) {
//       clearInterval(this.intervalId);
//     } else {
//       this.intervalId = setInterval(gameTick, intervalBetweenSteps);
//     }
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalId);
//   }

//   arrowKeysCallback(e) {
//     const { isPause, isGameOver, addDirection, setPause } = this.props;
//     if ((isPause || isGameOver) && e.code !== 'Space') {
//       return;
//     }

//     switch (e.code) {
//       case 'Space':
//         setPause(!isPause);
//         break;
//       case 'ArrowLeft':
//         addDirection(LEFT);
//         break;
//       case 'ArrowUp':
//         addDirection(UP);
//         break;
//       case 'ArrowRight':
//         addDirection(RIGHT);
//         break;
//       case 'ArrowDown':
//         addDirection(DOWN);
//         break;
//       default:
//     }
//   }

//   render() {
//     return (
//       <div className={styles.game} onKeyDown={this.arrowKeysCallback} tabIndex="0">
//         <div className={styles.board}>
//           <Board />
//         </div>
//         <div className={styles.controls}>
//           <div className={styles.controls__element}>
//             <Score />
//           </div>
//           <PlayButton />
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   isGameOver: state.get('isGameOver'),
//   isPause: state.get('isPause'),
//   // score: state.get('score')
// });

// const mapDispatchToProps = {
//   gameTick,
//   addDirection,
//   setPause
// };

// Game.propTypes = {
//   isGameOver: PropTypes.bool.isRequired,
//   isPause: PropTypes.bool.isRequired,
//   gameTick: PropTypes.func.isRequired,
//   addDirection: PropTypes.func.isRequired,
//   setPause: PropTypes.func.isRequired,
//   // score: PropTypes.number.isRequired
// };

// export default connect(mapStateToProps, mapDispatchToProps)(oldGame);