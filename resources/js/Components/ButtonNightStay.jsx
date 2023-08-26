import { useState } from "react";

export default function ButtonNightStay() {
    const [counter, setCounter] = useState(1);
    let increamentCounter = () => setCounter(counter + 1);
    let decreamentCounter = () => setCounter(counter - 1);
    if (counter <= 1) {
        decreamentCounter = () => setCounter(1);
    }
    return (
        <div className="flex dur-inc justify-between">
            <button onClick={decreamentCounter} className="dec">
                <div className="ic">-</div>
            </button>
            <div className="txt pt-2">{counter} nights</div>
            <button onClick={increamentCounter} className="inc">
                <div className="ic">+</div>
            </button>
        </div>
    );
}
