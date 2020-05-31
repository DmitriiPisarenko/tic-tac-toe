import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import styles from './cell.module.css';
import { MARK_X, MARK_O, MAP_MARK_TO_IMAGE } from '../../constants';

export default function Cell(props) {
  const {
    className,
    children,
    row,
    col,
    onClick,
  } = props;

  function handleClick() {
    onClick(row, col);
  }

  return (
    <div className={classNames(styles.container, className)} onClick={handleClick}>
      {children && <img src={MAP_MARK_TO_IMAGE[children]} alt="mark" />}
    </div>
  );
}

Cell.propTypes = {
  className: propTypes.string,
  children: propTypes.oneOf([undefined, MARK_X, MARK_O]).isRequired,
  row: propTypes.number.isRequired,
  col: propTypes.number.isRequired,
  onClick: propTypes.func.isRequired,
};

Cell.defaultProps = {
  className: undefined,
};
