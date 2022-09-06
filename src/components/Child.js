import React from "react";

function Child(props) {
  const handleChangeTitle = () => {
    props.changeWord("Child");
  };

  return (
    <div>
      <h1>Child</h1>
      <button onClick={handleChangeTitle}>Click to Change to title</button>
    </div>
  );
}

export default Child;
