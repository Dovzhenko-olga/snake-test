import Immutable from 'immutable';

import {
  matrix
} from './constants.js';

/**
 * @typedef {Immutable.Map} Point
 */

/**
 * @typedef {Immutable.List<Immutable.List<Point>>} Board
 */

/**
 * @typedef {'EMPTY'|'SNAKE'|'GOAL'|'SNAKEHEAD'} cellType
 */

/**
 * @param  {Board} board
 * @param  {Snake|Goal|Immutable.List<Point>|Point} obj
 * @param  {cellType} value
 */
function imageObjectAtBoard(board, obj, value) {
  let _obj = obj;
  if (!Immutable.List.isList(obj)) {
    _obj = [obj];
  }
  return _obj.reduce((res, point) => {
    const y = point.get('y');
    const x = point.get('x');
    return res.setIn([y, x], value);
  }, board);
}

/**
 * @param {...Immutable.List<Point>} objects
 * @returns {Board}
 */
function getBoardWithObjects(objects, board = matrix) {
  return objects.reduce((res, obj) => {
    const [point, type] = obj;
    return imageObjectAtBoard(res, point, type);
  }, board);
}

export {
  getBoardWithObjects
};