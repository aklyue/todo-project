import React from "react";

import Task from "../Task";

import { useSelector } from 'react-redux';

import s from "./Workspace.module.scss";

function Workspace({ refreshTaskData, setTasks, handleDelete }) {
  const { tasks } = useSelector((state) => state.tasks)
  return (
    <div className={s.workspace}>
      {tasks.toReversed().map((item) => (
        <Task
          key={item.id}
          id={item.id}
          title={item.title}
          text={item.text}
          date={item.date}
          isDone={item.isDone}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default Workspace;
