import PropTypes from 'prop-types';
import { useCalculatorDispatch } from "../contexts/Calculator.jsx";

const buttonStyles = {
    indigo: 'bg-gray-500 font-bold text-white rounded-lg px-10 py-5 hover:bg-indigo-800',
    slate: 'bg-indigo-950 font-bold text-white rounded-lg px-10 py-5 hover:bg-slate-900',
    amber: 'bg-gray-700 font-bold text-white rounded-lg px-10 py-5 hover:bg-gray-900',
};

export function Button(props) {
    const calculatorDispatch = useCalculatorDispatch();

    const handleButton = (input) => {
        if (input === 'AC') {
            calculatorDispatch({ type: 'clear' });
            return;
        }
        if (input === '=') {
            calculatorDispatch({ type: 'evaluate' });
            return;
        }
        if (input === '×') {
            input = '*';
        }
        if (input === '÷') {
            input = '/';
        }
        calculatorDispatch({ type: 'input', input });
    };

    return (
        <button
            onClick={() => handleButton(props.buttonLabel)}
            className={`rounded-full px-10 py-5 font-bold text-white text-center ${buttonStyles[props.style || 'zinc']} ${props.className}`}
        >
            {props.buttonLabel}
        </button>
    );
}

Button.propTypes = {
    buttonLabel: PropTypes.string,
    style: PropTypes.string,
    className: PropTypes.string,
};