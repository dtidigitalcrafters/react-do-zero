import _ from 'lodash';
export const removeObjetoNoArray = (array, index) => {
  array.splice(index, 1);
  return array;
};
