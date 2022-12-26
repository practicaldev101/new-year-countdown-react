import { useEffect, useState } from "react";
import Tick from '../assets/tick-sound.mp3'
import Fireworks from '../assets/fireworks.mp3'

export const useTimer = ( time ) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [finished, setFinished] = useState(false);


    const playFireworks = ()=>{
        new Audio(Fireworks).play();
    }
    const playTick = ()=>{
        new Audio(Tick).play();
    }
    const verifyEnd = () =>{
        if (seconds == 1){
            playFireworks()
            setFinished(true);
        }
    }

    const updateTime = () =>{
        const newHours = time;
        const remaining = newHours.getTime() - Date.now() 
        const remainingDays = Math.floor(remaining  / (1000 * 60 * 60 * 24));
        const remainingHours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const remainingMinutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const remainingSeconds = Math.floor((remaining  % (1000 * 60)) / 1000);
        
        setDays(remainingDays)
        setHours(remainingHours);
        setMinutes(remainingMinutes)
        setSeconds(remainingSeconds);

        verifyEnd();
    }

    useEffect(() => {
        playTick();
        const interval = setInterval(updateTime, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [seconds])

    return {
        days,
        hours,
        minutes,
        seconds,
        finished
    }
}
