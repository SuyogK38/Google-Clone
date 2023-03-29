import React from "react";

const Show = (props) => {
  const { results, info } = props;
  return (
    <div className="show">
      <br />
      <br />
      <hr />
      <div className="show__info">
        <br />
        {info ? `Total results: ${info.totalResults}` : ""}
      </div>{" "}
      <br />
      {results.map((result) => (
        <div className="show__details">
          <br />
          <div className="show__link">{result.displayLink}</div>
          <div className="show__title">
            <a href={result.link}> {result.title}</a>
          </div>
          <div className="show__description">
            <p>{result.snippet}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Show;
