import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  console.log(props.todos);
  return (
    <ul className="TodoList">
      {props.todos.map((item) => (
        <TodoListItem todos={item} key={item.id} toggleChecked={props.toggleChecked} />
      ))}
    </ul>
  );
};

export default TodoList;
