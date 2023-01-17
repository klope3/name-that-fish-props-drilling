import "./styles/game-board.css";

export const GameBoard = (props) => {
  const {
    nextFish: {
      url: imgUrl,
      name: fishName,
    },
    submitFunction,
    inputField,
    changeInputFunction,
  } = props;
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={imgUrl} alt={fishName} />
      </div>
      <form id="fish-guess-form" onSubmit={submitFunction}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input type="text" name="fish-guess" value={inputField} onChange={changeInputFunction} />
        <input type="submit" />
      </form>
    </div>
  );
};
