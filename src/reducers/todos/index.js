import { guid } from '../../utils';
import todosAction from './actions';

const initialState = [];

export default function todos(state = initialState, action) {
  switch (action?.type) {
    case todosAction.Add: {
      return [...state, { id: guid(), ...action.payload }];
    }
    case todosAction.Edit: {
      return state.map((x) => {
        if (x.id === action.payload.id) {
          return action.payload;
        }
        return x;
      });
    }
    default: {
      return state;
    }
  }
}
