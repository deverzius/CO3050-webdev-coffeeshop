// import { Link } from 'react-router-dom';
// import './index.css'

// function Header() {
// 	return (
// 		<div id='header'>
// 			<h1 className='brand-name'>
// 				BK Coffee
// 			</h1>
// 			<nav className='navbar d-flex align-items-center justify-content-between'>
// 				<Link to='/home' className='navbar-item '>Trang chủ</Link>
// 				<Link to='/menu' className='navbar-item '>Thực đơn</Link>
// 				<Link to='/news' className='navbar-item '>Tin tức</Link>
// 				<Link to='/contact' className='navbar-item '>Liên hệ</Link>
// 				<Link className='user'></Link>
// 			</nav>
// 		</div>
// 	)
// }

// export default Header;

import React from 'react'
import './style.css'

export const Header = () => {
    return (
        <div className='header-wrapper sticky'>
            <div className='header-container'>
                <div className='container row'>
                    <div className='col-5 header-logo'>
                        <a className='header-logo-txt' href="/home">BK Coffee</a>
                    </div>
                    <div className='col-7 header-menu'>
                        <div className='col-2'><a href="/home">Trang chủ</a></div>
                        <div className='col-2'><a href="/shop">Thực đơn</a></div>
                        <div className='col-2'>Tin tức</div>
                        <div className='col-2'>Liên hệ</div>
                        <div className='col-2'><a href="/cart">Giỏ hàng</a></div>
                        <div className='col-2'>
                            <i className="fa-solid fa-user"></i>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}