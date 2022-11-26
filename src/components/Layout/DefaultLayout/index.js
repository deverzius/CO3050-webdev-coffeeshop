import Footer from '../../Footer'
import {Header} from '../../Header'



export const DefaultLayout = (props) => {
    return (
        <div> 
            <Header />
                <div>{props.children}</div>
            <Footer/>
        </div>
    )
}