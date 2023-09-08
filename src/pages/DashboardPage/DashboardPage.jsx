import React from "react";

import s from './DashboardPage.module.scss'
import Header from "../../components/Header";

function Dashboard({ countIsDone, countInProcess}) {

    return (
        <div>
            <Header countIsDone={countIsDone} countInProcess={countInProcess} />
            <div className={s.dashboard}>
                <h1 className={s.h1} style={{color: "#00c41e"}}>{countIsDone}</h1> 
                <h1 className={s.h1} style={{color: "#c40000"}}>{countInProcess}</h1>
            </div>
        </div>
    )
}

export default Dashboard;