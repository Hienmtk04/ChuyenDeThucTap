import { Link, useParams } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import '../../../assets/product/productdetail.css'
import '../../../assets/home/deal.css';
import '../../../assets/home/productcard.css';
import { useDispatch } from 'react-redux';
import { FaBolt } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { useState } from "react";
import SameProduct from "../../components/product/sameProduct";
import SamePrice from "../../components/product/samePrice";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFacebookMessenger } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import axiosInstance from "../../../api/axios";
import DescriptionDetail from "../../components/product/descriptionDetail";
import { ADD } from "../../../redux/action/cartAction";
import PaymentPopup from "../../components/product/popupCart";
import UserContext from "../../context/useContext";

function ProductDetail() {

    const { product_id } = useParams();
    const [product, setProduct] = useState({});
    const [categoryName, setCategoryName] = useState("");
    const [colorProduct, setColorProduct] = useState([]);
    const [imageProduct, setImageProduct] = useState([]);
    const [categoryId, setCategoryId] = useState({});
    const [isAutoplaying, setIsAutoplaying] = useState(true);
    const [selectedImage, setSelectedImage] = useState('');
    const [size, setSize] = useState('S');
    const [amountItem, setAmountItem] = useState(1);
    const [color, setColor] = useState({});
    const [price, setPrice] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isPopup, setIsPopup] = useState(false);

    const {user} = useContext(UserContext);

    const disPatch = useDispatch();

    const handleAddToCart = (amountItem, color, size) => {

        if (!user) {
            // If there is no user, redirect to login page
            // You can use React Router to redirect to the login page
            window.location.href = '/login'; // or use navigate('/login') if using react-router-dom
            return;
        }
        const productItem = {
            ...product,
            amount: amountItem,
            color: color,
            size: size,
            price: price
        }
        setIsPopup(true);
        disPatch(ADD(productItem));
    }

    useEffect(() => {
        axiosInstance.get(`/products/${product_id}`)
            .then(response => {
                console.log("product:", response.data);
                setProduct(response.data[0]);
                setCategoryId(response.data[0].category_id);
                if (response.data[0].product_sale === 0) {
                    setPrice(response.data[0].product_price_sale);
                }
                else {
                    setPrice(response.data[0].product_price);
                }
            })
            .catch((error) => {
                console.log("Error in loading from db: ", error);
            })
    }, [product_id]);

    useEffect(() => {
        axiosInstance.get(`/categories/${categoryId}`)
            .then(response => {
                console.log(response.data);
                setCategoryName(response.data[0].category_name);
            })
            .catch((error) => {
                console.log("Error in loading from db: ", error);
            })
    }, [categoryId]);

    useEffect(() => {
        axiosInstance.get(`/products-color/${product_id}/product`)
            .then(response => {
                console.log(response.data);
                setColorProduct(response.data);
                if (response.data.length > 0) {
                    setColor(response.data[0]);
                }
            })
            .catch((error) => {
                console.log("Error in loading from db: ", error);
            })
    }, [product_id]);

    useEffect(() => {
        axiosInstance.get(`/product-images/image/${product_id}`)
            .then(response => {
                console.log(response.data);
                setImageProduct(response.data);

                if (response.data.length > 0) {
                    setSelectedImage(response.data[0].image_link);
                }
            })
            .catch((error) => {
                console.log("Error in loading from db: ", error);
            });
    }, [product_id]);


    const handleThumbnailClick = (image) => {
        setSelectedImage(image);
        setIsAutoplaying(false);
    };



    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    const handleIncrease = () => {
        setAmountItem(amountItem + 1);
    };

    const handleDecrease = () => {
        if (amountItem > 1) {
            setAmountItem(amountItem - 1);
        }
    };

    const togglePopup = () => {
        setIsVisible(!isVisible);
    };
    
    const handlePopup = () => {
        setIsPopup(!isPopup);
    };

    const [likedProduct, setLikedProduct] = useState(false);
    const handleChangeLiked = () => {
        const newLikeState = !likedProduct;
        setLikedProduct(newLikeState);
        if (!likedProduct) {
            toast.success('Tuyệt vời! Bạn đã thêm sản phẩm vào yêu thích.')
        }
        else {
            toast.warning('Thật tiếc quá đi, bạn đã xóa sản phẩm khỏi yêu thích!')
        }

    };

    return (
        <>
            <div class="rows" >
                <ul class="breadcrumb">
                    <li class="home ml-5">
                        <Link to="#"><span style={{ color: 'rgb(0, 0, 0)' }}>Trang chủ</span></Link>
                        <span class="mr_lr">&nbsp;<FaChevronRight />&nbsp;</span>
                    </li>
                    <li><strong><span style={{ color: 'rgb(203, 6, 6)' }}> Chi tiết sản phẩm</span></strong></li>
                </ul>
            </div>
            <div className="container-main m-4">
                <div className="product-main row">
                    <div className="col-6 product-img row">
                        <div className="detail-img col-2">
                            {imageProduct.map((image, index) => (
                                <img
                                    key={index}
                                    src={require(`../../assets/images/product/product/${image.image_link}`)}
                                    alt={`Thumbnail ${index}`}
                                    onClick={() => handleThumbnailClick(image.image_link)}
                                    className={`litle-img ${selectedImage === image.image_link ? 'selected' : ''}`}
                                    style={{ cursor: 'pointer' }}
                                />
                            ))}
                        </div>
                        <ToastContainer
                            position="top-right"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover />
                        <div className="main-img col-10">

                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                spaceBetween={1}
                                slidesPerView={1}
                                navigation
                                autoplay={isAutoplaying ? { delay: 3000 } : false}
                                onSlideChange={() => setIsAutoplaying(true)}
                            >
                                {
                                    selectedImage ? <img
                                        src={require(`../../assets/images/product/product/${selectedImage}`)}
                                        alt={selectedImage}
                                        className="big-img"
                                    /> :
                                        imageProduct.map((image, index) => (
                                            <SwiperSlide key={index}>
                                                <img
                                                    src={require(`../../assets/images/product/product/${image.image_link}`)}
                                                    alt={selectedImage}
                                                    className="big-img"
                                                />
                                            </SwiperSlide>
                                        ))

                                }
                            </Swiper>
                            <div className="bonus-option row">
                                <div className="share col-md-6 row">
                                    Chia sẻ:
                                    <div className=" Vo8Ebs" aria-label="Share on Messenger">
                                        <FaFacebookMessenger className="messenger-icon sprite-product-sharing" />
                                    </div>
                                    <div className=" Vo8Ebs" aria-label="Share on Messenger">
                                        <FaFacebook className="facebook-icon sprite-product-sharing" />
                                    </div>
                                    <div className=" Vo8Ebs" aria-label="Share on Messenger">
                                        <AiFillTwitterCircle className="twitter-icon sprite-product-sharing" />
                                    </div>
                                    <div className="Vo8Ebs" aria-label="Share on Messenger">
                                        <FaPinterest className="pinterest-icon sprite-product-sharing " />
                                    </div>
                                </div>
                                <div className="favorite col-md-6 row">
                                    <Link to="" className="favorite-actions row" onClick={() => handleChangeLiked()}>
                                        {likedProduct ?
                                            <FaHeart style={{ fontSize: '30px', color: 'red' }} />
                                            : <FaRegHeart style={{ fontSize: '30px', color: 'red' }} />
                                        }
                                        <span className="mx-2 text-dark">Đã thích(9,9tr)</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="product-detail">
                            <div className="product-name">
                                {product.product_name}
                            </div>
                            <div className="product-info row">
                                <div className="col-6">
                                    <div>Loại: <span className="highlight"> {categoryName}</span></div>
                                    <div>Tình trạng: <span className="status"> {product.product_status === 1 ? "Còn hàng" : "Hết hàng"}</span></div>
                                </div>
                                <div className="col-6">
                                    <div>Thương hiệu: <span className="highlight">Helias</span></div>
                                    <div>Mã sản phẩm: <span className="highlight">{product.product_id_name} </span></div>
                                </div>
                            </div>
                            <div className="price">
                                {
                                    product.product_sale === 0 ?
                                        <div>Giá bán: <span className="price-number">{VND.format(product.product_price_sale)}</span></div>
                                        : <div>Giá bán: <span className="price-number">{VND.format(product.product_price)}</span></div>
                                }
                            </div>
                            <div className="promo-codes my-3">
                                <button className="promo-button" onClick={togglePopup}>HELIAS10</button>
                                <button className="promo-button">FREESHIP</button>
                                <button className="promo-button">GS20</button>
                                <button className="promo-button">SALE50</button>
                            </div>
                            <div className="gift">
                                <p>Tặng cài tóc xinh xắn</p>
                                <p className="badge-zero">Gift</p>
                            </div>
                            <div className="color-selection my-3">
                                <div>Màu sắc: <span className="color-highlight">{color.color_name}</span></div>
                                <div className="color-options ml-3">
                                    {
                                        colorProduct.map((colorItem) => (
                                            <div key={colorItem.color_id} className={`row color-button ${color.ID === colorItem.ID ? 'selected' : 'none'}`} onClick={() => setColor(colorItem)}>
                                                <img src={require(`../../assets/images/product/product/${colorItem.color_image}`)} alt="màu trắng" className="img-color col-ms-4" />
                                                <p className="col-ms-6">{colorItem.color_name}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            {/* Kích thước */}
                            <div className="size-selection my-3">
                                <div>Size: <span className="size-highlight">{size}</span></div>
                                <div className="size-options">
                                    <button className={`size-button ${size === 'S' ? 'selected' : 'none'}`} onClick={() => setSize('S')}>S</button>
                                    <button className={`size-button ${size === 'M' ? 'selected' : 'none'}`} onClick={() => setSize('M')}>M</button>
                                    <button className={`size-button ${size === 'L' ? 'selected' : 'none'}`} onClick={() => setSize('L')}>L</button>
                                </div>
                            </div>

                            <div className="size-tip">
                                <Link to="" className="txt">Gợi ý tìm size</Link>
                            </div>
                            <div className="actions row my-3">
                                <div className="quantity-control col-5 row">
                                    <div className="mr-2">Số lượng:</div>
                                    <div className="input">
                                        <button className="quantity-btn" onClick={handleDecrease}>-</button>
                                        <input type="text" className="quantity" value={amountItem} onChange={(e) => setAmountItem(e.target.value)} />
                                        <button className="quantity-btn" onClick={handleIncrease}>+</button>
                                    </div>
                                </div>
                                <div className="add_to_cart col-7">
                                    <button className="btn-add-to-cart" onClick={() => { handleAddToCart(amountItem, color, size) }}>THÊM VÀO GIỎ</button>
                                    {isPopup && <PaymentPopup isVisible={isPopup} onClose={() => setIsPopup(false)}  toggle={true}/>}
                                </div>
                            </div>
                            <div className="actions row my-3">
                                <div className="buy-now col-6">
                                    <button className="btn btn-action">MUA NGAY</button>
                                </div>
                                <div className="contact col-6">
                                    <button className="btn btn-action">Liên hệ <b>1900 6750</b></button>
                                </div>
                            </div>
                            <div className="promotion-list">
                                <div className="promotion-title">
                                    <FaBolt /> <span style={{ color: 'white' }}>Danh sách khuyến mãi</span>
                                </div>
                                <ul>
                                    <li><img src={require('../../assets/images/icons/km_product1.webp')} alt="km-1" /> Áp dụng Phiếu quà tặng/ Mã giảm giá theo sản phẩm.</li>
                                    <li><img src={require('../../assets/images/icons/km_product1.webp')} alt="km-2" /> Giảm giá 10% khi mua từ 5 sản phẩm trở lên.</li>
                                    <li><img src={require('../../assets/images/icons/km_product3.webp')} alt="km-3" /> Tặng 100.000đ mua hàng tại website thành viên Dola Style.</li>
                                </ul>
                            </div>


                            <div className="my-3">
                                <div style={{ fontSize: '18px', color: 'black' }}>Cam kết của chúng tôi</div>
                                <div className="commitments row">
                                    <ul className="col-6">
                                        <li><img src={require('../../assets/images/icons/camket_1.webp')} alt="Cam kết" /> Cam kết 100% chính hãng</li>
                                        <li><img src={require('../../assets/images/icons/camket_3.webp')} alt="Cam kết" /> Giao tận tay khách hàng</li>
                                        <li><img src={require('../../assets/images/icons/camket_5.webp')} alt="Cam kết" /> Hỗ trợ 24/7</li>

                                    </ul>
                                    <ul className="col-6">
                                        <li><img src={require('../../assets/images/icons/camket_2.webp')} alt="Cam kết" /> Hoàn tiền 111% nếu hàng kém chất lượng</li>
                                        <li><img src={require('../../assets/images/icons/camket_4.webp')} alt="Cam kết" />Mở hộp kiểm tra nhận hàng</li>
                                        <li><img src={require('../../assets/images/icons/camket_6.webp')} alt="Cam kết" />  Đổi trả trong 7 ngày</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DescriptionDetail props={product} />
            <SameProduct category_id={categoryId} currentProductId={product.product_id} />
            {/* <SamePrice /> */}
        </>
    )
}
export default ProductDetail;