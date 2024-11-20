import { Link } from 'react-router-dom';
import '../../../assets/home/newproduct.css'
import '../../../assets/home/productcard.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import '../../assets/css/bootstrap.min.css';
import { FaRegHeart } from "react-icons/fa";
import { ProgressBar } from 'react-bootstrap';


function BestSeller() {
    return (
        <section className='newproduct mx-5'>
            <div className='newproduct-content'>
                <div className='mb-2 row'>
                    <div className="newproduct-title col-6">
                        <div to="" title="Sản phẩm mới" style={{ textDecoration: 'none' }}>
                            <p><Link to="" className='txt-name'>SẢN PHẨM BÁN CHẠY</Link></p>
                            <p className="">Những sản phẩm luôn được khách hàng yêu thích!</p>
                        </div>
                    </div>
                    <div className="col-6 mt-5">
                        <Link to="" title="Sản phẩm mới" style={{ textDecoration: 'none' }}>
                            <p style={{ color: 'rgb(203,6,6)', fontWeight: 'bold' }} className='text-right'>Xem tất cả</p>
                        </Link>
                    </div>
                </div>
                <Swiper

                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={5}
                    navigation
                >
                    <SwiperSlide>
                        <div className="product-card mb-5 ">
                            <div to="" className="product">
                                <Link to=''>
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


                            <div className="stock-status mt-3">
                                <span className="text-sell" >Đã bán: 50</span>
                                <ProgressBar now={50} max={100} className='color-variant' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-card mb-5 ">
                            <div to="" className="product">
                                <Link to=''>
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


                            <div className="stock-status mt-3">
                                <span className="text-sell" >Đã bán: 50</span>
                                <ProgressBar now={50} max={100} className='color-variant' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-card mb-5 ">
                            <div to="" className="product">
                                <Link to=''>
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


                            <div className="stock-status mt-3">
                                <span className="text-sell" >Đã bán: 50</span>
                                <ProgressBar now={50} max={100} className='color-variant' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-card mb-5 ">
                            <div to="" className="product">
                                <Link to=''>
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


                            <div className="stock-status mt-3">
                                <span className="text-sell" >Đã bán: 50</span>
                                <ProgressBar now={50} max={100} className='color-variant' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-card mb-5 ">
                            <div to="" className="product">
                                <Link to=''>
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


                            <div className="stock-status mt-3">
                                <span className="text-sell" >Đã bán: 50</span>
                                <ProgressBar now={50} max={100} className='color-variant' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-card mb-5 ">
                            <div to="" className="product">
                                <Link to=''>
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


                            <div className="stock-status mt-3">
                                <span className="text-sell" >Đã bán: 50</span>
                                <ProgressBar now={50} max={100} className='color-variant' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-card mb-5 ">
                            <div to="" className="product">
                                <Link to=''>
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


                            <div className="stock-status mt-3">
                                <span className="text-sell" >Đã bán: 50</span>
                                <ProgressBar now={50} max={100} className='color-variant' />
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    )
}
export default BestSeller;