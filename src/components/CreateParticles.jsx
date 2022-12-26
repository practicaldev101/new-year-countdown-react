import React, { useEffect, useState } from 'react'
import { Particle } from './index'

export const CreateParticles = ( { limit, showSurprise} ) => {
    const [particles, setParticles] = useState([]);
    
    const fillParticles = () => {
        const newArray = new Array(limit).fill(Particle);
        setParticles(newArray);
    }

    useEffect(() => {
        fillParticles()
    }, [])

    return (
        <div>
            {
                particles.map((NewParticle)=>(
                    <NewParticle 
                        key={Date.now() + Math.random()}
                        showSurprise={showSurprise} 
                        />
                    )
                )
            }
        </div>
    )
}
