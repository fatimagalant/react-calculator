import { useCalculator } from "../contexts/Calculator.jsx";

const History = () => {
    const calculator = useCalculator();

    return (
        <>
            <h1 className="text-white">History</h1>
            {calculator.history.map((item, index) => (
                <p key={`history_${index}`}>
                    {item.evaluationString} = {item.result}
                </p>
            ))}
        </>
    );
};

export default History;