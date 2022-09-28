import React, { useState } from "react";
import TodoList from "./components/TodoList";

const App = () => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([
    {
      id: 1,
      text: "안녕",
      checked: false,
    },
    {
      id: 2,
      text: "안녕2",
      checked: true,
    },
  ]);

  const toggleChecked = () => {
    toDos.checked === false
      ? setToDos({ ...toDos, checked: true })
      : setToDos({ ...toDos, checked: false });
  };

  const onChange = (e) => {
    setToDo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(toDo);
    setToDos((cur) => [
      ...cur,
      {
        id: Math.floor(Math.random() * 1000),
        text: toDo,
        checked: false,
      },
    ]);
    setToDo("");
  };

  return (
    <React.Fragment>
      <h1>오늘 할 일</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="할 일을 입력하세요"
          required
        />
        <button>할 일 추가</button>
      </form>
      <hr />
      <TodoList todos={toDos} toggleChecked={toggleChecked} />
    </React.Fragment>
  );
};

export default App;
