import { useEffect, useState } from "react"
import { useTimer } from "../hooks/useTimer"

import './Clock.css';

export const Clock = ( { onYearFinished } ) => {
    const {days, hours, minutes, seconds, finished} = useTimer(new Date(Date.UTC(new Date().getFullYear(), 12, 1, 5, 0, 0)));

    if ( finished ){
        onYearFinished();
    }
    return (
        <div className="container__clock">
            <div className="clock__item clock--days">
                {days}
            </div>
            <div className="clock__item clock--hours">
                {hours}
            </div>
            <div className="clock__item clock--minutes">
                {minutes}
            </div>
            <div className="clock__item clock--seconds">
                {seconds}
            </div>
        </div>
    )
}
