import { Link, useParams } from 'react-router-dom';
import '../../assets/css/bootstrap.min.css';
import '../../../assets/home/productcard.css';
import { FaRegHeart } from "react-icons/fa";
import { ProgressBar } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axiosInstance from '../../../api/axios';
function ProductCard(props) {
    const { product, colors, onQuickView } = props;
    const [selectedColor, setSelectedColor] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const [productQuantity, setProductQuantity] = useState(product.product_quantity); // Assuming this value comes from the product prop

    useEffect(() => {
        axiosInstance.get(`/order-detail/sales-ratio/${product.product_id}`)
            .then((response) => {
                console.log("Quantity response: ", response.data);
                // Update the sold quantity
                setQuantity(response.data[0].total_quantity || 0); // Ensure we handle if response data is empty
            })
            .catch(error => {
                console.error("Error loading quantity data: ", error);
            });
    }, [props.product_id]);

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    const handleColorClick = (color) => {
        setSelectedColor(color);
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
            <div className="product-card mb-5 mr-2" key={product.product_id}>
                <div className="product">
                    <Link to={`/detail-product/${product.product_id}`}>
                        <div className="product-card-top">
                            {product.product_sale === 0 ?
                                <span className="discount-label">
                                    {Math.round((product.product_price - product.product_price_sale) / product.product_price * 100)}%
                                </span>
                                :
                                <span className="discount-label">
                                    NEW
                                </span>
                            }
                            <Link to="" className="product-actions" onClick={() => handleChangeLiked()}>
                                {likedProduct ? <FaHeart /> : <FaRegHeart />}
                            </Link>
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
                        </div>

                        <div className='product-img'>
                            <img
                                src={selectedColor ? require(`../../assets/images/product/product/${selectedColor.color_image}`) : require(`../../assets/images/product/product/${product.product_image1}`)}
                                alt={product.product_name}
                                className="default-img"
                            />
                            <img
                                src={selectedColor ? require(`../../assets/images/product/product/${selectedColor.color_image}`) : require(`../../assets/images/product/product/${product.product_image2}`)}
                                alt={product.product_name}
                                className="hover-img"
                            />
                            <div className='option-view'>
                                <div className='view text-center'>
                                    <div className='show-quick col-md-6 p-2' onClick={() => onQuickView(product)}>
                                        <Link to="" className='text-show'>Xem nhanh</Link>
                                    </div>
                                    <div className='show-detail col-md-6 p-2'>
                                        <Link to={`/detail-product/${product.product_id}`} className='text-show'>Xem chi tiết</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className='product-info'>
                    <Link to="">
                        <h5 className='text-uppercase' style={{height: '60px'}}>{product.product_name}</h5>
                        {product.product_sale === 0 ?
                            <div className="price-section">
                                <span className="new-price">{VND.format(product.product_price_sale)}</span>
                                <span className="old-price text-secondary">{VND.format(product.product_price)}</span>
                            </div>
                            :
                            <div className="price-section">
                                <span className="new-price">{VND.format(product.product_price)}</span>
                            </div>
                        }

                        <div className="color-options">
                            {colors.map((color) => (
                                <span
                                    key={color.color_id}
                                    className="color"
                                    style={{ backgroundColor: `${color.color_info}`, cursor: 'pointer' }}
                                    onClick={() => handleColorClick(color)}
                                ></span>
                            ))}
                        </div>
                    </Link>
                </div>

                <div className="stock-status mt-3">
                    <span className="text-sell">Đã bán: {quantity}/{productQuantity}</span>
                    <ProgressBar now={quantity} max={productQuantity} className='color-variant' />
                </div>
            </div>
        </>
    );
}
export default ProductCard;