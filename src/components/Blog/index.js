import './style.css'

export const BlogContainer = (props) => {

    return (
        <a href={`/blog/${props.blog.article_id}`} className="link">
            <div className='blog-wrapper'>
                <div className='blog-wrapper__content'>
                    <div className='blog-background' style={{backgroundImage: `url(${props.blog.image})`}}>
                    </div>
                    <div className='blog-date'>
                        {props.blog.date.format("DD/MM/YYYY")}
                    </div>
                    <h5 className='blog-title'>{props.blog.title}</h5>
                    <span className='blog-content'>
                        {props.blog.content}
                    </span>
                </div>
            </div>
        </a>
    )
}

export const BlogContainerGrid = (props) => {
    return (
        <a href={`/blog/${props.blog.article_id}`} className="link"> 
            <div className='blog-wrapper' >
                <div className='blog-wrapper__content blog-grid row'>
                    <div className='bloggrid-background col-12 col-md-5' style={{backgroundImage: `url(${props.blog.image})`}}>
                    </div>
                    <div className='col-12 col-md-7'>
                        <h5 className='bloggid-title'>{props.blog.title}</h5>
                        <div className='blog-date'>
                            {props.blog.date.format("DD/MM/YYYY")}
                        </div>
                        <span className='bloggrid-content'>
                            {props.blog.content}
                        </span>
                    </div>
                </div>
            </div>
        </a>
    )
}