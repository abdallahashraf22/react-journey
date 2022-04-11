import React, { useState } from 'react';
import Counter from '../counter/Counter'
import CounterActions from "../counteractions/CounterActions";
import "./CounterContainer.css"


function CounterContainer(){

    const [counter, setCounter] = useState(0);

    const addOne = ()=>{
        setCounter(counter+1);
    }

    const subOne = ()=>{
        setCounter(counter-1);
    }

    return(
      <div className="container">
          <Counter counter={counter}/>
          <CounterActions addOne={addOne} subOne={subOne}/>
      </div>
    );
}

export default CounterContainer;