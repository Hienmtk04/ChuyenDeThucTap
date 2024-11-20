import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import '../../assets/css/bootstrap.min.css';
import '../../../assets/post/post.css'
import { BiChevronsRight } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Collapse } from 'react-bootstrap';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import axiosInstance from "../../../api/axios";


function Post() {
    const [open, setOpen] = useState(false);
    const [post, setPost] = useState([]);
    const [newPost, setNewPost] = useState([]);

    useEffect(() => {
        axiosInstance.get('/post')
            .then((response) => {
                setPost(response.data);
            })
            .catch(error => {
                console.log("Error in loading DB: ", error);
            });
        axiosInstance.get('/post/newpost')
            .then((response) => {
                setNewPost(response.data);
            })
            .catch(error => {
                console.log("Error in loading DB: ", error);
            });
    }, []);

    return (
        <>
            <div className="rows" >
                <ul className="breadcrumb">
                    <li className="home ml-5">
                        <Link to="" ><span style={{ color: 'rgb(0, 0, 0)' }}>Trang chủ</span></Link>
                        <span class="mr_lr">&nbsp;<FaChevronRight />&nbsp;</span>
                    </li>
                    <li><strong><span style={{ color: 'rgb(203, 6, 6)' }}> Tin tức</span></strong></li>
                </ul>
            </div>
            <div className="post-container">
                <div className="post-main m-4 row">
                    <div className="col1 col-md-8">
                        <div className="section-1">
                            <div className="new-post">
                                <div className="post-title"><p>Tin mới nhất</p></div>
                                <div className="post-detail">
                                    <Swiper
                                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                                        spaceBetween={1}
                                        slidesPerView={1}
                                        loop={true}
                                        navigation
                                    >
                                        {
                                            newPost.map((item) => (
                                                <SwiperSlide>
                                                    <Link className='post-content row' key={item.post_id} to={`/post-detail/${item.post_id}`}>
                                                        <div className='post-img col-5'>
                                                            <img src={require(`../../assets/images/posts/${item.image}`)} alt='news-img-1' />
                                                        </div>
                                                        <div className='news-content-main col-7'>
                                                            <div className='news-title-main'>
                                                                <Link to="" className='post-title'>{item.post_title}</Link>
                                                            </div>
                                                            <div className="update">
                                                                Ngày đăng: <span>
                                                                    {new Date(item.created_at).toLocaleString('en-GB', {
                                                                        year: 'numeric',
                                                                        month: '2-digit',
                                                                        day: '2-digit',
                                                                        hour: '2-digit',
                                                                        minute: '2-digit',
                                                                        second: '2-digit'
                                                                    })}
                                                                </span>
                                                            </div>
                                                            <div className='news-description'>
                                                                {item.post_detail}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                </div>

                            </div>
                        </div>

                        <div className="section-2">
                            <div className="post-list">
                                <div className="post-list-title"><p>Tin tức</p></div>
                                <div className="post-list-detail row">

                                    {
                                        post.map((item) => (
                                            <Link className='news-content' key={item.post_id} to={`/post-detail/${item.post_id}`}>
                                                <div className='news-img'>
                                                    <div className="date-update">
                                                        <span className="date">
                                                            {new Date(item.created_at).toLocaleString('en-GB', {
                                                                year: 'numeric',
                                                                month: '2-digit',
                                                                day: '2-digit',
                                                            })}
                                                        </span>
                                                    </div>
                                                    <img src={require(`../../assets/images/posts/${item.image}`)} alt='news-img-1' />
                                                </div>
                                                <div className='news-content-main mb-3'>
                                                    <div className='news-title-main'>
                                                        <Link to={`/post-detail/${item.post_id}`} className='text-decoration-none post_title'>{item.post_title}</Link>
                                                    </div>
                                                    <div className='news-description'>
                                                        {item.post_detail}
                                                    </div>
                                                </div>
                                                <div className='show-more'>
                                                    <Link to={`/post-detail/${item.post_id}`} className='show-text row'>
                                                        Đọc tiếp <BiChevronsRight style={{ width: '20px', height: '20px' }} />
                                                    </Link>
                                                </div>
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="post-option col-md-4">
                        <div className="post-menu">
                            <div className="menu-title">
                                <p>Danh mục tin tức</p>
                            </div>
                            <div className="menu-content">
                                <ul className="menu-list">
                                    <li className="menu-item">
                                        <Link to="#" className='px-3 menu-link'>Trang chủ</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="#" className='px-3 menu-link'>Giới thiệu</Link>
                                    </li>
                                    <li className="menu-item row" >
                                        <Link to="#" className='px-3 col-6 menu-link'>Sản phẩm</Link>
                                        <Link to="#"
                                            className='px-3 col-6 text-right menu-link'
                                            onClick={() => setOpen(!open)}
                                            aria-controls="collapse-body"
                                            aria-expanded={open}>
                                            {
                                                open ? <CiCircleMinus style={{ fontSize: '20px' }} />
                                                    : <CiCirclePlus style={{ fontSize: '20px' }} />
                                            }</Link>
                                        <Collapse in={open}>
                                            <div id="collapse-body">
                                                <ul className="has-menu">
                                                    <li className="submenu-item"><Link to="#" className='px-3 menu-link'>Áo</Link></li>
                                                    <li className="submenu-item"><Link to="#" className='px-3 menu-link'>Quần</Link></li>
                                                    <li className="submenu-item"><Link to="#" className='px-3 menu-link'>Váy</Link></li>
                                                    <li className="submenu-item"><Link to="#" className='px-3 menu-link'>Đầm</Link></li>
                                                    <li className="submenu-item"><Link to="#" className='px-3 menu-link'>Sale đồng giá</Link></li>

                                                </ul>
                                            </div>
                                        </Collapse>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="#" className='px-3 menu-link'>Tin tức</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="#" className='px-3 menu-link'>Câu hỏi thường gặp</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="#" className='px-3 menu-link'>Liên hệ</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="other-post">
                            <div className="other-post-title">
                                <p>Tin tức nổi bật</p>
                            </div>
                            <div className="other-post-content">
                                <div className="other-post-item">
                                    {
                                        newPost.map((item) => (
                                            <Link className='other-post-content row' key={item.post_id} to={`/post-detail/${item.post_id}`}>
                                                <div className='other-post-img col-5'>
                                                    <img src={require(`../../assets/images/posts/${item.image}`)} alt='news-img-1' />
                                                </div>
                                                <div className='other-post-content-main col-7'>
                                                    <div className='other-post-detail'>
                                                        <Link to="" className='other-post-detail-title'>{item.post_title}</Link>
                                                    </div>
                                                    <div className="update">
                                                        <span>{new Date(item.created_at).toLocaleString('en-GB', {
                                                                year: 'numeric',
                                                                month: '2-digit',
                                                                day: '2-digit',
                                                            })}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Post;