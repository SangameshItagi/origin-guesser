
import { Button } from 'antd';

import React, { useState } from 'react';

export default function App() {
  const questions = [
      {
          questionText: 'Piano',
          answerOptions: [
              { answerText: 'USA', isCorrect: false },
              { answerText: 'UK', isCorrect: false },
              { answerText: 'Germany', isCorrect: false },
              { answerText: 'Japan', isCorrect: true },
          ],
      },
      {
          questionText: 'Compass',
          answerOptions: [
              { answerText: 'USA', isCorrect: false },
              { answerText: 'UK', isCorrect: false },
              { answerText: 'Germany', isCorrect: false },
              { answerText: 'Japan', isCorrect: true },
          ],
      },
      {
          questionText: 'Printing Press',
          answerOptions: [
              { answerText: 'USA', isCorrect: false },
              { answerText: 'UK', isCorrect: false },
              { answerText: 'Germany', isCorrect: false },
              { answerText: 'Japan', isCorrect: true },
          ],
      },
      {
          questionText: 'Cheese',
          answerOptions: [
              { answerText: 'USA', isCorrect: false },
              { answerText: 'UK', isCorrect: false },
              { answerText: 'Germany', isCorrect: false },
              { answerText: 'Japan', isCorrect: true },
          ],
      },
  ];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to OriginGuesser</h1>
      <h2>Points:</h2>
        <Button className='option-One-Button'>Option 1</Button>
        <Button className='option-Two-Button'>Option 2</Button>
        <Button className='option-Three-Button'>Option 3</Button>
        <Button className='option-Four-Button'>Option 4</Button>
      </header>
    </div>
  );
}

	return (
		<div className='app'>
      <header className="App-header">
      <h1>Welcome to OriginGuesser</h1>
      
			{showScore ? (
				<div className='score-section'>
					You scored {score}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Score: {score}</span>
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<Button className='option-One-Button' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</Button>
              
            ))}
					</div>
				</>
			)}
      </header>
		</div>
    
	);
}