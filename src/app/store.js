import {applyMiddleware, combineReducers, createStore} from "redux";
import {groupsReducer} from "./reducers/groups-reducer";
import thunkMiddleware from 'redux-thunk';
import {metricsReducer} from "./reducers/metrics-reducer";

const rootReducer = combineReducers({
    groups: groupsReducer,
    metrics: metricsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));