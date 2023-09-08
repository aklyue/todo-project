import React, { useState } from "react";

import s from "./TaskCreator.module.scss";

function TaskCreator({ refreshTaskData, setTasks, tasks }) {
  const [header, setHeader] = useState("");
  const [note, setNote] = useState("");

  const submit = (e) => {
    e.preventDefault();

    const newTask = {
      id: tasks.length,
      title: header,
      text: note,
      date: new Date().toLocaleDateString(),
      isDone: false,
    };

    setTasks((prev) => [ ...prev, newTask]);
    refreshTaskData();
  };

  return (
    <form className={s.taskCreator}>
      <input
        className={s.header}
        value={header}
        onChange={(e) => {
          setHeader(e.target.value);
        }}
        type="text"
        placeholder="Заголовок"
      />
      <input
        className={s.note}
        value={note}
        onChange={(e) => {
          setNote(e.target.value);
        }}
        type="text"
        placeholder="Ваша заметка"
      />
      <button onClick={submit} type="submit" className={s.button}>
        СОХРАНИТЬ
      </button>
    </form>
  );
}

export default TaskCreator;
