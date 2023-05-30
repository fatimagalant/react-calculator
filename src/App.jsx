import {Button} from "./components/ Button.jsx";
import Display from "./components/Display.jsx";

import {CalculatorProvider} from "./contexts/Calculator.jsx";

function App() {

    return (
        <div className={"container max-w-sm mx-auto mt-28"}>
            <div className={"w-full rounded-lg bg-black shadow-2xl p-2 my-2 shadow-slate-950"}>
                <CalculatorProvider>
                <Display/>
                <div className={"grid grid-cols-4 gap-2 mt-3"}>
                    <Button buttonLabel={"÷"} style={"indigo"}/>
                    <Button buttonLabel={"×"} style={"indigo"}/>
                    <Button buttonLabel={"-"} style={"indigo"}/>
                    <Button buttonLabel={"+"} style={"indigo"}/>
                </div>
                <div className={"grid grid-cols-4 gap-2 mt-3"}>
                    <Button buttonLabel={"7"} style={"amber"}/>
                    <Button buttonLabel={"8"} style={"amber"}/>
                    <Button buttonLabel={"9"} style={"amber"}/>
                    <Button buttonLabel={"%"} style={"slate"}/>
                    <Button buttonLabel={"4"} style={"amber"}/>
                    <Button buttonLabel={"5"} style={"amber"}/>
                    <Button buttonLabel={"6"} style={"amber"}/>
                    <Button buttonLabel={"AC"} style={"slate"}/>
                    <Button buttonLabel={"1"} style={"amber"}/>
                    <Button buttonLabel={"2"} style={"amber"}/>
                    <Button buttonLabel={"3"} style={"amber"}/>
                    <Button buttonLabel={"="} className={"row-span-2 px-2"} style={"slate"}/>
                    <Button buttonLabel={"0"} className={"col-span-2"} style={"amber"}/>
                    <Button buttonLabel={"."} style={"slate"}/>
                </div>
                </CalculatorProvider>
            </div>
        </div>
    )
}

export default App
