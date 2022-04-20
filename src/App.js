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


  const wordChoice = [{word: "Kimchi", origin: "Korean"},{word: "Piano",origin: "Italian"},{word: 'Pho',origin: 'Vietnamese'},{word: "Queso",origin: "Spanish"},{word: "Mozzarella",origin: "Italian"},{word: "Pizza",origin: "Italian"},{word: "Dynamite",origin: "Greek"},{word: "Baguette",origin: "French"},{word: "Crepe",origin: "French"},{word: "Shampoo",origin: "Hindi"},{word: "Naan",origin: "Hindi"},{word: "Macaroni",origin: "Italian"},{word: "Ramen",origin: "Japanese"},{word: "Microphone",origin: "Greek"},{word: "Saxophone",origin: "French"},{word: "cartoon",origin: "Italian"},{word: "Cookie",origin: "Dutch"},{word: "Iguana",origin: "Spanish"},{word: "Chinchilla",origin: "Spanish"},{word: "Axolotl",origin: "Nahuatl"},{word: "Chocolate",origin: "Nahuatl"},{word: "Sense",origin: "English"},{word: "Potato",origin: "Spanish"},{word: "Taco",origin: "Spanish"},{word: "Cosmos",origin: "Greek"},{word: "Flora",origin: "Latin"},{word: "Fauna",origin: "Latin"},{word: "Aloha",origin: "Hawaiian"},{word: "Wonton",origin: "Chinese"},{word: "Congee",origin: "Tamil"},{word: "Croissant",origin: "French"},{word: "Pangolin",origin: "Malay"},{word: "Zebra",origin: "Portuguese"},{word: "Brainwashing",origin: "Chinese"},{word: "Bungalow",origin: "Hindi"},{word: "Admiral",origin: "English"},{word: "Tea",origin: "Chinese"},{word: "Ketchup",origin: "Malay"},{word: "Futon",origin: "Japanese"},{word: "Poncho",origin: "Spanish"},{word: "Sudoku",origin: "Japanese"},{word: "Karate",origin: "Japanese"},{word: "Kudzu",origin: "Japanese"},{word: "Koi",origin: "Japanese"},{word: "Tycoon",origin: "Japanese"},{word: "Natto",origin: "Japanese"},{word: "Taekwondo",origin: "Korean"},{word: "Kungfu",origin: "Chinese"},{word: "Judo",origin: "Japanese"},{word: "Kendo",origin: "Japanese"},{word: "Dojo",origin: "Japanese"},{word: "Geode",origin: "Greek"},{word: "Hamburger",origin: "German"},{word: "Kiwi",origin: "Maori"},{word: "Margarita",origin: "Spanish"},{word: "Whiskey",origin: "Irish"},{word: "Vodka",origin: "Russian"},{word: "Gecko",origin: "Malay"},{word: "Anole",origin: "French"},{word: "Boa",origin: "Latin"},{word: "Gastropod",origin: "Latin"},{word: "Wombat",origin: "Dharuk"},{word: "Kangaroo",origin: "Guugu Yimidhirr"},{word: "Jaguar",origin: "Portuguese"},{word: "Marigold",origin: "English"},{word: "Bonsai",origin: "Japanese"},{word: "Pharaohs",origin: "Egyptian"},{word: "Bowl",origin: "German"},{word: "Chess",origin: "English"},{word: "Telescope",origin: "Latin"},{word: "Safari",origin: "Swahili"},{word: "Sugar",origin: "Sanskrit"},{word: "Chameleon",origin: "Greek"},{word: "Lion",origin: "Greek"},{word: "Penguin",origin: "Welsh"},{word: "Avocado",origin: "Nahuatl"},{word: "Coyote",origin: "Nahuatl"},{word: "Tomato",origin: "Nahuatl"},{word: "Chili",origin: "Nahuatl"},{word: "Tortilla",origin: "Spanish"},{word: "Emerald",origin: "Greek"},{word: "Ruby",origin: "Latin"},{word: "Atom",origin: "Greek"},{word: "Code",origin: "Latin"},{word: "Lunar",origin: "Latin"},{word: "Typhoon",origin: "Greek"},{word: "Sofa",origin: "Arabic"},{word: "Saffron",origin: "Arabic"},{word: "Alcohol",origin: "Arabic"},{word: "Octopus",origin: "Greek"},{word: "Magazine",origin: "Arabic"},{word: "Coconut",origin: "Portuguese"},{word: "Pencil",origin: "Latin"},{word: "Mojito",origin: "Latin"},{word: "Wheel",origin: "Sanskrit"},{word: "Cockatoo",origin: "Malay"},{word: "Parrot",origin: "French"},{word: "Parakeet",origin: "French"},{word: "Scorpion",origin: "Greek"},{word: "Soda",origin: "Arabic"},{word: "Mantle",origin: "Latin"},{word: "Mantis",origin: "Latin"}]
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


  const shuffledQuestion = wordChoice.sort(() => 0.5 - Math.random());


  var answerIndex = answers.indexOf(shuffledQuestion[0].origin);
  answers.splice(answerIndex, 1);
  const shuffledAnswers = answers.sort(() => 0.5 - Math.random());
  let answer = [{randanswer: shuffledQuestion[0].origin, isCorrect: true}, {randanswer:shuffledAnswers[0], isCorrect: false}, {randanswer:shuffledAnswers[1], isCorrect: false}, {randanswer:shuffledAnswers[2], isCorrect: false}];
  const shuffledAnswer = answer.sort(() => 0.5 - Math.random());
  answers.push(shuffledQuestion[0].origin);
  
  answerIndex = answers.indexOf(shuffledQuestion[1].origin);
  answers.splice(answerIndex, 1);
  const shuffledAnswers1 = answers.sort(() => 0.5 - Math.random());
  let answer1 = [{randanswer: shuffledQuestion[1].origin, isCorrect: true}, {randanswer:shuffledAnswers1[0], isCorrect: false}, {randanswer:shuffledAnswers1[1], isCorrect: false}, {randanswer:shuffledAnswers1[2], isCorrect: false}];
  const shuffledAnswer1 = answer1.sort(() => 0.5 - Math.random());
  answers.push(shuffledQuestion[1].origin);
  
  answerIndex = answers.indexOf(shuffledQuestion[2].origin);
  answers.splice(answerIndex, 1);
  const shuffledAnswers2 = answers.sort(() => 0.5 - Math.random());
  let answer2 = [{randanswer: shuffledQuestion[2].origin, isCorrect: true}, {randanswer:shuffledAnswers2[0], isCorrect: false}, {randanswer:shuffledAnswers2[1], isCorrect: false}, {randanswer:shuffledAnswers2[2], isCorrect: false}];
  const shuffledAnswer2 = answer2.sort(() => 0.5 - Math.random());
  answers.push(shuffledQuestion[2].origin);
  
  answerIndex = answers.indexOf(shuffledQuestion[3].origin);
  answers.splice(answerIndex, 1);
  const shuffledAnswers3 = answers.sort(() => 0.5 - Math.random());
  let answer3 = [{randanswer: shuffledQuestion[3].origin, isCorrect: true}, {randanswer:shuffledAnswers3[0], isCorrect: false}, {randanswer:shuffledAnswers3[1], isCorrect: false}, {randanswer:shuffledAnswers3[2], isCorrect: false}];
  const shuffledAnswer3 = answer3.sort(() => 0.5 - Math.random());
  answers.push(shuffledQuestion[3].origin);
  
  answerIndex = answers.indexOf(shuffledQuestion[4].origin);
  answers.splice(answerIndex, 1);
  const shuffledAnswers4 = answers.sort(() => 0.5 - Math.random());
  let answer4 = [{randanswer: shuffledQuestion[4].origin, isCorrect: true}, {randanswer:shuffledAnswers4[0], isCorrect: false}, {randanswer:shuffledAnswers4[1], isCorrect: false}, {randanswer:shuffledAnswers4[2], isCorrect: false}];
  const shuffledAnswer4 = answer4.sort(() => 0.5 - Math.random());
  answers.push(shuffledQuestion[4].origin);
  
  answerIndex = answers.indexOf(shuffledQuestion[5].origin);
  answers.splice(answerIndex, 1);
  const shuffledAnswers5 = answers.sort(() => 0.5 - Math.random());
  let answer5 = [{randanswer: shuffledQuestion[5].origin, isCorrect: true}, {randanswer:shuffledAnswers5[0], isCorrect: false}, {randanswer:shuffledAnswers5[1], isCorrect: false}, {randanswer:shuffledAnswers5[2], isCorrect: false}];
  const shuffledAnswer5 = answer5.sort(() => 0.5 - Math.random());
  answers.push(shuffledQuestion[5].origin);
  
  answerIndex = answers.indexOf(shuffledQuestion[6].origin);
  answers.splice(answerIndex, 1);
  const shuffledAnswers6 = answers.sort(() => 0.5 - Math.random());
  let answer6 = [{randanswer: shuffledQuestion[6].origin, isCorrect: true}, {randanswer:shuffledAnswers6[0], isCorrect: false}, {randanswer:shuffledAnswers6[1], isCorrect: false}, {randanswer:shuffledAnswers6[2], isCorrect: false}];
  const shuffledAnswer6 = answer6.sort(() => 0.5 - Math.random());
  answers.push(shuffledQuestion[6].origin);
  
  answerIndex = answers.indexOf(shuffledQuestion[7].origin);
  answers.splice(answerIndex, 1);
  const shuffledAnswers7 = answers.sort(() => 0.5 - Math.random());
  let answer7 = [{randanswer: shuffledQuestion[7].origin, isCorrect: true}, {randanswer:shuffledAnswers7[0], isCorrect: false}, {randanswer:shuffledAnswers7[1], isCorrect: false}, {randanswer:shuffledAnswers7[2], isCorrect: false}];
  const shuffledAnswer7 = answer7.sort(() => 0.5 - Math.random());
  answers.push(shuffledQuestion[7].origin);
  
  answerIndex = answers.indexOf(shuffledQuestion[8].origin);
  answers.splice(answerIndex, 1);
  const shuffledAnswers8 = answers.sort(() => 0.5 - Math.random());
  let answer8 = [{randanswer: shuffledQuestion[8].origin, isCorrect: true}, {randanswer:shuffledAnswers8[0], isCorrect: false}, {randanswer:shuffledAnswers8[1], isCorrect: false}, {randanswer:shuffledAnswers8[2], isCorrect: false}];
  const shuffledAnswer8 = answer8.sort(() => 0.5 - Math.random());
  answers.push(shuffledQuestion[8].origin);
  
  answerIndex = answers.indexOf(shuffledQuestion[9].origin);
  answers.splice(answerIndex, 1);
  const shuffledAnswers9 = answers.sort(() => 0.5 - Math.random());
  let answer9 = [{randanswer: shuffledQuestion[9].origin, isCorrect: true}, {randanswer:shuffledAnswers9[0], isCorrect: false}, {randanswer:shuffledAnswers9[1], isCorrect: false}, {randanswer:shuffledAnswers9[2], isCorrect: false}];
  const shuffledAnswer9 = answer9.sort(() => 0.5 - Math.random());
  answers.push(shuffledQuestion[9].origin);
  

/*const languages = [
	"Nahuatl",
	"Spanish",
	"Chinese", 
	"Malay", 
	"Japanese", 
	"Korean", 
	"Italian", 
	"German", 
	"English", 
	"Greek", 
	"Latin", 
	"Swahili", 
	"Russian", 
	"French", 
	"Dutch"	
  ];
  

function randomLanguage(array, lang)
{
	return functions(){
		var index = languages[Math.floor(Math.random()*languages.length)];
		while(index !== lang){
			var index = languages[Math.floor(Math.random()*languages.length)];
		}
		return index;
	}
}
*/
  const questions = [
    {
      questionText: shuffledQuestion[0].word,
      answerOptions: [
        { answerText: shuffledAnswer[0].randanswer, isCorrect: shuffledAnswer[0].isCorrect },
        { answerText: shuffledAnswer[1].randanswer, isCorrect: shuffledAnswer[1].isCorrect },
        { answerText: shuffledAnswer[2].randanswer, isCorrect: shuffledAnswer[2].isCorrect },
        { answerText: shuffledAnswer[3].randanswer, isCorrect: shuffledAnswer[3].isCorrect },
      ],
    },
    {
      questionText: shuffledQuestion[1].word,
      answerOptions: [
        { answerText: shuffledAnswer1[0].randanswer, isCorrect: shuffledAnswer1[0].isCorrect },
        { answerText: shuffledAnswer1[1].randanswer, isCorrect: shuffledAnswer1[1].isCorrect },
        { answerText: shuffledAnswer1[2].randanswer, isCorrect: shuffledAnswer1[2].isCorrect },
        { answerText: shuffledAnswer1[3].randanswer, isCorrect: shuffledAnswer1[3].isCorrect },
      ],
    },
    {
      questionText: shuffledQuestion[2].word,
      answerOptions: [
        { answerText: shuffledAnswer2[0].randanswer, isCorrect: shuffledAnswer2[0].isCorrect },
        { answerText: shuffledAnswer2[1].randanswer, isCorrect: shuffledAnswer2[1].isCorrect },
        { answerText: shuffledAnswer2[2].randanswer, isCorrect: shuffledAnswer2[2].isCorrect },
        { answerText: shuffledAnswer2[3].randanswer, isCorrect: shuffledAnswer2[3].isCorrect },
      ],
    },
    {
      questionText: shuffledQuestion[3].word,
      answerOptions: [
        { answerText: shuffledAnswer3[0].randanswer, isCorrect: shuffledAnswer3[0].isCorrect },
        { answerText: shuffledAnswer3[1].randanswer, isCorrect: shuffledAnswer3[1].isCorrect },
        { answerText: shuffledAnswer3[2].randanswer, isCorrect: shuffledAnswer3[2].isCorrect },
        { answerText: shuffledAnswer3[3].randanswer, isCorrect: shuffledAnswer3[3].isCorrect },
      ],
    },
    {
      questionText: shuffledQuestion[4].word,
      answerOptions: [
        { answerText: shuffledAnswer4[0].randanswer, isCorrect: shuffledAnswer4[0].isCorrect },
        { answerText: shuffledAnswer4[1].randanswer, isCorrect: shuffledAnswer4[1].isCorrect },
        { answerText: shuffledAnswer4[2].randanswer, isCorrect: shuffledAnswer4[2].isCorrect },
        { answerText: shuffledAnswer4[3].randanswer, isCorrect: shuffledAnswer4[3].isCorrect },
      ],
    },
    {
      questionText: shuffledQuestion[5].word,
      answerOptions: [
        { answerText: shuffledAnswer5[0].randanswer, isCorrect: shuffledAnswer5[0].isCorrect },
        { answerText: shuffledAnswer5[1].randanswer, isCorrect: shuffledAnswer5[1].isCorrect },
        { answerText: shuffledAnswer5[2].randanswer, isCorrect: shuffledAnswer5[2].isCorrect },
        { answerText: shuffledAnswer5[3].randanswer, isCorrect: shuffledAnswer5[3].isCorrect },
      ],
    },
    {
      questionText: shuffledQuestion[6].word,
      answerOptions: [
        { answerText: shuffledAnswer6[0].randanswer, isCorrect: shuffledAnswer6[0].isCorrect },
        { answerText: shuffledAnswer6[1].randanswer, isCorrect: shuffledAnswer6[1].isCorrect },
        { answerText: shuffledAnswer6[2].randanswer, isCorrect: shuffledAnswer6[2].isCorrect },
        { answerText: shuffledAnswer6[3].randanswer, isCorrect: shuffledAnswer6[3].isCorrect },
      ],
    },
    {
      questionText: shuffledQuestion[7].word,
      answerOptions: [
        { answerText: shuffledAnswer7[0].randanswer, isCorrect: shuffledAnswer7[0].isCorrect },
        { answerText: shuffledAnswer7[1].randanswer, isCorrect: shuffledAnswer7[1].isCorrect },
        { answerText: shuffledAnswer7[2].randanswer, isCorrect: shuffledAnswer7[2].isCorrect },
        { answerText: shuffledAnswer7[3].randanswer, isCorrect: shuffledAnswer7[3].isCorrect },
      ],
    },
    {
      questionText: shuffledQuestion[8].word,
      answerOptions: [
        { answerText: shuffledAnswer8[0].randanswer, isCorrect: shuffledAnswer8[0].isCorrect },
        { answerText: shuffledAnswer8[1].randanswer, isCorrect: shuffledAnswer8[1].isCorrect },
        { answerText: shuffledAnswer8[2].randanswer, isCorrect: shuffledAnswer8[2].isCorrect },
        { answerText: shuffledAnswer8[3].randanswer, isCorrect: shuffledAnswer8[3].isCorrect },
      ],
    },
    {
      questionText: shuffledQuestion[9].word,
      answerOptions: [
        { answerText: shuffledAnswer9[0].randanswer, isCorrect: shuffledAnswer9[0].isCorrect },
        { answerText: shuffledAnswer9[1].randanswer, isCorrect: shuffledAnswer9[1].isCorrect },
        { answerText: shuffledAnswer9[2].randanswer, isCorrect: shuffledAnswer9[2].isCorrect },
        { answerText: shuffledAnswer9[3].randanswer, isCorrect: shuffledAnswer9[3].isCorrect },
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

