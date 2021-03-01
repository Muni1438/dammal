import React, { useState, useReducer } from "react";
import "./Muni.css"
function Muni() {
  const Actions = {
    ADD_TODO: "ADD_TODO",
    DELETE_TODO: "DELETE_TODO",
  };

  const [Text, setText] = useState("");
  const addingAll = (Text) => {
    return {
      id: Math.random(),
      Text: Text,
    };
  };
  const initialState = [];
  const reducer = (state, action) => {
    switch (action.type) {
      case Actions.ADD_TODO:
        return [...state, addingAll(action.payload)];
      case Actions.DELETE_TODO:
        return state.filter((last) => last.id !== action.payload.id);
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const addingData = () => {
    return {
      type: Actions.ADD_TODO,
      payload: Text,
    };
  };
  const SubmitData = (e) => {
    e.preventDefault();
    dispatch(addingData());
  };
  const deletingData = (Id) => {
    return {
      type: Actions.DELETE_TODO,
      payload: { id: Id },
    };
  };
  return (
    <div>
      <form onSubmit={SubmitData}>
      <h1 className="h1Tag">ToDo App By Muni Kumar</h1>
        <input
          type="text"
          value={Text}
          onChange={(e) => setText(e.target.value)}
          className="inputTag"
          placeholder="/........"
          data-testid="inputTag"
        />
      </form>
      {state ? (
        state.map((data) => (
          <h2 key={data.id} onClick={() => dispatch(deletingData(data.id))} className="h2Tag">
            {data.Text}
          </h2>
        ))
      ) : (
        <h1>Nothing to delete</h1>
      )}
    </div>
  );
}

export default Muni;
