import { ACTIONS } from '../actions';

export default function transpilers(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.ADD_TRANSPILER:
      state[payload.id] = { ...state[payload.id], isRequired: true };

      return state;
    case ACTIONS.REMOVE_TRANSPILER:
      state[payload.id] = { ...state[payload.id], isRequired: false };

      return state;
    default:
      return state;
  }
}
