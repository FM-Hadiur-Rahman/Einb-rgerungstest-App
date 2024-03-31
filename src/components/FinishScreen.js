function FinishScreen({ points, maxPossiblepoints, highscore, dispatch }) {
  console.log(maxPossiblepoints);
  const percentage = (points / maxPossiblepoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🥳";
  if (percentage >= 0 && percentage < 50) emoji = "☺️";
  if (percentage === 0) emoji = "🥲";
  return (
    <div>
      <p className="result">
        <span>{emoji}</span>Sie Haben <strong>{points}</strong> von{" "}
        {maxPossiblepoints} Punkten erreicht ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">Highscore {highscore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Neustart
      </button>
    </div>
  );
}

export default FinishScreen;
