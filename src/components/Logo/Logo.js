import React from 'react'
import Tilt from 'react-tilt'
import face from './img/hockey-mask.png'

const Logo = () => {
    return (
        <div className="pa4">
            <Tilt className="Tilt pa2 br3 shadow-2" options={{ max : 45, easing: "cubic-bezier(.03,.98,.52,.99)" }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner">
                    <img alt="face" src={face}/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;