import React from "react";

import s from './Header.module.scss'
import { Link } from "react-router-dom";

function Header({ countIsDone, countInProcess }) {
    return (
        <div className={s.container}>
            <Link className={s.h2} to="/">Keeper</Link>
            <Link className={s.h2} to="/dashboard">Dashboard</Link>
            <h2 className={s.h2}>Выполнено: {countIsDone}, В процессе: {countInProcess}</h2>
        </div>
    )
}

export default Header;