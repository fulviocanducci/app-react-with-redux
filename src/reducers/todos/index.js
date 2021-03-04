import todosAction from './actions';

const initialState = [
  {
    id: 1,
    name: 'Paul',
    active: true,
  },
];

export default function todos(state = initialState, action) {
  switch (action?.type) {
    case todosAction.Add: {
      return [...state, action.payload];
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
