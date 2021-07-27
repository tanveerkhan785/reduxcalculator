import changeTheNumber from "./UpDown";
import multTheNumber from './multDiv';

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber,
    multTheNumber
})

export default rootReducer;