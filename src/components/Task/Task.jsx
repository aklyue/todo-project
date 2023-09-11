import React from "react";

import s from "./Task.module.scss";

import {useSelector, useDispatch} from 'react-redux';

import {completeTask} from "../../store/tasksSlice"

function Task({ id, title, text, date, handleDelete, isDone }) {
  const { tasks } = useSelector((state) => state.tasks)
  const dispatch = useDispatch();
  console.log(tasks)
  const checkIsDone = (e) => {
    e.preventDefault();
    dispatch(completeTask(id))
  };

  return (
    <>
      {!isDone ? (
        <div id={id} className={s.task}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.text}>{text}</p>
          <h5 className={s.date}>{date}</h5>
          <div>
            <button onClick={checkIsDone} className={s.button}>
              ВЫПОЛНИТЬ
            </button>
            <button className={s.btnDelete} onClick={() => handleDelete(id)}>УДАЛИТЬ</button>
          </div>
        </div>
      ) : (
        <div id={id} className={s.taskIsDone}>
          <h3 className={s.titleIsDone}>{title}</h3>
          <p className={s.textIsDone}>{text}</p>
          <h5 className={s.dateIsDone}>{date}</h5>
          <div>
            <button onClick={checkIsDone} className={s.buttonIsDone}>
              ВЫПОЛНЕНО
            </button>
            <button className={s.btnDelete} onClick={() => handleDelete(id)}>УДАЛИТЬ</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Task;
