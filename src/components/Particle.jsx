
import './Particle.css';
import { GiFireworkRocket } from 'react-icons/gi';
import { FaSnowflake,  } from 'react-icons/fa';
import { useEffect, useState } from 'react';


const getRandomPosition = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomVelocity = () => {
    const random =  Math.random() >= 0.5;;
    return random
}

export const Particle = ({ showSurprise}) => {

    const [position, setPosition] = useState({x:getRandomPosition(10,90), y:getRandomPosition(10,90)})
    
    if ( showSurprise ){
        return (
            <div className={getRandomVelocity() ? 'particle particle--surprise particle__gift--slow':'particle particle--surprise particle__gift--slow'}
            style={{
                right: `${position.x}%`,
                top: `${position.y}%`}}>

                <GiFireworkRocket/>
            </div>
        )
    }
    else{
        return (
            <div className={getRandomVelocity() ? 'particle particle--slow':'particle particle--fast'}
            style={{
                right: `${position.x}%`,
                top: `${position.y}%`}}>
                <FaSnowflake/>
            </div>
        )
    }
    
}
