import { ADDITION, SUBTRACTION } from './type';

export const addNumber = () => {
  return { type: ADDITION };
};
export const subNumber = () => {
  return { type: SUBTRACTION };
};
