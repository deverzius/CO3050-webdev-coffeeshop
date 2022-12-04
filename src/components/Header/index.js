

import React from 'react'
import { useAppContext } from '../../context'
import './style.css'

export const Header = () => {

    const user = useAppContext()

    return (
        <div className='header-wrapper sticky'>
            <div className='header-container'>
                <nav className="navbar navbar-expand-lg bg-light ">
                    <div className="container-fluid row container">
                        <div className='col-sm-12 col-lg-2 header-logo'>
                            <a className='navbar-brand' href="/home">BK Coffee</a>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse  col-10" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/home">Trang chủ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/shop">Menu</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/blog">Tin tức</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="#">Liên hệ</a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link" href="/cart">Giỏ hàng</a>
                                </li>
                                <li>
                                    <a className='col-2 header-user' href='/user'>
                                        <i className="fa-solid fa-user"></i>
                                        <span>{localStorage.getItem('name') ?? 'Chưa đăng nhập'}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}