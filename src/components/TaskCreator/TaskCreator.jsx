import React, { useState } from "react";

import s from "./TaskCreator.module.scss";

import { useDispatch } from "react-redux";

import { createTask } from "../../store/tasksSlice";


function TaskCreator() {

  const [header, setHeader] = useState("");
  const [note, setNote] = useState("");

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();

    dispatch(createTask({title: header, text: note}))
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
