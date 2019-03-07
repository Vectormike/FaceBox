import React from 'react'
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <article class="mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-green dark-green mb5">
            <h1 class="fw6 f3 f2-ns lh-title mt0 mb3">
                This is a tagline. For x.
            </h1>
            <h2 class="fw2 f4 lh-copy mt0 mb3">
                This will change things. And we want you to be involved. This text needs to
                be longer for testing sake.
            </h2>
            <p class="fw1 f5 mt0 mb3">
                Sign up for beta access or learn more about x.
            </p>
            <div>                

                <Link 
                    to="/login" 
                    className="f6 br-pill dark-green no-underline ba grow pv2 ph3 dib">
                    Login
                </Link>
            </div>
        </article>

    )
}

export default Home