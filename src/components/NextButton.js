function NextButton({ dispatch, answer, numQuestions, index }) {
  // if (answer === null) return null;
  if (index < numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Nächste
      </button>
    );
  }

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Fertig
      </button>
    );
}

export default NextButton;
