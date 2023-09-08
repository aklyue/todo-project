import React from "react";

import Task from "../Task";

import s from "./Workspace.module.scss";

function Workspace({ refreshTaskData, setTasks, tasks, handleDelete }) {
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
          tasks={tasks}
          setTasks={setTasks}
          refreshTaskData={refreshTaskData}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default Workspace;
