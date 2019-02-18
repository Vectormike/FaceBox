import React from 'react';
import Tilt from 'react-tilt'

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="j">
                    <Tilt className="Tilt" data-tilt data-tilt-glare="true" data-tilt-scale="1.1" options={{ transition: true, perspective: 1000, max : 35 }} style={{ height: 50, width: 50 }} >
                        <div className="Tilt-inner"><i class="fas fa-grin-beam"></i></div>
                    </Tilt>         
                </a>
            </nav>
            
        </div>
    );
}

export default Navigation;