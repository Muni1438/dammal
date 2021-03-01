import React, { useState, useRef } from "react";
import ClassTest from "../ClassTest";
import data from "../dataStorage.json";
function Vijay() {
  const [fetching, setfetching] = useState(0);
  const [Focus, setFocus] = useState("");
  let AllAbout = useRef();
  const ForInput = useRef();
  if (fetching < data.length) {
    AllAbout = new Array(1).fill(data[fetching]);
  }
  const ClickToFocus = () => {
    ForInput.current.focus();
  };
  return ( 
    <div>
      <button onClick={() => setfetching(fetching + 1)}>Fetch A Movie</button>
      {console.log(AllAbout)}
      {AllAbout.length ? (
        AllAbout.map((mine) => (
          <div key={mine.id}>
            <h3>Hero: {mine.hero}</h3>
            <h1>Movie: {mine.movie}</h1>
          </div>
        ))
      ) : ( 
        <h1>No Movies Left To Fetch</h1>
      )}
      <input
        type="text"
        value={Focus}
        ref={ForInput}
        onChange={(e) => setFocus(e.target.value)}
      />
      <button onClick={ClickToFocus}>Focus</button>
      <ClassTest/>
    </div>
  );
}

export default Vijay;
