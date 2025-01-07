import { useState } from "react";
import Game from "./Game";
import Result from "./Result.jsx";

import Quiz from "./Quiz.js";

function App() {
    const [step, setStep] = useState(0);
	const [correct, setCorrect] = useState(0)
    const question = Quiz[step];
    const questionLen = Quiz.length;

    const onClickVar = (index) => {
        console.log(step, index);
        setStep((prev) => prev + 1);

		if (question.correctAnswer === question.options[index]) {
			setCorrect(prev => prev + 1)
		}
    };

    return (
        <div className="container">
            {step !== questionLen ? (
                <Game
                    question={question}
                    onClickVar={onClickVar}
                    step={step}
                    questionLen={questionLen}
                />
            ) : (
                <Result correct={correct} total={questionLen}/>
            )}
        </div>
    );
}

export default App;
