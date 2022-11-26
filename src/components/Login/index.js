import { useState } from "react"
import { LoginAdmin } from "./LoginAdmin"
import { LoginCustomer } from "./LoginCustomer"
import './style.css'

export const Login = () => {
    const [choose, setChoose] = useState(0)
    return (
        <div className="login">
            <div className={`login-btn ${choose !== 0 && 'hidden'}`}>
                <button onClick={() => setChoose(1)} className="login-btn__btn">Login as Costomer</button>
                <button onClick={() => setChoose(2)} className="login-btn__btn">Login as Admin</button>
            </div>
            <div className="login-choose">
                {
                    choose === 1 ? <LoginCustomer/> :
                    choose === 2 && <LoginAdmin/>
                }
            </div>
            <span onClick={() => setChoose(0)} className={`undeline ${choose === 0 && 'hidden'}`}>Back to login</span>
            

        </div>
    )
}