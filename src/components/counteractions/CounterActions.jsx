import "./CounterActions.css";

function CounterActions(props){
    return (
        <div className="row justify-content-center">
            <div className="col-6">
                <button className="addingbutton mx-3" onClick={props.addOne}>++</button>
                <button className="subtractingbutton mx-3" onClick={props.subOne}>--</button>
            </div>
        </div>
    );
}

export default CounterActions;