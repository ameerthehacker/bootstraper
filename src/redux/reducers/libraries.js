import { ACTIONS } from '../actions';

export default function librariesReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.ADD_LIBRARY:
      state[payload.id] = { ...state[payload.id], isRequired: true };

      return state;
    case ACTIONS.REMOVE_LIBRARY:
      state[payload.id] = { ...state[payload.id], isRequired: false };

      return state;
    default:
      return state;
  }
}
