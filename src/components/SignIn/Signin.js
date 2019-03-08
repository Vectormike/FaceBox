import React from 'react'
import { Link } from "react-router-dom";

const Signin = () => {

    return (
        <article class="br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <main className="pa4 black-80">
                <form className="measure center">
                    <fieldset className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label 
                            className="db fw6 lh-copy f6" 
                            htmlFor="email-address">Email
                            </label>
                            <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <Link to="/app" 
                            className="b ph3 pv2 input-reset ba b--blue bg-transparent grow pointer f6" 
                            type="submit">
                            Login
                        </Link>
                    </div>
                    <div class="lh-copy mt3">
                        <Link to="/register" className="f6 link dim black db">Sign up</Link>
                    </div>
                </form>
            </main>
        </article>
    )
}

export default Signin