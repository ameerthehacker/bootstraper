import ACTIONS from '../actions';
import { DATA } from '../../data';

export default function rootReducer(state = {}, action) {
  switch (action.type) {
    case ACTIONS.LOAD_DATA:
      return DATA;
    default:
      return state;
  }
}
