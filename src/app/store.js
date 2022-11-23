import {applyMiddleware, combineReducers, createStore} from "redux";
import {groupsReducer} from "../groups/groups-reducer";
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
    groups: groupsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));