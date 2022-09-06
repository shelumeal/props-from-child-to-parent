import React, { useState } from "react";
import Child from "./Child";

//
function Parent() {
  const [word, setWord] = useState("Parent");

  return (
    <div>
      <h1>Parent component word is : {word}</h1>
      <Child changeWord={(word) => setWord(word)}></Child>
    </div>
  );
}

export default Parent;
