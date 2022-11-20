import React, {useState, useEffect} from 'react'
import { formatter, formatterUSA } from '../../ultil'
import './style.css'
import { Link } from "react-router-dom";




export const Product = (props) => {

    const [isEnter, setIsEnter] = useState("leave")

    const handleEnter = () => {
        setIsEnter("enter")
    }

    const handleLeave = () => {
        setIsEnter("leave")
    }

    console.log(props)

    return (
        <div className="product-container" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <div className="product-wrapper">
                <img src={props.product.thumbnail} alt="" className="produvt-thumbnail"/>
                <div className="product-detail">
                    <p className="product-detail__line2">{props.product.name}</p>
                    <div className="product-detail__line3">
                        <p className="product-detail__line3-discount">{formatterUSA.format(props.product.price)}</p>
                    </div>
                </div>
                <div className={`product-action ${isEnter}`}>
                    {/* <Link to={`/shop/${props.product.index}`}><i className="fa-solid fa-magnifying-glass"></i></Link> */}
                    <Link to="/order"><i className="fa-solid fa-magnifying-glass"></i></Link>

                    <Link><i className="fa-regular fa-heart"></i></Link>
                    <Link><i className="fa-solid fa-recycle"></i></Link>
                </div>
            </div>
            <div className={`product-btn ${isEnter}`}>
                <Link>
                    <button>ADD TO CART</button>
                </Link>
            </div>

        </div>
    )
}