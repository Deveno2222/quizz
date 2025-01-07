import { useEffect, useRef } from "react";

export default function Game({ question, onClickVar, step, questionLen }) {
    const percentage = useRef(0);

    useEffect(() => {
        if (percentage.current) {
            const percent = Math.round((step / questionLen) * 100);
            percentage.current.style.width = `${percent}%`;
        }
    }, [step]);

    return (
        <div className="card shadow-sm mt-4">
            <div className="card-body">
                <h5 className="card-title text-center">
                    Question {step + 1} of {questionLen}
                </h5>
                <h3 className="card-text text-primary text-center mb-4">
                    {question.question}
                </h3>
                <ul className="list-group">
                    {question.options.map((option, index) => (
                        <li
                            key={index}
                            className="list-group-item list-group-item-action"
                            onClick={() => onClickVar(index)}
                            style={{ cursor: "pointer" }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="progress" style={{ height: "10px" }}>
                <div
                    ref={percentage}
                    className="progress-bar bg-success"
                    role="progressbar"
                    aria-valuenow={(step / questionLen) * 100}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "0%", transition: "width 0.3s ease" }}
                ></div>
            </div>
        </div>
    );
}
