import { Link } from 'react-router-dom';
import './index.css'

function Header() {
	return (
		<div id='header'>
			<h1 className='brand-name'>
				BK Coffee
			</h1>
			<nav className='navbar d-flex align-items-center justify-content-between'>
				<Link to='/home' className='navbar-item '>Trang chủ</Link>
				<Link to='/menu' className='navbar-item '>Thực đơn</Link>
				<Link to='/news' className='navbar-item '>Tin tức</Link>
				<Link to='/contact' className='navbar-item '>Liên hệ</Link>
				<Link className='user'></Link>
			</nav>
		</div>
	)
}

export default Header;