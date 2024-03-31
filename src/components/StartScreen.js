function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Willkommen bei Einbürgerungstest App</h2>
      <h3>{numQuestions} Fragen zum Einbürgerungstest</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Los geht's
      </button>
    </div>
  );
}

export default StartScreen;
