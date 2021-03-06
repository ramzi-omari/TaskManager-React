import React from "react";
import Task from "./Task";

const TasksList = (props) => {
  return (
    <div>
      {props.tasks.map((task) => (
        <Task key={task.id} task={task}></Task>
      ))}
    </div>
  );
};

export default TasksList;
