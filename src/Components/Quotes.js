import Quote from "./Quote";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

const Quotes = (props) => {
  const [data, setData] = useState(props.quotes);

  function deleteOnClick(idx) {
    console.log(idx);
    let newData = data.filter((item, index) => index !== idx);
    newData.forEach((item, index) => {
      item.id = index;
    });
    setData(newData);
    props.changeData(newData);
  }

  useEffect(() => {}, [data]);

  return (
    <>
      {data.map((val, idx) => {
        return (
          <Quote
            key={val.id}
            id={idx}
            deleteq={deleteOnClick}
            name={val.name}
            quote={val.quote}
          ></Quote>
        );
      })}
    </>
  );
};

const statetoprops = (state) => {
  return state;
};

const propstostate = (dispatch) => {
  return {
    changeData: (data) => {
      console.log(data);
      dispatch({
        type: "DELETE",
        payload: data,
      });
    },
  };
};

export default connect(statetoprops, propstostate)(Quotes);
