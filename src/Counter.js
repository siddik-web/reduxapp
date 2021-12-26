import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add } from './actions/counterAction'

export default function Counter() {
    const {count} = useSelector( state => state.count);
    const dispatch = useDispatch();
    function handelAdd(){
        dispatch(add(20))
    }

    return (
        <div>
            <h1 onClick={handelAdd}>{count}</h1>
        </div>
    )
}
