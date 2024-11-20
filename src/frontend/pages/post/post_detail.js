import { Link, useParams } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import 'swiper/swiper-bundle.css';
import '../../assets/css/bootstrap.min.css';
import '../../../assets/post/post.css'
import { useEffect, useState } from "react";
import { Collapse } from 'react-bootstrap';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import axiosInstance from "../../../api/axios";


function PostDetail() {
    const [open, setOpen] = useState(false);
    const [post, setPost] = useState({});
    const [newPost, setNewPost] = useState([]);
    const { post_id } = useParams();

    useEffect(() => {
        axiosInstance.get(`/post/post-detail/${post_id}`)
            .then((response) => { 
                setPost(response.data[0]);
                console.log("post: ", response.data);
            })
            .catch(error => {
                console.log("Error in loading DB: ", error);
            });
    }, [post_id]);

    useEffect(() => {
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
                    <li className="home ml-3">
                        <Link to="" ><span style={{ color: 'rgb(0, 0, 0)' }}>Trang chủ</span></Link>
                        <span class="mr_lr">&nbsp;<FaChevronRight />&nbsp;</span>
                    </li>
                    <li className="home ml-3">
                        <Link to="" ><span style={{ color: 'rgb(0, 0, 0)' }}>Tin tức</span></Link>
                        <span class="mr_lr">&nbsp;<FaChevronRight />&nbsp;</span>
                    </li>
                    <li><strong><span style={{ color: 'rgb(203, 6, 6)' }}>{post.post_title}</span></strong></li>
                </ul>
            </div>

            <div className="post-container">
                <div className="post-main m-4 row">
                    <div className="col1 col-md-8">
                        <section className="main">
                            <div className="product  mb-5">
                                <div className="header">
                                    <div>
                                        <div className="h3" style={{ fontWeight: 'bold' }}>{post.post_title}</div>
                                    </div>
                                    <div>
                                        <span style={{ color: 'rgb(210,6,6)' }}>
                                            {new Date(post.created_at).toLocaleString('en-GB', {
                                                year: 'numeric',
                                                month: '2-digit',
                                                day: '2-digit',
                                            })} | {post.author}
                                        </span>
                                    </div>
                                </div>

                                <hr />
                                <div className="post">
                                    <div className="content">
                                        <div className="post-description mb-4">
                                            {post.post_description}
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <img src={post.image ? require(`../../assets/images/posts/${post.image}`): '/assets/images/default-image.png'} alt={post.post_title} />
                                        </div>
                                        <div className="post_detail mt-4">
                                            {post.post_detail}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div class="comment-section">
                                        <h2>Viết bình luận của bạn</h2>
                                        <form class="comment-form">
                                            <div class="form-row">
                                                <input type="text" id="name" placeholder="Họ và tên" />
                                                <input type="email" id="email" placeholder="Email" />
                                            </div>
                                            <textarea id="comment" placeholder="Nội dung"></textarea>
                                            <button type="submit" class="submit-btn">Gửi thông tin</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>


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
export default PostDetail;