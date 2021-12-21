import { useSelector } from 'react-redux';
import { getScore } from '../../redux/selectors';

import styles from './Score.module.css';

const Score = () => {
  const score = useSelector(getScore);

  return (
    <div className={styles.score}>
      {`SCORE: ${score}`}
    </div>
  )
}
export default Score;