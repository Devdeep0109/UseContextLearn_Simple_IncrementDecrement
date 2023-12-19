import React from "react";
import { CounterContext } from "../context/counter";
import { useContext } from "react";

const Counter = ()=>{

    const newCounterContext = useContext(CounterContext);
    return(
        <div>
            <button onClick={ ()=>{
                newCounterContext.setCount(newCounterContext.count + 1);
            }}>
                Increment</button>
            <button onClick={ ()=>{
                newCounterContext.setCount(newCounterContext.count - 1);
            }}>
                Decrement</button>
        </div>
    )
}
export default Counter;