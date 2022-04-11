import React from "react";
import "./Counter.css";

function Counter(props){
    return (
        <div className="row justify-content-center">
            <div className="col-6 mb-5">
                <p className="h1 topcounter">Counter</p>
                <h3 className="mt-3">{props.counter}</h3>
            </div>
        </div>
    );
}


export default Counter;