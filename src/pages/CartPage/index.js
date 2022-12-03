import { useEffect, useState } from 'react'
import { formatCurrency } from '../../ultil'
import { getDrinksByOrderId, removeDrinkFromOrder } from '../../api/order'
import './style.css'
import { getByDisplayValue } from '@testing-library/react'

export const CartPage = () => {
    const [selectedDrinks, setSelectedDrinks] = useState([]);
    const sizeList = {
        s: 'Vừa',
        m: 'Trung',
        l: 'Lớn'
    }

    useEffect(() => {
        getDrinks();
    }, [])

    const getDrinks = async () => {
        Promise.resolve(getDrinksByOrderId()).then(data => {
            data.map(item => item.cost = parseInt(item.drink_count) * parseInt(item.price));
            setSelectedDrinks(data);
        });
    }

    // const [tmp, setTmp] = useState([
    //     {
    //         cost: 54_000,
    //         product:
    //         {
    //             image: "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_24673f2fda464065a0ba0707ca8ef5b1.jpg",
    //             name: "SoundBox Pro Portable",
    //             price: 18_000,
    //             discount: 10,
    //             index: 1,
    //             type: "tea",
    //             brand: "studio design",
    //             desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",
    //         },
    //         quantity: 1,
    //         selectedSize:
    //         {
    //             name: 'Trung',
    //             extraPrice: 6_000
    //         },
    //         selectedTopping: [
    //             { id: 3, name: 'Foam Cheese', price: 20_000 },
    //             { id: 1, name: 'Đào ngâm', price: 10_000 }
    //         ]
    //     },
    //     {
    //         cost: 54_000,
    //         product:
    //         {
    //             thumbnail: "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_24673f2fda464065a0ba0707ca8ef5b1.jpg",
    //             name: "SoundBox Pro Portable",
    //             price: 18_000,
    //             discount: 10,
    //             index: 2,
    //             type: "tea",
    //             brand: "studio design",
    //             desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",
    //         },
    //         quantity: 1,
    //         selectedSize:
    //         {
    //             name: 'Trung',
    //             extraPrice: 6_000
    //         },
    //         selectedTopping: [
    //             { id: 3, name: 'Foam Cheese', price: 20_000 },
    //             { id: 1, name: 'Đào ngâm', price: 10_000 }
    //         ]
    //     }
    // ])

    const handlePayClick = () => {

    }


    const total = () => {
        let total = 0
        selectedDrinks.forEach(i => {
            total += i.cost
        })
        return total
    }

    const handleRemoveClick = (id) => {
        const answer = window.confirm("Bạn muốn xoá đồ uống này?");

        if (answer)
        {
            removeDrinkFromOrder(id);
            getDrinks();
        }
    }

    return (
        <div className='cart-container'>
            {/* <span>cart page</span> */}
            <div className='cart-wrapper row'>
                <div className='cart-product col-12'>
                    <div className='cart-product__item row'>
                        <div className='product__thumbnail col-4 col-md-2'>
                            <strong>Sản phẩm</strong>
                        </div>
                        <div className='product__name col-5'>
                            <strong>Chi tiết</strong>
                        </div>
                        <div className='product__quantity col-4 col-md-2'>
                            <strong>Số lượng</strong>
                        </div>
                        <div className='product__price col-4 col-md-2'>{
                            <strong>Giá</strong>
                        }</div>
                    </div>
                    {
                        selectedDrinks.length < 1 ? <p>Empty!</p> :
                            selectedDrinks.map((item, index) => (
                                <div className='cart-product__item row' key={index}>
                                    <div className='product__thumbnail col-4 col-md-2'>
                                        <img src={item.image} alt='product-img' />
                                    </div>
                                    <div className='product__name col-5'>
                                        <strong>Tên: {item.name}</strong>
                                        <span>Size: {sizeList[item.size]}</span>
                                        <span>Topping: {item.topping}
                                            {/* {item.selectedTopping.map((i, index) => (
                                                <span key={index}>{i.name}, </span>
                                            ))} */}
                                        </span>
                                    </div>
                                    <div className='product__quantity col-3 col-md-2'>
                                        <span>{item.drink_count}</span>
                                    </div>
                                    <div className='product__price col-3 col-md-2'>{
                                        <span>{formatCurrency(item.cost)}</span>
                                    }
                                    </div>

                                    <i className="fa-solid fa-xmark col-1 product__remove_drink"
                                        onClick={() => handleRemoveClick(item.drink_id)}></i>
                                </div>
                            ))
                    }
                    <div className={`checkout ${selectedDrinks.length < 1 && "hidden"}`}>
                        <span>Tổng cộng: {formatCurrency(total())}</span>
                        <button className='btn btn-primary' onClick={handlePayClick}>Thanh toán</button>
                    </div>

                </div>
            </div>
        </div>
    )
}