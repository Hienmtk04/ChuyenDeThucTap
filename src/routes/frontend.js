import Cart from "../frontend/pages/cart/cart";
import Payment from "../frontend/pages/cart/payment";
import Success from "../frontend/pages/cart/success";
import CheckOrder from "../frontend/pages/checkOrder/checkOrder";
import Contact from "../frontend/pages/contact/contact";
import HomeIndex from "../frontend/pages/home/home";
import Introduce from "../frontend/pages/introduce/introduce";
import Post from "../frontend/pages/post/post";
import PostDetail from "../frontend/pages/post/post_detail";
import AllProduct from "../frontend/pages/product/allProduct";
import ProductByCategory from "../frontend/pages/product/productByCategory";
import ProductDetail from "../frontend/pages/product/productDetail";
import Question from "../frontend/pages/question.js/question";
import Store from "../frontend/pages/storeSystem/store";
import Info from "../frontend/pages/user/info";
import Login from "../frontend/pages/user/login";
import SignIn from "../frontend/pages/user/signin";

const FrontendRoute = [
    {'path': '','component': HomeIndex},
    {'path': '/detail-product/:product_id','component': ProductDetail},
    {'path': '/product','component': AllProduct},
    {'path': '/product/category/:category_id','component': ProductByCategory},
    {'path': '/about','component': Introduce},
    {'path': '/login','component': Login},
    {'path': '/signin','component': SignIn},
    {'path': '/news','component': Post},
    {'path': '/contact','component': Contact},
    {'path': '/question','component': Question},
    {'path': '/check-order','component': CheckOrder},
    {'path': '/cart','component': Cart},
    {'path': '/store','component': Store},
    {'path': '/payment','component': Payment},
    {'path': '/success/:order_id','component': Success},
    {'path': '/info','component': Info},
    {'path': '/post-detail/:post_id','component': PostDetail},


];
export default FrontendRoute; 