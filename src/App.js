import { Button } from 'antd';

import React, { useState } from 'react';
import { Text, StyleSheet } from "react-native";
import data from './data/words.txt';

export default function App() {

  function refreshPage() {
    window.location.reload(false);
  }

  console.log(data);
  fetch(data)
    .then((r) => r.text())
    .then(text => {
      console.log(text);
    })
  const words = ['kimchi', 'Piano', 'pho', 'queso', 'mozzarella', 'Pizza', 'Dynamite', 'baguette', 'crepe', 'Shampoo', 'naan', 'macaroni'
    , 'ramen', 'Microphone', 'Saxophone', 'cartoon', 'cookie', 'iguana', 'chinchilla', 'axolotl', 'chocolate', 'sense', 'potato', 'Taco', 'cosmos', 'flora', 'fauna', 'aloha', 'wonton', 'congee', 'croissant', 'pangolin', 'Zebra', 'brainwashing', 'bungalow', 'admiral', 'tea', 'ketchup', 'Futon', 'Poncho', 'Sudoku', 'karate', 'kudzu', 'Koi', 'tycoon', 'natto', 'taekwondo', 'kungfu', 'judo', 'kendo', 'dojo', 'Geode', 'hamburger', 'kiwi', 'margarita', 'whiskey', 'Vodka', 'gecko', 'anole', 'boa', 'gastropod', 'wombat', 'kangaroo', 'jaguar', 'marigold', 'bonsai', 'Pharaohs', 'Bowl', 'Chess', 'Telescope', 'safari', 'Sugar', 'chameleon', 'lion', 'penguin', 'avocado', 'coyote', 'tomato', 'Chili', 'Tortilla', 'Emerald', 'Ruby', 'Java', 'Atom', 'Code', 'lunar', 'typhoon', 'sofa', 'saffron', 'alcohol', 'octopus', 'magazine', 'coconut', 'pencil', 'mojito', 'wheel', 'cockatoo', 'Parakeet', 'parrot', 'scorpion', 'soda', 'mantle', 'mantis']
  const wordAnswers = ['Korean', 'Italian', 'Vietnamese ', 'Spanish', 'Italian', 'Italian', 'Greek', 'French', 'French', 'Hindi', ' Hindi ', 'Italian', 'Japanese ', 'Greek ', 'French', 'Italian ', 'Dutch ', 'Spanish', 'Spanish', 'Nahuatl', 'Nahuatl ', 'English', 'Spanish', 'Spanish ', 'Greek', 'Latin', 'Latin', 'Hawaiian', 'Chinese', 'Tamil ', 'French', 'Malay ', 'Portuguese', 'Chinese ', 'Hindi', 'English ', 'Chinese', 'Malay ', 'Japanese', 'Spanish', 'Japanese', 'Japanese', 'Japanese ', 'Japanese ', 'Japanese ', 'Japanese', 'Korean ', 'Chinese', 'Japanese ', 'Japanese ', 'Japanese', 'Greek ', 'German ', 'Maori', 'Spanish ', 'Irish', 'Russian', 'Malay', 'French', 'Latin', 'Latin ', 'Dharuk', 'Guugu Yimidhirr', 'Portuguese', 'English', 'Japanese', 'Egyptian', 'German', 'English', 'Latin', 'Swahili', 'Sanskrit ', 'Greek', 'Greek', 'Welsh', 'Nahuatl', 'Nahuatl', 'Nahuatl', 'Nahuatl', 'Spanish', 'Greek ', 'Latin ', 'Greek ', 'Latin', 'Latin ', 'Greek', 'Arabic ', 'Arabic ', 'Arabic', 'Greek', 'Arabic ', 'Portuguese', 'Latin', 'Latin ', 'Sanskrit ', 'Malay ', 'French ', 'French ', 'Greek', 'Arabic ', 'Latin ', 'Greek '];
  const answers = ['English', 'Spanish', 'French', 'Japanese', 'Vietnamese', 'Italian', 'Dutch', 'Nahuatl', 'Latin', 'Hawaiian', 'Tamil', 'Malay', 'Portuguese', 'Chinese', 'German', 'Maori', 'Irish', 'Russian', 'Dharuk', 'Guugu Yimidhirr', 'Portuguese', 'Egyptian', 'Swahili', 'Sanskrit', 'Welsh', 'Arabic'];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [dataisLoaded, setDataisLoaded] = useState(false);
  const [items, setItems] = useState([]);
  fetch("https://www.dictionaryapi.com/api/v3/references/collegiate/json/bubble?key=76936eb6-9142-455b-87c9-619f993d7eda", {
    "method": "GET"
  })
    .then(response => response.json())
    .then(response => {
      this.setState({
        items: response,
        dataisLoaded: true
      })
    })
    .catch(err => {
      console.log(err);
    });
  //This is just an array to give a bunch of random numbers so we can get a randome question and answer
  // I dont know how to randomize which button will be correct so they will be hard coded for the time being
  const choices = [Math.floor(Math.random() * answers.length), Math.floor(Math.random() * answers.length), Math.floor(Math.random() * answers.length), Math.floor(Math.random() * answers.length), Math.floor(Math.random() * answers.length), Math.floor(Math.random() * answers.length), Math.floor(Math.random() * answers.length), Math.floor(Math.random() * answers.length), Math.floor(Math.random() * answers.length), Math.floor(Math.random() * answers.length), Math.floor(Math.random() * answers.length), Math.floor(Math.random() * answers.length), Math.floor(Math.random() * answers.length), Math.floor(Math.random() * answers.length), Math.floor(Math.random() * answers.length), Math.floor(Math.random() * answers.length), Math.floor(Math.random() * answers.length), Math.floor(Math.random() * answers.length), Math.floor(Math.random() * answers.length), Math.floor(Math.random() * answers.length), Math.floor(Math.random() * answers.length), Math.floor(Math.random() * answers.length), Math.floor(Math.random() * answers.length), Math.floor(Math.random() * answers.length)]
  const questions = [
    {
      questionText: words[choices[0]],
      answerOptions: [
        { answerText: wordAnswers[choices[0]], isCorrect: true },
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
      ],
    },
    {
      questionText: words[choices[1]],
      answerOptions: [
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
        { answerText: wordAnswers[choices[1]], isCorrect: true },
      ],
    },
    {
      questionText: words[choices[2]],
      answerOptions: [
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
        { answerText: wordAnswers[choices[2]], isCorrect: true },
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
      ],
    },
    {
      questionText: words[choices[3]],
      answerOptions: [
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
        { answerText: wordAnswers[choices[3]], isCorrect: true },
      ],
    },
    {
      questionText: words[choices[4]],
      answerOptions: [
        { answerText: wordAnswers[choices[4]], isCorrect: true },
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
      ],
    },
    {
      questionText: words[choices[5]],
      answerOptions: [
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
        { answerText: wordAnswers[choices[5]], isCorrect: true },
      ],
    },
    {
      questionText: words[choices[6]],
      answerOptions: [
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
        { answerText: wordAnswers[choices[6]], isCorrect: true },
      ],
    },
    {
      questionText: words[choices[7]],
      answerOptions: [
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
        { answerText: wordAnswers[choices[7]], isCorrect: true },
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
      ],
    },
    {
      questionText: words[choices[8]],
      answerOptions: [
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
        { answerText: wordAnswers[choices[8]], isCorrect: false },
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: true },
      ],
    },
    {
      questionText: words[choices[9]],
      answerOptions: [
        { answerText: wordAnswers[choices[9]], isCorrect: true },
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
        { answerText: answers[Math.floor(Math.random() * answers.length)], isCorrect: false },
      ],
    },
    
  ];

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
        <h1>OriginGuesser</h1>
        <Text style={styles.baseText}>You will be shown 10 words of differing or similar origin <br />
        Your goal will be to identify the origin of each word as accurately as possible 
        </Text>
        {showScore ? (
          <div className='score-section'>
            You scored {score}
            <button onClick={refreshPage}>Restart</button>
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
const styles = StyleSheet.create({
  baseText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
