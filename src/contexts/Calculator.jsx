import {createContext, useContext, useEffect, useReducer} from 'react';
import {evaluate} from "mathjs";
import PropTypes from "prop-types";

const CalculatorContext = createContext(null);
const CalculatorDispatch = createContext(null);

const initialCalculator = {
    history: [], // Empty array to store the history
    evaluationString: "",
    result: 0,
};


export function CalculatorProvider({children}) {
    const [event, dispatch] = useReducer(
        calculatorReducer,
        initialCalculator
    );

    const keydownHandler = (event) => {
        if (Number(event.key) > 0) {
            dispatch({ type: 'input', input: event.key });
        }
    }
    useEffect(() => {
        document.addEventListener("keydown", keydownHandler)
    }, [])

    return (
        <CalculatorContext.Provider value={event}>
            <CalculatorDispatch.Provider value={dispatch}>
                {children}
            </CalculatorDispatch.Provider>
        </CalculatorContext.Provider>
    );
}

CalculatorProvider.propTypes = {
    children: PropTypes.array
}

export function useCalculator() {
    return useContext(CalculatorContext);
}

export function useCalculatorDispatch() {
    return useContext(CalculatorDispatch);
}

function calculatorReducer(event, action) {
    switch (action.type) {
        case "input":
            return { ...event, evaluationString: `${event.evaluationString}${action.input}` };
        case "clear":
            return { ...event, evaluationString: "", result: 0 };
        case "evaluate": {
            const result = evaluate(event.evaluationString);
            const newHistoryItem = {
                evaluationString: event.evaluationString,
                result: result,
            };
            const newHistory = [...event.history, newHistoryItem];
            return { ...event, evaluationString: "", result: result, history: newHistory };
        }
        default:
            throw Error("Unknown action: " + action.type);
    }
}
