import React from "react";
import { useState } from "react";
import "../index.css";

import Oparators from "./Operattors";

export default function Calculator() {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");
    const ops = ["%","+/-","/", "*", "+", "-", "."];
    const handleCalc = (value) => {
        if (
            (ops.includes(value) && calc === "0") ||
            (ops.includes(value) && ops.includes(calc.slice(-1)))
        ) {
            return;
        }
        setCalc(calc + value);
        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    };

    const calculate = () => {
        setCalc(eval(calc).toString());
    };

    const deleteLast = () => {
        if (calc == "") {
            return;
        }
        const value = calc.slice(0, -1);
        setCalc(value);
    };

    const kompletDelete = () => {
        setCalc("");
    };

    // const createDigits = () => {
    //     const digits = [];
    //     for (let i = 1; i < 10; i++) {
    //         digits.push(
    //             <button onClick={() => handleCalc(i.toString())} key={i}>
    //                 {i}
    //             </button>
    //         );
    //     }
    //     return digits;
    // };
    return (
        <>
            <div className="calculator">
                <div className="display">
                    {result ? <p></p>: ""}&nbsp;
                    {/* ({result}) */}
                    {calc || "0"}
                </div>

                <div className="ac">
                    <button className="farbe1" onClick={kompletDelete}>Ac</button>
                    <button className="farbe1" onClick={() => handleCalc("+/-")}>+/-</button>
                    <button className="farbe1" onClick={() => handleCalc("%")}>%</button>
                    <button className="farbe2" onClick={() => handleCalc("/")}>/</button>
                </div>
                
                <div className="digits">
                    {/* {createDigits()} */}
                    <button onClick={() => handleCalc("1")}>1</button>
                    <button onClick={() => handleCalc("2")}>2</button>
                    <button onClick={() => handleCalc("3")}>3</button>
                    <button className="farbe2" onClick={() => handleCalc("*")}>x</button>

                    <button onClick={() => handleCalc("4")}>4</button>
                    <button onClick={() => handleCalc("5")}>5</button>
                    <button onClick={() => handleCalc("6")}>6</button>
                    <button className="farbe2" onClick={() => handleCalc("+")}>+</button>

                    <button onClick={() => handleCalc("7")}>7</button>
                    <button onClick={() => handleCalc("8")}>8</button>
                    <button onClick={() => handleCalc("9")}>9</button>
                    <button className="farbe2" onClick={() => handleCalc("-")}>-</button>

                    <button className="farbe1" onClick={deleteLast}>DEL</button>

                    <button onClick={() => handleCalc("0")}>0</button>
                    <button onClick={() => handleCalc(".")}>.</button>
                    <button className="farbe2" onClick={calculate}>=</button>
                </div>
            </div>
        </>
    );
}

// export { handleCalc };
