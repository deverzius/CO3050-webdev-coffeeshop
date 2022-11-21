import React from "react"
import { Carousel } from "../../components/Carousel"
import { Product } from "../../components/Product"
import { products } from "../../data"
import './style.css'

export const HomePage = () => {

    console.log(products)

    return (
        <div className="home-container">
            <Carousel/>
            <div className="container row holic">
                <span>Tea Holic</span>
                {
                    [...products].filter(i => i.index < 5).map((item, index) => (
                        <div key={index} className="col-3 center">
                            <Product product = {item}/>
                        </div>
                    ))
                }
            </div>
            <div className="container row holic">
                <span>Coffee Holic</span>
                {
                    [...products].filter(i => i.index < 5).map((item, index) => (

                        <div key={index} className="col-3 center">
                            <Product product = {item}/>
                        </div>
                    ))
                }
            </div>  
        </div>
    )
}