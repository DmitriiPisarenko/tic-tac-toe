import circle from '../assets/images/circle.png';
import cross from '../assets/images/cross.png';

export const MARK_X = 'x';
export const MARK_O = 'o';

export const MAP_STATE_CHANGE = {
  [MARK_X]: MARK_O,
  [MARK_O]: MARK_X,
};

export const MAP_MARK_TO_IMAGE = {
  [MARK_X]: cross,
  [MARK_O]: circle,
};
