import React from 'react';
import styles from './/field.module.css';
import classNames from 'classnames';

export default function Field() {
  return (
    <div className={styles.container}>
      <div className={styles.field}>
        <div>
          <div className={classNames(styles.cell, styles.noBorderTop, styles.noBorderLeft)} />
          <div className={classNames(styles.cell, styles.noBorderLeft)} />
          <div className={classNames(styles.cell, styles.noBorderLeft, styles.noBorderBottom)} />
        </div>
        <div>
          <div className={classNames(styles.cell, styles.noBorderTop)} />
          <div className={classNames(styles.cell)} />
          <div className={classNames(styles.cell, styles.noBorderBottom)} />
        </div>
        <div>
          <div className={classNames(styles.cell, styles.noBorderTop, styles.noBorderRight)} />
          <div className={classNames(styles.cell, styles.noBorderRight)} />
          <div className={classNames(styles.cell, styles.noBorderRight, styles.noBorderBottom)} />
        </div>
      </div>

      <button type='button' className={styles.restart}>
        НАЧАТЬ ЗАНОВО
      </button>

    </div>
  )
}