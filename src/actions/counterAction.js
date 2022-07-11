import {types} from "./types"

export const add = (payload = 1) => ({
    type: types.ADD_COUNTER,
    payload
})

export const remove = (payload = 1) => ({
    type: types.REMOVE_COUNTER,
    payload
})

export const edit = (payload = 1) => ({
    type:types.ADD_COUNTER,
    payload
})