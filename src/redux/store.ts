import { createStore } from 'redux';
import { calcReducer } from './Calculator/reducer';

export const store = createStore(calcReducer);

export type StateType = ReturnType<typeof calcReducer>;
