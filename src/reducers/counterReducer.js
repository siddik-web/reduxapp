import {types} from "../actions/types";
const initSate = {count: 0};
export default function(state = initSate, action){
    switch (action.type) {
        case types.ADD_COUNTER:
            return {...state, count : state.count + action.payload}
        case types.REMOVE_COUNTER:
            return {...state, count : state.count - action.payload}
        default:
            return state
    }
}