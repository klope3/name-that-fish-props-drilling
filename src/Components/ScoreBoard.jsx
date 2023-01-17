import "./styles/score-board.css";
//  Where the score is presented

export const ScoreBoard = (props) => {
  const {
    score: {
      correct,
      incorrect,
    },
    answersLeft,
  } = props;
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrect}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correct}</div>
    </div>
  );
};
