import { combineReducers } from "redux";
import {users} from './users.js';
import {filterVariables} from './filterVariables';
import { volunteers } from "./volunteer.js";
export const reducers = combineReducers({
    volunteers:volunteers,
    users:users,
    filterVariables:filterVariables
})