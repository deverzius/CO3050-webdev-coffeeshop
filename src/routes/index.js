import { Admin, Contact} from "../components";
import { DefaultLayout } from "../components/Layout/DefaultLayout";
import { LoginLayout } from "../components/Layout/LoginLayout";
import { CartPage } from "../pages/CartPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { ShopPage } from "../pages/ShopPage";


export const publicRoutes = [
    {path: "/home", component: HomePage, layout: DefaultLayout},
    {path: "/admin/*", component: Admin},
    {path: "/contact", component: Contact, layout: DefaultLayout},
    {path: "/order/:id", component: ProductPage , layout: DefaultLayout},
    {path: "/shop", component: ShopPage, layout: DefaultLayout},
    {path: '/', component: LoginPage, layout: LoginLayout},
    {path: "/cart", component: CartPage, layout: DefaultLayout},
    

]
