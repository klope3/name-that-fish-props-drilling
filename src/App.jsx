import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import "./Components/styles/final-score.css";
import { useState } from "react";
import { Images } from "./assets/images";
import { FinalScore } from "./Components/FinalScore";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

function App() {
  const [inputField, setInputField] = useState("");
  const [responses, setResponses] = useState([]);

  function changeInput(event) {
    setInputField(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    setResponses(prevArray => [
      ...prevArray,
      {
        input: inputField,
        isCorrect: inputField === initialFishes[responses.length].name,
      },
    ]);
    setInputField("");
  }

  const answersLeft = [...initialFishes].splice(responses.length);
  const score = {
    correct: responses.reduce((accum, response) => response.isCorrect ? accum + 1 : accum, 0),
    incorrect: responses.reduce((accum, response) => !response.isCorrect ? accum + 1 : accum, 0),
  };

  return (
    <div className="App">
      <header>
        <ScoreBoard answersLeft={answersLeft.map(answer => answer.name)} score={score} />
        {answersLeft.length > 0 && <GameBoard nextFish={answersLeft[0]} submitFunction={onSubmit} inputField={inputField} changeInputFunction={changeInput} />}
        {answersLeft.length === 0 && <FinalScore correctCount={score.correct} totalCount={4} />}
      </header>
    </div>
  );
}

export default App;
