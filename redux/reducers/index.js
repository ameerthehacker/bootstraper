import ACTIONS from '../actions';
import DATA from '../data';

export default function rootReducer(action, state) {
  switch (action.type) {
    case ACTIONS.LOAD_DATA:
      return DATA;
      break;
    default:
      return state;
  }
}
