import './style.css'
import React, { useEffect, useState } from 'react'
import img1 from '../../assets/imgs/img1.webp'
import img2 from '../../assets/imgs/img2.png'
import banner from '../../assets/imgs/banner.png'
import banner2 from '../../assets/imgs/banner2.png'

export const Carousel = () => {

    const [current, setCurrent] = useState(1)

    const handleBtn = () => {
        if(current < 2) {
            setCurrent(2)
        }
        else {
            setCurrent(1)
        }
    }
    useEffect(() => {
        const auto = setTimeout(() => {
            if(current < 2) {
                setCurrent(2)
            }
            else {
                setCurrent(1)
            }
        }, 10000)
        return () => clearInterval(auto);
    }, [current])
    return (
        <div className='home-wrapper'>
            <div className='carousel'>
                <button className='carousel-btn next' onClick={handleBtn}>
                    <i className="fa-solid fa-arrow-right"></i> 
                </button>
                <button className='carousel-btn prev' onClick={handleBtn}>
                    <i className="fa-solid fa-arrow-left"></i> 
                </button>
                <ul>
                    <li className={`slide ${current === 1 && 'active'}`}>
                        <img src={banner}/>
                        <img src={img1} className="slide-content"/>
                        <div className="home-banner-1">
                            <div className='home-banner__content'>
                                <h1>Coffee Holic</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                </p>
                                <button className='home-banner__btn'>
                                    Khám phá ngay
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className={`slide ${current === 2 && 'active'}`}>
                        <img src={banner2}/>
                        <img src={img2} className="slide-content banner2 slide-banner"/>
                        <div className="home-banner-1">
                            <div className='home-banner__content'>
                                <h1>Tea Holic</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                </p>
                                <button className='home-banner__btn' style={{backgroundColor: "#ff914d"}}>
                                    Khám phá ngay
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}