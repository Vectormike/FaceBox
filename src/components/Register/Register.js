import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <article className="br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <main className="pa4 black-80">
                <form className="measure center">
                    <fieldset className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label 
                            className="db fw6 lh-copy f6" 
                            htmlFor="email-address">Email
                            </label>
                            <input 
                            className="pa2 br3 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6">Password</label>
                            <input className="b br3 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                        </div>
						<div className="mv3">
                            <label className="db fw6 lh-copy f6">Confirm Password</label>
                            <input className="b br3 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <Link to="/app" 
                            className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-blue"  
                            type="submit">
                            Register
                        </Link>
                    </div>
                    <div class="lh-copy mt3">
                        <Link to="/login" className="f6 link dim black db">Login</Link>
                    </div>
                </form>
            </main>
        </article>
    )
}

export default Register;