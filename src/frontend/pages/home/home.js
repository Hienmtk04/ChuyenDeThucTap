import Category from "../../components/home/category";
import '../../../assets/home/home.css'
import Deal from "../../components/home/famous_deal";
import Banner from "../../components/home/banner";
import Collection from "../../components/home/collection";
import AboutShop from "../../components/home/aboutshop";
import NewProduct from "../../components/home/newProduct";
import DressCollection from "../../components/home/dress_collection";
import SkirtCollection from "../../components/home/skirt_collection";
import BestSeller from "../../components/home/bestseller";
import Comment from "../../components/home/comment";
import News from "../../components/home/news";
import PoliciesSection from "../../components/home/policy";
import Slide from "../../partial/slide";
import { useContext, useEffect, useState } from "react";
import axiosInstance from "../../../api/axios";
import { useParams } from "react-router-dom";
import UserContext from "../../context/useContext";

function HomeIndex() {
    // const {setUser} = useContext(UserContext);
    // const { user_id } = useParams();
    // const [error, setError] = useState('');

    // useEffect(() => {
    //     if (user_id) {
    //         axiosInstance.post('/auth/login-success', { user_id })
    //             .then(response => {
    //                 console.log("LoginSuccess: ", response.data);
    //                 setUser(response.data);
    //             })
    //             .catch(error => {
    //                 if (error.response) {
    //                     setError(error.response.data.message);
    //                 } else {
    //                     console.error("Login fail: ", error);
    //                     setError("Đăng nhập thất bại, vui lòng thử lại.");
    //                 }
    //             });
    //     }
    // }, [user_id, setUser]);
    
    return (
        <>
            <Slide />
            <Category />
            <Deal />
            <DressCollection />
            <SkirtCollection />
            <Banner />
            <Collection />
            <AboutShop />
            <NewProduct />
            {/* <BestSeller /> */}
            <Comment />
            <News />
            <PoliciesSection />
        </>
    )
}
export default HomeIndex;