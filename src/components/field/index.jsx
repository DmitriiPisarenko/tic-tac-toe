import React from 'react';
import propTypes from 'prop-types';
import styles from './field.module.css';
import Cell from '../cell';

export default function Field(props) {
  const { field, onClick, onRestartClick } = props;
  return (
    <div className={styles.container}>
      <div className={styles.field}>
        {field.map((row, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i} className={styles.row}>
            {row.map((cell, j) => (
              // eslint-disable-next-line react/no-array-index-key
              <Cell key={j} className={styles.cell} row={i} col={j} onClick={onClick}>
                {cell}
              </Cell>
            ))}
          </div>
        ))}
      </div>

      <button type="button" className={styles.restart} onClick={onRestartClick}>
        НАЧАТЬ ЗАНОВО
      </button>

    </div>
  );
}

Field.propTypes = {
  field: propTypes.arrayOf(
    propTypes.arrayOf(
      propTypes.string,
    ),
  ).isRequired,
  onClick: propTypes.func.isRequired,
  onRestartClick: propTypes.func.isRequired,
};
