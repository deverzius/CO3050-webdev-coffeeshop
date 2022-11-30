

import React from 'react'
import './style.css'

export const Header = () => {
    return (
        // <div className='header-wrapper sticky'>
        //     <div className='header-container'>
        //         <div className='container row'>
        //             
        //             <div className='col-7 header-menu'>
        //                 <div className='col-2'><a href="/home">Trang chủ</a></div>
        //                 <div className='col-2'><a href="/shop">Thực đơn</a></div>
        //                 <div className='col-2'>Tin tức</div>
        //                 <div className='col-2'>Liên hệ</div>
        //                 <div className='col-2'><a href="/cart">Giỏ hàng</a></div>
        //                 <div className='col-2'>
        //                     <i className="fa-solid fa-user"></i>
        //                 </div>

        //             </div>
        //         </div>
        //     </div>
        // </div>
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
                                    <a className="nav-link" href="/shop">Thực đơn</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Tin tức</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Liên hệ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/cart">Giỏ hàng</a>
                                </li>
                                <li>
                                    <div className='col-2 header-user'>
                                        <i className="fa-solid fa-user"></i>
                                        <span>Username</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}