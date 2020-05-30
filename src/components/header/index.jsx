import React from 'react';
import styles from './header.module.css';
import classNames from 'classnames';
import circle from '../../assets/images/circle.png'
import cross from '../../assets/images/cross.png'

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.side} >
        <img className={styles.image} src={circle} alt='circle' />
      </div>

      <div className={classNames(styles.switchBtn, styles
      .switchOn)} />

      <div className={styles.side} >
        <img className={styles.image} src={cross} alt='cross' />
      </div>
    </div>
  )

}