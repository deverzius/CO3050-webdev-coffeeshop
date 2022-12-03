import React, { useState } from "react";
import { Breadcrumb } from "../../components/Breadcrumb";
import './style.css'
import { useParams } from "react-router-dom";
import { getBlogById } from "../../api/product";
import { useEffect } from "react";
import { Blog } from "../../data";
import { BlogContainer } from "../../components/Blog";

export const BlogPage = () => {

    const [data, setData] = useState()  

    const match = useParams({id: Number})

    useEffect(() => {
        const response = getBlogById(match.id);
        if (response.code === 404) {
          throw new Error(response.message);
        }
        setData(response.data);
    
    }, [match.id]);

    const breadcrumb = {
        parent: [
            {
                name: "Home",
                link: "/home"
            },
            {
                name: "Blog",
                link: "/blog"
            },
        ]
    }

    console.log(data)

    return (
        <div className="blogpage-container">
            <div className="blogpage-header" 
                style={{backgroundImage: `url(${data?.image})`}}
            >

            </div>
            <div className="blogpage-wrapper">
                <Breadcrumb props={breadcrumb}/>
                <h1>{data?.title}</h1>
                <span>{data?.content}</span>
                <img src={data?.image}/>
            </div>
            
            <div className="container holic row blog">
                <span>Noi dung lien quan</span>
                {
                    Blog.slice(0, 3).map((item, index) => (
                        <div key={index} className="col-sm-12 col-md-6 col-lg-4 center">
                            <BlogContainer blog = {item}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}