import './style.css'

export const SignUp = () => {
    return (
        <div className='signup'>
            <strong>Username</strong>
            <input type="text" name="username" id="username" placeholder="Type your username" />
            <strong>Email</strong>
            <input type="text" name="username" id="username" placeholder="Type your email" />
            <strong>Password</strong>
            <input type="text" name="username" id="username" placeholder="Type your password" />
            <input type="text" name="username" id="username" placeholder="Re-type your password" />
            <button className='signup-btn'>Sign up</button>
        </div>
    )
}