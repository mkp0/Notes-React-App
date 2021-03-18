let initialState = {
  quotes: [{ id: 0, name: "masum", quote: "Life is good" }],
};

module.exports = (state = initialState, action) => {
  if (action.type === "ADD") {
    console.log(action.payload);
    const data = {
      ...action.payload,
      id: state.quotes.length,
    };
    return { quotes: state.quotes.push(data), ...state };
  }
  if (action.type === "DELETE") {
    return { ...state, quotes: action.payload };
  }
  return state;
};
