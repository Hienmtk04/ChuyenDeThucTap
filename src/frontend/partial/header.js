import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import '../assets/css/jquery.mCustomScrollbar.min.css';
import '../assets/css/owl.carousel.min.css';
import '../assets/css/font-awesome.min.css';
import '../../assets/home/header.css'
import { FaSignInAlt, FaRegHeart } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { FaLocationDot, FaCartShopping } from "react-icons/fa6";
import { RiAccountBoxFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { SiZalo } from "react-icons/si";
import { Link, useNavigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import Menu from './menu';
import { FaRegCalendarCheck } from "react-icons/fa";
import UserContext from '../context/useContext';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import axiosInstance from '../../api/axios';


function Header() {
    const suggest_search = [
        'Đầm ngắn',
        'Váy công sở',
        'Áo kiểu',
        'Babydoll',
        'Chân váy jeans',
        'Quần jeans ống rộng'
    ];

    const [placeholder, setPlaceholder] = useState(suggest_search[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { user } = useContext(UserContext);

    const navigate = useNavigate();
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % suggest_search.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, [suggest_search.length]);

    useEffect(() => {
        setPlaceholder(suggest_search[currentIndex]);
    }, [currentIndex, suggest_search]);

    const [isVisible, setIsVisible] = useState(false);

    const togglePopup = () => {
        setIsVisible(!isVisible);
    };

    const getDataCart = useSelector((state) => state.cart.carts);
    const amount = getDataCart.length;


    return (
        <>

            <header>
                <div className='banner-top'>
                    <Link to="#">
                        <img src={require('../assets/images/header/banner_top.webp')} alt='top banner' />
                    </Link>
                </div>
                <div className='topbar' style={{ borderBottom: 'solid 2px red' }}>
                    <div className=' mx-5 justify-content-center'>
                        <div className="row d-flex align-items-center justify-content-center mx-4" style={{ height: '60px' }}>
                            <div className='col-md-5'>
                                <div className='topbar-text'>
                                    <div className="marquee-container">
                                        <div className="marquee-text text-uppercase text-center"><b>helias xin chào bạn &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Chúc bạn mua sắm thật vui vẻ.    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   Hàng ngàn deal xịn đang chờ đợi bạn. </b>  </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-7 d-flex d-lg-block justify-content-center'>
                                <ul className='row justify-content-end'>
                                    <li className='li-account col-md-2'>
                                        <Link to="/login" style={{ color: 'white' }}><FaSignInAlt /> Đăng nhập</Link>
                                    </li>
                                    <li className='li-account col-md-2'>
                                        <Link to="/signin" style={{ color: 'white' }}><IoPersonAdd /> Đăng ký</Link>
                                    </li>
                                    <li className='li-account col-md-3'>
                                        <Link to="/store" style={{ color: 'white' }}><FaLocationDot /> Hệ thống cửa hàng</Link>
                                    </li>
                                    <li className='li-account col-md-2' onClick={togglePopup}>
                                        <Link to="" style={{ color: 'white' }}><FaPhoneAlt /> Gọi tư vấn</Link>
                                        {isVisible && (
                                            <div className="popup-box">
                                                <h3>Liên hệ với chúng tôi để được tư vấn</h3>
                                                <p>Hãy liên hệ với chúng tôi qua</p>
                                                <div className='icons-contact'>
                                                    <Link to='https://www.facebook.com/profile.php?id=100033936315285&locale=vi_VN'>
                                                        <FaFacebookSquare className='fb' />
                                                    </Link>
                                                    <Link to='https://chat.zalo.me/'>
                                                        <SiZalo className='zalo' />
                                                    </Link>
                                                    <Link to='tel:0367048004'>
                                                        <FaPhoneVolume className='phone' />
                                                    </Link>
                                                </div>
                                                <button onClick={togglePopup} className="close-button">Close</button>
                                            </div>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" mt-1 mx-5">
                    <div className='row d-flex align-items-center justify-content-center' style={{ minHeight: '110px', }} >
                        <div className='col-md-4 d-flex'>
                            <div className='search-header'>
                                <div className='search-smart'>
                                    <form action="/product" method="get" class="header-search-form input-group search-bar" role="search">
                                        <input
                                            type="text"
                                            name="query"
                                            required
                                            className="input-group-field auto-search search-auto form-control"
                                            placeholder={placeholder}
                                            autoComplete="off"
                                        />
                                        <input type="hidden" name="type" value="product" />
                                        <button type="submit" className='mx-2' aria-label="Tìm kiếm" title="Tìm kiếm" >
                                            <IoMdSearch />
                                        </button>
                                    </form>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 d-flex justify-content-center logo" style={{ height: '70px' }}>
                            <Link to="/" class="logo" title="Logo">
                                <img style={{ width: '100%', alignItems: 'center', height: '70px' }} src={require("../assets/images/header/logo1.jpg")} alt="Dola Style" />
                            </Link>
                        </div>
                        <div className='col-md-4 d-flex  align-items-center justify-content-center' style={{ height: '70px' }}>
                            <ul className='header-control d-flex align-items-center justify-content-center row '>
                                <li className='control text-center '>
                                    <Link to={user ? '/info' : '/login'} title='Tài khoản' className='action-control'>
                                        <div className='icon ml-3'>
                                            <RiAccountBoxFill />
                                        </div>
                                        {user
                                            ? user[0].user_name
                                            : 'Tài khoản'
                                        }
                                    </Link>
                                </li>
                                {/* <li className='control text-center '>
                                    <Link to='#' title='Yêu thích' className='action-control'>
                                        <div className='icon'>
                                            <FaRegHeart />
                                        </div>
                                        Yêu thích
                                    </Link>
                                </li> */}
                                <li className='control text-center'>
                                    {
                                        user ?
                                            <Link to='/cart' title='Giỏ hàng' className='action-control position-relative'>
                                                <div className='icon'>
                                                    <FaCartShopping />
                                                    <div className="h5 position-absolute text-muted" style={{ top: '-10px', right: '10px', fontWeight: 'bold' }}> {amount}  </div>
                                                </div>
                                                Giỏ hàng
                                            </Link> :
                                            <Link to='/login' title='Giỏ hàng' className='action-control position-relative'>
                                                <div className='icon'>
                                                    <FaCartShopping />
                                                </div>
                                                <div className="h5 position-absolute text-muted" style={{ top: '-10px', right: '10px', fontWeight: 'bold' }}> {amount}  </div>
                                                Giỏ hàng
                                            </Link>
                                    }

                                </li>
                                <li className='control text-center'>
                                    <Link to='/check-order' title='Kiểm tra đơn hàng' className='action-control'>
                                        <div className='icon'>
                                            <FaRegCalendarCheck />
                                        </div>
                                        Kiểm tra
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Menu />

            </header>
        </>
    );
}

export default Header;
