import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        //2
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
