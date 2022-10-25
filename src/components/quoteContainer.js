const QuoteContainer = (props) => {
  return (
    <div className="card">
      <div className="card-body">{props.quote}</div>
    </div>
  );
};

export default QuoteContainer;
