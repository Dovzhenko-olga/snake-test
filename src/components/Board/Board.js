import React from 'react';
import Cell from '../Cell';

import { columnsCount, rowsCount } from '../../helpers/constants';
import styles from './Board.module.css';

const Board = () => {
  const board = [];

  for (let y = 0; y < columnsCount; y += 1) {
    for (let x = 0; x < rowsCount; x += 1) {
      board.push(
        <Cell key={`${y}-${x}`} x={x} y={y} />
      );
    }
  }

  return (
    <div className={styles.table}>
      {board}
    </div>
  );
};

export default Board;