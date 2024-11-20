import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import '../../assets/css/bootstrap.min.css';
import '../../../assets/home/news.css';
import { FaRegHeart } from "react-icons/fa";

function SamePrice() {
    return (
        <section className="product m-5">
            <div className="section1">
                <div className='text-center mb-3'>
                    <div className="product-title-top">
                        <Link to="" title="Tin tức mới nhất" style={{ textDecoration: 'none' }}>
                            <p>Sản phẩm cùng mức giá</p>
                        </Link>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={5}
                    navigation
                >
                    <SwiperSlide>
                        <div className="product-card mb-5 ">
                            <div to="" className="product">
                                <Link to='/detail-product'>
                                    <div className="product-card-top ">
                                        <span className="discount-label">49%</span>
                                        <Link to="" className="product-actions">
                                            <FaRegHeart />
                                        </Link>
                                    </div>
                                    <div className='product-img'>
                                        <img src={require('../../assets/images/product/den-hnvng012-5-20231120111258-2b.webp')} alt="Product" className="default-img" />
                                        <img src={require('../../assets/images/product/trang-hnvng012-1-20231120111258.webp')} alt="Product" className="hover-img" />
                                        <div className='option-view'>
                                            <div className='view text-center'>
                                                <div className='show-quick col-md-6 p-2' >
                                                    <Link to="" className='text-show'>Xem nhanh</Link>
                                                </div>
                                                <div className='show-detail col-md-6 p-2'>
                                                    <Link to='' className='text-show'>Xem chi tiết</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </Link>
                            </div>


                            <div className='product-info'>
                                <Link to="" >
                                    <h3>QUẦN DÀI ỐNG SUÔNG</h3>
                                    <div className="price-section">
                                        <span className="new-price">299.000₫</span>
                                        <span className="old-price">588.000₫</span>
                                    </div>
                                    <div className="color-options">
                                        <span className="color black" style={{ backgroundColor: 'black' }}></span>
                                        <span className="color white"></span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-card mb-5 ">
                            <div to="" className="product">
                                <Link to='/detail-product'>
                                    <div className="product-card-top ">
                                        <span className="discount-label">49%</span>
                                        <Link to="" className="product-actions">
                                            <FaRegHeart />
                                        </Link>
                                    </div>
                                    <div className='product-img'>
                                        <img src={require('../../assets/images/product/den-hnvng012-5-20231120111258-2b.webp')} alt="Product" className="default-img" />
                                        <img src={require('../../assets/images/product/trang-hnvng012-1-20231120111258.webp')} alt="Product" className="hover-img" />
                                        <div className='option-view'>
                                            <div className='view text-center'>
                                                <div className='show-quick col-md-6 p-2' >
                                                    <Link to="" className='text-show'>Xem nhanh</Link>
                                                </div>
                                                <div className='show-detail col-md-6 p-2'>
                                                    <Link to='' className='text-show'>Xem chi tiết</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </Link>
                            </div>


                            <div className='product-info'>
                                <Link to="" >
                                    <h3>QUẦN DÀI ỐNG SUÔNG</h3>
                                    <div className="price-section">
                                        <span className="new-price">299.000₫</span>
                                        <span className="old-price">588.000₫</span>
                                    </div>
                                    <div className="color-options">
                                        <span className="color black" style={{ backgroundColor: 'black' }}></span>
                                        <span className="color white"></span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-card mb-5 ">
                            <div to="" className="product">
                                <Link to='/detail-product'>
                                    <div className="product-card-top ">
                                        <span className="discount-label">49%</span>
                                        <Link to="" className="product-actions">
                                            <FaRegHeart />
                                        </Link>
                                    </div>
                                    <div className='product-img'>
                                        <img src={require('../../assets/images/product/den-hnvng012-5-20231120111258-2b.webp')} alt="Product" className="default-img" />
                                        <img src={require('../../assets/images/product/trang-hnvng012-1-20231120111258.webp')} alt="Product" className="hover-img" />
                                        <div className='option-view'>
                                            <div className='view text-center'>
                                                <div className='show-quick col-md-6 p-2' >
                                                    <Link to="" className='text-show'>Xem nhanh</Link>
                                                </div>
                                                <div className='show-detail col-md-6 p-2'>
                                                    <Link to='' className='text-show'>Xem chi tiết</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </Link>
                            </div>


                            <div className='product-info'>
                                <Link to="" >
                                    <h3>QUẦN DÀI ỐNG SUÔNG</h3>
                                    <div className="price-section">
                                        <span className="new-price">299.000₫</span>
                                        <span className="old-price">588.000₫</span>
                                    </div>
                                    <div className="color-options">
                                        <span className="color black" style={{ backgroundColor: 'black' }}></span>
                                        <span className="color white"></span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-card mb-5 ">
                            <div to="" className="product">
                                <Link to='/detail-product'>
                                    <div className="product-card-top ">
                                        <span className="discount-label">49%</span>
                                        <Link to="" className="product-actions">
                                            <FaRegHeart />
                                        </Link>
                                    </div>
                                    <div className='product-img'>
                                        <img src={require('../../assets/images/product/den-hnvng012-5-20231120111258-2b.webp')} alt="Product" className="default-img" />
                                        <img src={require('../../assets/images/product/trang-hnvng012-1-20231120111258.webp')} alt="Product" className="hover-img" />
                                        <div className='option-view'>
                                            <div className='view text-center'>
                                                <div className='show-quick col-md-6 p-2' >
                                                    <Link to="" className='text-show'>Xem nhanh</Link>
                                                </div>
                                                <div className='show-detail col-md-6 p-2'>
                                                    <Link to='' className='text-show'>Xem chi tiết</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </Link>
                            </div>


                            <div className='product-info'>
                                <Link to="" >
                                    <h3>QUẦN DÀI ỐNG SUÔNG</h3>
                                    <div className="price-section">
                                        <span className="new-price">299.000₫</span>
                                        <span className="old-price">588.000₫</span>
                                    </div>
                                    <div className="color-options">
                                        <span className="color black" style={{ backgroundColor: 'black' }}></span>
                                        <span className="color white"></span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-card mb-5 ">
                            <div to="" className="product">
                                <Link to='/detail-product'>
                                    <div className="product-card-top ">
                                        <span className="discount-label">49%</span>
                                        <Link to="" className="product-actions">
                                            <FaRegHeart />
                                        </Link>
                                    </div>
                                    <div className='product-img'>
                                        <img src={require('../../assets/images/product/den-hnvng012-5-20231120111258-2b.webp')} alt="Product" className="default-img" />
                                        <img src={require('../../assets/images/product/trang-hnvng012-1-20231120111258.webp')} alt="Product" className="hover-img" />
                                        <div className='option-view'>
                                            <div className='view text-center'>
                                                <div className='show-quick col-md-6 p-2' >
                                                    <Link to="" className='text-show'>Xem nhanh</Link>
                                                </div>
                                                <div className='show-detail col-md-6 p-2'>
                                                    <Link to='' className='text-show'>Xem chi tiết</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </Link>
                            </div>


                            <div className='product-info'>
                                <Link to="" >
                                    <h3>QUẦN DÀI ỐNG SUÔNG</h3>
                                    <div className="price-section">
                                        <span className="new-price">299.000₫</span>
                                        <span className="old-price">588.000₫</span>
                                    </div>
                                    <div className="color-options">
                                        <span className="color black" style={{ backgroundColor: 'black' }}></span>
                                        <span className="color white"></span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-card mb-5 ">
                            <div to="" className="product">
                                <Link to='/detail-product'>
                                    <div className="product-card-top ">
                                        <span className="discount-label">49%</span>
                                        <Link to="" className="product-actions">
                                            <FaRegHeart />
                                        </Link>
                                    </div>
                                    <div className='product-img'>
                                        <img src={require('../../assets/images/product/den-hnvng012-5-20231120111258-2b.webp')} alt="Product" className="default-img" />
                                        <img src={require('../../assets/images/product/trang-hnvng012-1-20231120111258.webp')} alt="Product" className="hover-img" />
                                        <div className='option-view'>
                                            <div className='view text-center'>
                                                <div className='show-quick col-md-6 p-2' >
                                                    <Link to="" className='text-show'>Xem nhanh</Link>
                                                </div>
                                                <div className='show-detail col-md-6 p-2'>
                                                    <Link to='' className='text-show'>Xem chi tiết</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </Link>
                            </div>


                            <div className='product-info'>
                                <Link to="" >
                                    <h3>QUẦN DÀI ỐNG SUÔNG</h3>
                                    <div className="price-section">
                                        <span className="new-price">299.000₫</span>
                                        <span className="old-price">588.000₫</span>
                                    </div>
                                    <div className="color-options">
                                        <span className="color black" style={{ backgroundColor: 'black' }}></span>
                                        <span className="color white"></span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="product-card mb-5 ">
                            <div to="" className="product">
                                <Link to='/detail-product'>
                                    <div className="product-card-top ">
                                        <span className="discount-label">49%</span>
                                        <Link to="" className="product-actions">
                                            <FaRegHeart />
                                        </Link>
                                    </div>
                                    <div className='product-img'>
                                        <img src={require('../../assets/images/product/den-hnvng012-5-20231120111258-2b.webp')} alt="Product" className="default-img" />
                                        <img src={require('../../assets/images/product/trang-hnvng012-1-20231120111258.webp')} alt="Product" className="hover-img" />
                                        <div className='option-view'>
                                            <div className='view text-center'>
                                                <div className='show-quick col-md-6 p-2' >
                                                    <Link to="" className='text-show'>Xem nhanh</Link>
                                                </div>
                                                <div className='show-detail col-md-6 p-2'>
                                                    <Link to='' className='text-show'>Xem chi tiết</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </Link>
                            </div>


                            <div className='product-info'>
                                <Link to="" >
                                    <h3>QUẦN DÀI ỐNG SUÔNG</h3>
                                    <div className="price-section">
                                        <span className="new-price">299.000₫</span>
                                        <span className="old-price">588.000₫</span>
                                    </div>
                                    <div className="color-options">
                                        <span className="color black" style={{ backgroundColor: 'black' }}></span>
                                        <span className="color white"></span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

        </section>
    );
}

export default SamePrice;
