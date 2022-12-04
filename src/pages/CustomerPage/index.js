import { useState } from 'react'
import { Breadcrumb } from '../../components/Breadcrumb'
import { useAppContext } from '../../context'
import './style.css'

export const CustomerPage = () => {
    const user = {
        username: localStorage.getItem('username'),
        name: localStorage.getItem('name'),
        address: localStorage.getItem('address'),
        point: localStorage.getItem('point'),
        password: "123456",
        role: localStorage.getItem('role'),
        avatar: "https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-cute-2-560x560.jpg"
    }

    const [current, setCurrent] = useState(user)

    const [address, setAddress] = useState()
    const [name, setName] = useState()
    const [img, setImg] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [type, setType] = useState("password")

    const breadcrumb = {
        parent: [
            {
                name: "Trang chủ",
                link: "/home"
            }
        ],
        current: "Người dùng"
    }

    const handleAddress = (e) => {
        if (e !== undefined)
        {
            setCurrent({ ...current, "address": e })
        }
    }
    const handleName = (e) => {
        console.log(e)
        if (e !== undefined)
        {
            setCurrent({ ...current, "name": e })
        }
    }

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0])
        {
            setCurrent({ ...current, "avatar": (URL.createObjectURL(event.target.files[0])) })
        }
    }

    const handleUsername = (e) => {
        if (e !== undefined)
        {
            setCurrent({ ...current, "username": e })
        }
    }

    const handlePass = (e) => {
        if (e !== undefined)
        {
            setCurrent({ ...current, "password": e })
        }
    }

    const handleShow = () => {
        if (type === "password")
        {
            setType("text")
        }
        else setType("password")

    }

    return (
        <div className='user-container'>
            <Breadcrumb props={breadcrumb} />
            <div className='user-wrapper row'>
                <div className='user-avatar col-12 col-lg-4'>
                    <img src={current.avatar} alt='avt' />
                    <i className="fa-solid fa-pen-to-square" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Thay đổi ảnh đại diện</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <strong>Nhập tên mới</strong>
                                    <input type="file" onChange={e => setImg(e)} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                    <button type="button" className="btn productpade-btn__active" data-bs-dismiss="modal" onClick={e => onImageChange(img)}>Xác nhận</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p style={{ paddingTop: "8px" }}>Điểm tích luỹ: {current.point}</p>
                </div>
                <div className='user-infor col-12 col-lg-6'>
                    <h5>Thông tin cá nhân</h5>
                    <div className='user-name'>
                        <strong>Tên người dùng</strong>
                        <i className="fa-solid fa-pen-to-square" data-bs-toggle="modal" data-bs-target="#exampleModal1"></i>
                        <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Thay đổi tên</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <strong>Nhập tên mới</strong>
                                        <input type="text" placeholder="tên" onChange={e => setName(e.target.value)} />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                        <button type="button" className="btn productpade-btn__active" data-bs-dismiss="modal" onClick={() => handleName(name)}>Xác nhận</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span>{current.name}</span>
                    <div className='user-name'>
                        <strong>Địa chỉ</strong>
                        <i className="fa-solid fa-pen-to-square" data-bs-toggle="modal" data-bs-target="#exampleModal2"></i>
                        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Thay đổi địa chỉ</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <strong>Nhập địa chỉ</strong>
                                        <input type="text" placeholder="địa chỉ" onChange={e => setAddress(e.target.value)} />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                        <button type="button" className="btn productpade-btn__active" data-bs-dismiss="modal" onClick={() => handleAddress(address)}>Xác nhận</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span>{current.address}</span>

                    <div className='user-name'>
                        <strong>Tên đăng nhập</strong>
                        <i className="fa-solid fa-pen-to-square" data-bs-toggle="modal" data-bs-target="#exampleModal3"></i>
                        <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Thay đổi Username</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <strong>Nhập tên đăng nhập mới</strong>
                                        <input type="text" placeholder="tên đăng nhập" onChange={e => setUsername(e.target.value)} />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                        <button type="button" className="btn productpade-btn__active" data-bs-dismiss="modal" onClick={() => handleUsername(username)}>Xác nhận</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span>{current.username}</span>

                    {/* <div className='user-name'>
                        <strong>Mật khẩu</strong>
                        <i className="fa-solid fa-pen-to-square" data-bs-toggle="modal" data-bs-target="#exampleModal4"></i>
                        <div className="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Thay đổi địa chỉ</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <strong>Nhập địa chỉ</strong>
                                        <input type="text" placeholder="address" onChange={e => setPassword(e.target.value)} />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                        <button type="button" className="btn productpade-btn__active" data-bs-dismiss="modal" onClick={() => handlePass(password)}>Xác nhận</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type={type} value={current.password} className="user-pass" /> */}
                    {/* <div style={{ display: "flex", alignItem: "center" }}>
                        <input type="checkbox" onClick={handleShow} />
                        <span style={{ paddingLeft: "4px" }}>Show Password</span>
                    </div> */}
                </div>
            </div>
        </div>
    )
}