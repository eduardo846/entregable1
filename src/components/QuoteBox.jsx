import React from "react";

const QuoteBox = ({ sentence, author, changeSentences }) => {
  return (
    <div className="sentence">
      <h1 className="sentence--text">
        <i className="fa-solid fa-quote-left"></i> {sentence}
      </h1>
      <h2 className="sentence--author">{author}</h2>
      <div className="button--right">
        <button onClick={changeSentences}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
