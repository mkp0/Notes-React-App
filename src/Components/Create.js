import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Create = (props) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [quote, setQuote] = useState("");

  function submit() {
    if (!name || !quote) {
      alert("Fill all value");
    } else {
      props.addQuote(name, quote);
      history.push("/quotes");
    }
  }

  useEffect(() => {
    console.log();
  }, []);

  return (
    <div className="ui container">
      <div className="ui input center">
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name..."
        />
      </div>
      <br />
      <textarea
        onChange={(e) => {
          setQuote(e.target.value);
        }}
        style={{ width: "100%", height: "200px" }}
      />
      <button className="ui button primary" onClick={submit}>
        Sumbit
      </button>
    </div>
  );
};

const propstostate = (disptach) => {
  return {
    addQuote: (name, quote) => {
      disptach({
        type: "ADD",
        payload: {
          name,
          quote,
        },
      });
    },
  };
};

export default connect(null, propstostate)(Create);
