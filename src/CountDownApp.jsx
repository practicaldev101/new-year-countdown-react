import { useState } from "react"
import { Clock, CreateParticles, Credits } from "./components"

import logo from './logo.png'

export const CountDownApp = () => {
    const [showSurprise, setShowSurprise] = useState(false)

    const onYearFinished = ()=>{
        setShowSurprise(true)
    }
    return (  
        <div className="app__box">
            <div>
                <h1 className="app__title" >
                    <span className="title--red">New </span>
                    <span className="title--green">Year </span> 
                    <span>Count</span>
                    <span className="tittle--orange">down</span>
                </h1>
            </div>
            <div>
                <img className="app__logo" src={logo} alt="" />
            </div>
            <CreateParticles limit={15} showSurprise={showSurprise}/>
            <Clock onYearFinished={onYearFinished}/>
            <Credits/>
        </div>
    )
}
