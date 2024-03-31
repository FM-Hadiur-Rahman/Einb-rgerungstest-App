function PreviousButton({ dispatch, answer, numQuestions, index }) {
  // if (answer === null) return null;
  if (index >= 1)
    return (
      <button
        className="btn btn-ui-left"
        onClick={() => dispatch({ type: "prevQuestion" })}
      >
        Vorherige
      </button>
    );
}

export default PreviousButton;
