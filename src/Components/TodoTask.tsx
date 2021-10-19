import React from "react";
import { ITask } from "../Interface";
//rstc

interface Props {
  task: ITask;
  handDelete(task: string): void

}

const TodoTask = ({ task, handDelete }: Props) => {

  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>

      <button onClick={()=>handDelete(task.taskName)}>X</button>
    </div>
  );
};

export default TodoTask;
