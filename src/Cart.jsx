import React, {useState} from "react";

function Cart (){
    const [number, defultNum] = useState(0);
    const plusnum = () => {
        defultNum(number + 1);
    };
    const minusnum = () => {
        defultNum(number -1);
    };
    const total = () => {
       return number * 1000;
    }
    return(
        <>
        <h1>{number}</h1>
        <button onClick={plusnum}>+</button>
        <button onClick={minusnum}>-</button>
        <div>{total()}</div>
        </>
    )
}
export default Cart;