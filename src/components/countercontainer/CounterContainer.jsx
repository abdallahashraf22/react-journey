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
        if(counter > 0){
            setCounter(counter-1);
        }
    }

    return(
      <div className="container text-center pinkcounter">
          <Counter counter={counter}/>
          <CounterActions addOne={addOne} subOne={subOne}/>
      </div>
    );
}

export default CounterContainer;