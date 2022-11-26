import { useState } from 'react'
import { Footer } from '../../components'
import { Login } from '../../components/Login'
import { LoginAdmin } from '../../components/Login/LoginAdmin'
import { SignUp } from '../../components/SignUp'
import './style.css'

export const LoginPage = () => {
    const [choose, setChoose] = useState(0)
    const handleClick = () => {
        choose === 0 ? setChoose(1) : setChoose(0);
    }
    return (
        <div className='login-container'> 
            <div className='login-wraper'>
                <span className='login-header'>Wellcome to BK Coffee</span>
                {
                    choose === 0 ? 
                    <div className='login-choose'>
                        <span className='login-swap'>Doesn't have an account yet? <span onClick={handleClick}>Sign up as Customer</span></span>
                        <Login/>
                    </div> : 
                    <div className='login-choose'>
                        <span className='login-swap'>Already have an account? <span onClick={handleClick}>Login</span></span>
                        <SignUp/>
                    </div>

                }
            </div>
        </div>
    )
}