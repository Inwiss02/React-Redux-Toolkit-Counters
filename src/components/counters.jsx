import React from "react";
import Counter from "./counter";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { handeleReset } from "../redux/features/counterSlice";
function Counters() {
    const dispatch = useDispatch();
    const Counters = useSelector((state) => state.counter);
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-1">
                    <button
                        onClick={() => dispatch(handeleReset())}
                        type="button"
                        className="btn btn-sm btn-primary"
                    >
                        Reset
                    </button>
                </div>
            </div>
            {Counters.map((counter) => (
                <Counter key={counter.id} counter={counter} />
            ))}
        </React.Fragment>
    );
}

export default Counters;