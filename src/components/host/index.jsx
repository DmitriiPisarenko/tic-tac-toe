import React from 'react';
import styles from './host.module.css';
import Header from '../header';
import Field from '../field';

export default function Host() {
  return (
    <div className={styles.container}>
      <Header />
      <Field />
    </div>
  );

}
