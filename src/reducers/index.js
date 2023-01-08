import { combineReducers } from "redux";
import characters from './characters';
import profile from './profile';

export default combineReducers({
   characters,
   profile,
});