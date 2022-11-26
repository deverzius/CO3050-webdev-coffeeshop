export const LoginCustomer = () => {
    return (
        <div className="logincustomer"> 
            <div className="logincustomer-form">
                <strong>Username</strong>
                <input type="text" name="username" id="username" placeholder="Type your username" />
                <strong>Password</strong>
                <input type="password" name="password" id="password" placeholder="Type your password" />
                <button type="submit" className="login-btn__btn">
                    <a href="/home">Login</a>
                </button>
            </div>
        </div>
    )
}