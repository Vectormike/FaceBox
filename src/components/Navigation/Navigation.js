import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <nav className="dt w-100 border-box pa3 ph5-ns">
                <div className="dtc v-mid w-75 tr">
                    <div className="ph3">
                        <Link 
                            className="f7 dim br3 ph3 pv2 mb2 dib white bg-gray" 
                            to="/">
                            Sign Out
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;