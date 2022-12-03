import './style.css'
import React from 'react'
import { Breadcrumb } from '../../components/Breadcrumb'
import { Blog as blog} from '../../data'
import { BlogContainerGrid } from '../../components/Blog'
import { useEffect } from 'react'

export const BlogListPage = () => {
    const breadcrumb = {
        parent: [
            {
                name: "Home",
                link: "/home"
            }
        ],
        current: "Blog"

    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    },[])

    console.log([...blog].filter(i => i.article_id === 0))
    return (
        <div className='bloglist-container container'>
            <Breadcrumb props={breadcrumb}/>
            <div className='bloglist-tea'>
                <h4>Tea Holic</h4>
                <div className='row'>
                    <div className='col-12 col-lg-6 blg-img' style={{backgroundImage: `url(https://file.hstatic.net/1000075078/file/teaholic_3f320cac87814da0912f45ccfebd4e0e.jpg)`}}>
                    </div>
                    <div className='col-12 col-lg-6 row'>
                        {
                            [...blog].filter(i => i.ad_id === 0).map((item, index) => (
                                <div key={index}>
                                    <BlogContainerGrid blog={item}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='bloglist-tea'>
                <h4>Coffee Holic</h4>
                <div className='row'>

                    <div className='col-12 col-lg-6 row'>
                        {
                            [...blog].filter(i => i.ad_id === 1).map((item, index) => (
                                <div key={index}>
                                    <BlogContainerGrid blog={item}/>
                                </div>
                            ))
                        }
                    </div>
                    <div className='col-12 col-lg-6 blg-img' style={{backgroundImage: `url(https://file.hstatic.net/1000075078/file/blog_94b05e56224646bc86c6e72c73ac4258.jpg`}}>
                    </div>
                </div>
            </div>
        </div>
    )
}