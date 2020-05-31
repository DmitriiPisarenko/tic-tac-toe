import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import styles from './header.module.css';
import circle from '../../assets/images/circle.png';
import cross from '../../assets/images/cross.png';
import { MARK_X, MARK_O } from '../../constants';

export default function Header(props) {
  const { mark, onSideClick, score } = props;

  function handlerSideClick(newMark) {
    return () => {
      if (onSideClick) {
        onSideClick(newMark);
      }
    };
  }
  return (
    <header className={styles.container}>
      <button type="button" className={classNames(styles.side, { [styles.sideChosen]: mark === MARK_O })} onClick={handlerSideClick(MARK_O)}>
        <img className={styles.image} src={circle} alt="circle" />
      </button>

      <div className={styles.score}>
        {score[MARK_O]}
      </div>
      -
      <div className={styles.score}>
        {score[MARK_X]}
      </div>

      <button type="button" className={classNames(styles.side, { [styles.sideChosen]: mark === MARK_X })} onClick={handlerSideClick(MARK_X)}>
        <img className={styles.image} src={cross} alt="cross" />
      </button>
    </header>
  );
}

Header.propTypes = {
  mark: propTypes.oneOf([MARK_O, MARK_X]).isRequired,
  onSideClick: propTypes.func,
  score: propTypes.shape({
    [MARK_X]: propTypes.number.isRequired,
    [MARK_O]: propTypes.number.isRequired,
  }).isRequired,
};

Header.defaultProps = {
  onSideClick: undefined,
};
