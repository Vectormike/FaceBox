import React from 'react'

const Register = () => {
    return (
        <div class="bg-blue h-100">

	<div className="pv4 mid-gray sans-serif">
		<div className="w-90 w-80-m w-50-l center cf cover bg-top bg-center shadow-1 bg-light-gray" style={{
            background-image: url('https://source.unsplash.com/MTJxRri1UiI/800x600')
        }}>

			<div class="w-80 w-70-m w-60-l fr bg-white">
				<header class="pa3 bb b--light-gray relative">
					<h1 class="b ma0 f3">Sign Up</h1>
				</header>
				<form id="register-form" action="" class="ph3 pt3 pb4 f7">
					<div class="mb3">
						<label for="" class="db ttu b lh-copy">Username</label>
						<input name="username" type="text" class="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
					</div>
					<div class="mb3">
						<label for="" class="db ttu b lh-copy">Email</label>
						<input name="email" type="email" class="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
					</div>
					<div class="mb4">
						<label for="" class="db ttu b lh-copy">Password</label>
						<input name="password" type="password" class="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
					</div>
					<div class="mb3 tc f6">
						Do you have an account? <Link to="/login" className="blue ph1">Log In Now!</Link>
					</div>
					<div class="tc">
						<input type="submit" value="Sign Up" class="ttu bn pv3 ph4 f6 bg-blue white b br-pill pointer grow" />
					</div>
				</form>
			</div>
		</div>
		<div class="tc white mt4 f6">
			Based on <a target="_blank" rel="noopener" href="https://dribbble.com/shots/3150554-Sign-Up" class="lightest-blue">this shot</a>.
		</div>
	</div>

</div>
    )
}

export default Register;