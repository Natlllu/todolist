import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import TodoTask from "./Components/TodoTask";
import { ITask } from "./Interface";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadline: deadline,
    };
    setTodoList([...todoList, newTask]);
  };

  const handDelete = (taskNameToDelte: string): void => {
    setTodoList(
      todoList.filter((t) => {
        return t.taskName != taskNameToDelte;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            onChange={handleChange}
            name="task"
            value={task}
          ></input>
          <input
            type="number"
            placeholder="Deasline (in Days)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          ></input>
        </div>
        <button onClick={addTask}>add task</button>
      </div>

      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} handDelete={handDelete} />;
        })}
      </div>
    </div>
  );
};

export default App;
