import { ADDITION, SUBTRACTION } from './type';
import { addNumber, subNumber } from './action';
type initType = { number: number };
const initialValue: initType = { number: 0 };

type ActionType = ReturnType<typeof addNumber> | ReturnType<typeof subNumber>;

export const calcReducer = (
  state: initType = initialValue,
  action: ActionType,
) => {
  switch (action.type) {
    case ADDITION:
      return { number: state.number + 1 };
    case SUBTRACTION:
      return { number: state.number - 1 };

    default:
      return state;
  }
};
