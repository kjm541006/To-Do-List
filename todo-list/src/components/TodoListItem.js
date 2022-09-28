import React from "react";
// import IsChecked from "./IsChecked";

const TodoListItem = (props) => {
  console.log(props.todos);
  const { text, checked } = props.todos;
  console.log(checked);
  const handleChecked = () => {
    props.toggleChecked();
  };
  return (
    <li>
      <div className={checked ? "checked" : undefined}>
        <input type="checkbox" checked={checked} onChange={handleChecked} />
        <div>{text}</div>
      </div>
    </li>
  );
};

export default TodoListItem;
