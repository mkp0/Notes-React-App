const Quote = ({ name, quote, deleteq, id }) => {
  return (
    <div className="ui container">
      <div className="ui segment red">
        <h2 class="ui left floated header">Name : {name}</h2>
        <div
          class="ui right floated header"
          style={{ float: "right", color: "red", cursor: "pointer" }}
          onClick={() => {
            deleteq(id);
          }}
        >
          <i class="fas fa-times"></i>
        </div>

        <div class="ui clearing divider">{quote}</div>
        <p></p>
      </div>
    </div>
  );
};

export default Quote;
