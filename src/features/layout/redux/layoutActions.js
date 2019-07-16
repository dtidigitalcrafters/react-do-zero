export const SET_NOME = 'SET_NOME';

export const setNome = nome => {
  return {
    type: SET_NOME,
    payload: nome
  };
};