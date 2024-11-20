import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import '../../assets/css/bootstrap.min.css';
import '../../../assets/home/news.css';
import { BiChevronsRight } from "react-icons/bi";
import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axios';

function News() {
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
        <section className="news m-5">
            <div className="section1">
                <div className='text-center mb-3'>
                    <div className="news-title-top">
                        <Link to="" title="Tin tức mới nhất" style={{ textDecoration: 'none' }}>
                            <p>Tin tức mới nhất</p>
                        </Link>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={5}
                    navigation
                >
                    {
                        newPost.map((item) => (
                            <SwiperSlide>
                                <Link className='news-content' key={item.post_id} to={`/post-detail/${item.post_id}`}>
                                    <div className='news-img'>
                                        <div className="date-update">
                                            <span className="date"> {new Date(item.created_at).toLocaleString('vi-VN', {
                                                year: 'numeric',
                                                month: '2-digit',
                                                day: '2-digit',
                                            })}</span>
                                        </div>
                                        <img src={require(`../../assets/images/posts/${item.image}`)} alt='news-img-1' />
                                    </div>
                                    <div className='news-content-main'>
                                        <div className='news-title-main'>
                                            <Link to="" className='post-detail '>{item.post_title}</Link>
                                        </div>
                                        <div className='news-description mt-2'>
                                            {item.post_detail}
                                        </div>
                                    </div>
                                    <div className='show-more mt-2'>
                                        <Link to="" className='show-text row'>
                                            Đọc tiếp <BiChevronsRight style={{ width: '20px', height: '20px' }} />
                                        </Link>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </section>
    );
}

export default News;
