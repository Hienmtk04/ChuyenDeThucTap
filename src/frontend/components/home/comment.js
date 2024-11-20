import { RiDoubleQuotesL } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import '../../../assets/home/comment.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
function Comment() {
    const stars = Array(5).fill(<FaStar style={{ color: 'gold', fontSize: '20px' }} />);
    return (
        <>
            <div className="comment row m-5">
                <div className="col1 col-4">
                    <div className="icon">
                        <RiDoubleQuotesL style={{ fontSize: '100px' }} />
                    </div>

                    <p className="comment-title">Khách hàng nói gì về Helias</p>
                    <p className="text-dark">Cảm ơn sự tin tưởng của quý khách</p>

                </div>
                <div className="col2 col-7 d-flex justify-content-center align-items-center">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={1}
                        slidesPerView={1}
                        navigation
                    >
                        <SwiperSlide>
                            <div className="comment-main">
                                <label>Cảm nhận của khách hàng</label>
                                <div className="info-guess mb-5 ">
                                    <div className="img-guess" style={{ float: 'left' }}>
                                        <img src={require('../../assets/images/users/z5820701411770_cbbb645e6e2d132b4255b6980c03fb84.jpg')} alt="guess" />
                                    </div>
                                    <div className="full-name">
                                        <div>Hoàng Anh</div>
                                        <div>Khách hàng thành viên</div>
                                        <div style={{ display: 'flex', gap: '5px' }}>
                                            {stars.map((star, index) => (
                                                <div key={index}>{star}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-content ">
                                    <div className="description">
                                        Chất lượng thật sự, đúng là tiền nào của đó,sẽ quay lại vì quá tuyệt vời.
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="comment-main">
                                <label>Cảm nhận của khách hàng</label>
                                <div className="info-guess mb-5 ">
                                    <div className="img-guess" style={{ float: 'left' }}>
                                        <img src={require('../../assets/images/users/z5820701411770_cbbb645e6e2d132b4255b6980c03fb84.jpg')} alt="guess" />
                                    </div>
                                    <div className="full-name">
                                        <div>Hoàng Anh</div>
                                        <div>Khách hàng thành viên</div>
                                        <div style={{ display: 'flex', gap: '5px' }}>
                                            {stars.map((star, index) => (
                                                <div key={index}>{star}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-content text-left">
                                    <div className="description">
                                        Chất lượng thật sự, đúng là tiền nào của đó,sẽ quay lại vì quá tuyệt vời.
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="comment-main">
                                <p style={{ fontSize: '30px', fontWeight: 'bold' }}>Cảm nhận của khách hàng</p>
                                <div className="info-guess ">
                                    <div className="img-guess" style={{ float: 'left' }}>
                                        <img src={require('../../assets/images/users/z5820701411770_cbbb645e6e2d132b4255b6980c03fb84.jpg')} alt="guess" />
                                    </div>
                                    <div className="full-name">
                                        <div>Hoàng Anh</div>
                                        <div>Khách hàng thành viên</div>
                                        <div style={{ display: 'flex', gap: '5px' }}>
                                            {stars.map((star, index) => (
                                                <div key={index}>{star}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-content text-left">
                                    <div className="description">
                                        Chất lượng thật sự, đúng là tiền nào của đó,sẽ quay lại vì quá tuyệt vời.
                                        Chất lượng thật sự, đúng là tiền nào của đó,sẽ quay lại vì quá tuyệt vời.
                                        Chất lượng thật sự, đúng là tiền nào của đó,sẽ quay lại vì quá tuyệt vời.
                                        Chất lượng thật sự, đúng là tiền nào của đó,sẽ quay lại vì quá tuyệt vời.
                                        Chất lượng thật sự, đúng là tiền nào của đó,sẽ quay lại vì quá tuyệt vời.
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}
export default Comment;