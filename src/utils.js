import _ from 'lodash';
export const removeObjetoNoArrayPeloIndex = (array, index) => {
  return array.filter((elemento, idx) => idx !== index);
};
