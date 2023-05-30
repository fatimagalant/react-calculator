import {useCalculator} from "../contexts/Calculator.jsx";

const Display = () => {
    const calculator = useCalculator();
    return(
        <div className={"rounded-lg m-5 font-bold text-white text-right p-7 font-display"}>
            <span className={`font-display text-4xl ${!calculator.evaluationString && !calculator.result ? 'animate-blink' : ''}`}>{calculator.evaluationString || calculator.result}</span>
        </div>
    )
}
export default Display;