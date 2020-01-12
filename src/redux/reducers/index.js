import librariesReducer from './libraries';
import { combineReducers } from 'redux';

export default combineReducers({ libraries: librariesReducer });
