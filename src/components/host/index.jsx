import React, { useState, useEffect } from 'react';
import styles from './host.module.css';
import Header from '../header';
import Field from '../field';
import { MARK_X, MAP_STATE_CHANGE, MARK_O } from '../../constants';
import getWinner from '../../utils';

const score = {
  [MARK_X]: 0,
  [MARK_O]: 0,
};

export default function Host() {
  const [mark, setMark] = useState(MARK_X);
  const [field, updateField] = useState([]);
  const [beforeStart, setBeforeStart] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  useEffect(() => {
    if (!beforeStart) {
      return;
    }
    const newField = new Array(3).fill(undefined).map(() => new Array(3).fill(undefined));
    updateField(newField);
  }, [beforeStart]);

  function onRestartClick() {
    setBeforeStart(true);
    setGameOver(false);
  }

  function onCellClick(row, col) {
    if (field[row][col] !== undefined || gameOver) {
      return;
    }
    const newField = field.slice();
    newField[row][col] = mark;
    const winner = getWinner(newField);
    updateField(newField);
    setMark(MAP_STATE_CHANGE[mark]);
    setBeforeStart(false);
    if (winner) {
      // eslint-disable-next-line no-alert
      alert(`${winner} победил!`);
      setGameOver(true);
      score[winner] += 1;
    }
  }

  return (
    <div className={styles.container}>
      <Header mark={mark} onSideClick={beforeStart ? setMark : undefined} score={score} />
      <Field field={field} onClick={onCellClick} onRestartClick={onRestartClick} />
    </div>
  );
}
