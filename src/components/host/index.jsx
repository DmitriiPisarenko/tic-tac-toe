import React, { useState, useEffect } from 'react';
import styles from './host.module.css';
import Header from '../header';
import Field from '../field';
import { MARK_X, MAP_STATE_CHANGE } from '../../constants';

export default function Host() {
  const [mark, setMark] = useState(MARK_X);
  const [field, updateField] = useState([]);
  const [beforeStart, setBeforeStart] = useState(true);
  useEffect(() => {
    if (!beforeStart) {
      return;
    }
    const newField = new Array(3).fill(undefined).map(() => new Array(3).fill(undefined));
    updateField(newField);
  }, [beforeStart]);

  function onRestartClick() {
    setBeforeStart(true);
  }

  function onCellClick(row, col) {
    if (field[row][col] !== undefined) {
      return;
    }
    const newField = field.slice();
    newField[row][col] = mark;
    updateField(newField);
    setMark(MAP_STATE_CHANGE[mark]);
    setBeforeStart(false);
  }

  return (
    <div className={styles.container}>
      <Header />
      <Field field={field} onClick={onCellClick} onRestartClick={onRestartClick} />
    </div>
  );
}
