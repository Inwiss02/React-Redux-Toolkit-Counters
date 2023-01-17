
import { useDispatch } from "react-redux";
import { handleIncrement, handleDecrement, handleDelete } from "../redux/features/counterSlice";
function Counter({ counter }) {
    // composant controle
    const dispatch = useDispatch();
    const { id } = counter;
    function formatCount() {
        const { value } = counter;
        return value === 0 ? "Zero" : value;
    }

    function setBadgeClasses() {
        let classes = "badge text-bg-";
        return counter.value === 0
            ? (classes += "warning")
            : (classes += "primary");
    }
    return (
        <div className="row my-2">
            <div className="col-1">
                <span className={setBadgeClasses()}>{formatCount()}</span>
            </div>
            <div className="col">
                <button
                    type="button"
                    disabled={counter.value === 0 ? "disabled" : ""}
                    className="btn btn-secondary btn-sm"
                    onClick={() => dispatch(handleDecrement(id))}
                >
                    -
                </button>

                <button
                    onClick={() => dispatch(handleIncrement(id))}
                    type="button"
                    className="btn btn-secondary btn-sm mx-2"
                >
                    +
                </button>
                <button
                    onClick={() => dispatch(handleDelete(id))}
                    type="button"
                    className="btn btn-danger btn-sm"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Counter;