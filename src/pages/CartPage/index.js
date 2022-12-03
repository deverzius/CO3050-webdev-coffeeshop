import { useState } from 'react'
import { Breadcrumb } from '../../components/Breadcrumb'
import { formatCurrency } from '../../ultil'
import './style.css'

export const CartPage = () => {
    const breadcrumb = {
        parent: [
            {
                link: "/home",
                name: "Home"
            },
            {
                link: "/shop",
                name: "menu"
            },
        ],
        current: "Cart"
    }
    const [tmp, setTmp] = useState([
        {
            cost: 54_000,
            product: 
                {   
                    thumbnail: "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_24673f2fda464065a0ba0707ca8ef5b1.jpg",
                    name: "SoundBox Pro Portable",
                    price: 18_000,
                    discount: 10,
                    index: 1,
                    type: "tea",
                    brand: "studio design",
                    desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",
                },
            quantity: 1,
            selectedSize:
                {
                    name: 'Trung',
                    extraPrice: 6_000
                },
            selectedTopping: [
                {id: 3, name: 'Foam Cheese', price: 20_000},
                {id: 1, name: 'Đào ngâm', price: 10_000}
            ]
         },
         {
            cost: 54_000,
            product: 
                {   
                    thumbnail: "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_24673f2fda464065a0ba0707ca8ef5b1.jpg",
                    name: "SoundBox Pro Portable",
                    price: 18_000,
                    discount: 10,
                    index: 2,
                    type: "tea",
                    brand: "studio design",
                    desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",
                },
            quantity: 1,
            selectedSize:
                {
                    name: 'Trung',
                    extraPrice: 6_000
                },
            selectedTopping: [
                {id: 3, name: 'Foam Cheese', price: 20_000},
                {id: 1, name: 'Đào ngâm', price: 10_000}
            ]
         }
    ])


    const total = () => {
        let total = 0
        tmp.forEach(i => {
            total += i.cost
        })
        return total
    }

    const handleClick = (id) => {
        setTmp(tmp.filter(i => i.product.index !== id))
    }

    return (
        <div className='cart-container'>
            <Breadcrumb props={breadcrumb} />
            <div className='cart-wrapper row'>
                <div className='cart-product col-12'>
                    <div className='cart-product__item row'>
                        <div className='product__thumbnail col-4 col-md-2'>
                            <strong>Product</strong>
                       
                        </div>
                        <div className='product__name col-5'>
                            <strong>Detail</strong>
                        </div>
                        <div className='product__quantity col-4 col-md-2'>
                            <strong>Quantity</strong>
                        </div>
                        <div className='product__price col-4 col-md-2'>{
                            <strong>Cost</strong>
                        }</div>
                    </div>
                    {   
                        tmp.length < 1 ? <p>Empty!</p> :
                        tmp.map((item, index) => (
                            <div className='cart-product__item row' key={index}>
                                <div className='product__thumbnail col-4 col-md-2'>
                                    <img src={item.product.thumbnail}/>
                                </div>
                                <div className='product__name col-5'>
                                    <strong>Name: {item.product.name}</strong>
                                    <span>Size: {item.selectedSize.name}</span>
                                    <span>Topping: {
                                        item.selectedTopping.map((i, index) => (
                                            <span key={index}>{i.name}, </span>
                                        ))
                                    }</span>
                                </div>
                                <div className='product__quantity col-3 col-md-2'>
                                    <span>{item.quantity}</span>
                                </div>
                                <div className='product__price col-3 col-md-2'>{
                                    <span>{formatCurrency(item.cost)}</span>
                                }
                                </div>
                                
                                <i className="fa-solid fa-xmark col-1" style={{color: "red"}} onClick={() => handleClick(item.product.index)}></i>
                            </div>
                        ))
                    }
                <div className={`checkout ${tmp.length < 1 && "hidden"}`}>
                    <span>Total: {formatCurrency(total())}</span>
                    <button className='btn btn-primary'>Check out</button>
                </div>

                </div>
            </div>
        </div>
    )
}