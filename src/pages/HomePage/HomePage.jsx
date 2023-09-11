import React, { useEffect } from "react";

import Header from "../../components/Header";

import TaskCreator from "../../components/TaskCreator";
import Workspace from "../../components/Workspace";

import s from './HomePage.module.scss'

function HomePage({ countIsDone, countInProcess, refreshTaskData, setTasks, handleDelete }) {

    return (
        <div className={s.homePage}>
            <Header countIsDone={countIsDone} countInProcess={countInProcess} />
            <TaskCreator />
            <Workspace refreshTaskData={refreshTaskData} setTasks={setTasks} handleDelete={handleDelete}/>
        </div>
    )
}

export default HomePage;