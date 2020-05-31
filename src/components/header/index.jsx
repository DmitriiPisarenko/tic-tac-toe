import React from 'react';
import styles from './header.module.css';
import circle from '../../assets/images/circle.png'
import cross from '../../assets/images/cross.png'

export default function Header() {
  return (
    <div className={styles.container}>
      <button className={styles.side} >
        <img className={styles.image} src={circle} alt='circle' />
      </button>

      <div className={styles.score} />
      <p>-</p>
      <div className={styles.score} />

      <button className={styles.side} >
        <img className={styles.image} src={cross} alt='cross' />
      </button>
    </div>
  )

}