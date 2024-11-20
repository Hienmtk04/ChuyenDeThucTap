import React, { useContext, useEffect, useState } from 'react';
import '../../../assets/product/popup.css'
import { useDispatch } from 'react-redux';
import { ADD } from '../../../redux/action/cartAction';
import axiosInstance from '../../../api/axios';
import UserContext from '../../context/useContext';

const ProductQuickView = ({ product, color, onClose }) => {
    const {user} = useContext(UserContext);
    const [selectedColor, setSelectedColor] = useState({});
    const [selectedSize, setSelectedSize] = useState('S');
    const [colorProduct, setColorProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [amountItem, setAmountItem] = useState(1);
    const [price, setPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        axiosInstance.get(`/products-color/${product.product_id}/product`)
            .then(response => {
                console.log(response.data);
                setColorProduct(response.data);
                if (response.data.length > 0) {
                    setColorProduct(response.data[0]);
                }
            })
            .catch((error) => {
                console.log("Error in loading from db: ", error);
            })
    }, [product.product_id]);

    useEffect(() => {
        if (product.product_sale === 0) {
            setPrice(product.product_price_sale);
        } else {
            setPrice(product.product_price);
        }
    }, [product]);

    const handleChange = (color) => {
        setSelectedColor(color.color_id);
        setSelectedImage(color.color_image);
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const handleIncrease = () => {
        setAmountItem(amountItem + 1);
    };

    const handleDecrease = () => {
        if (amountItem > 1) {
            setAmountItem(amountItem - 1);
        }
    };

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    const disPatch = useDispatch();

    const handleAddToCart = (amountItem, color, size) => {
        if (!user) {

            window.location.href = '/login'; 
            return;
        }
        const productItem = {
            ...product,
            amount: amountItem,
            color: color,
            size: size,
            price: price
        }
        disPatch(ADD(productItem));
    }


    return (
        <div className={`quick-view-popup ${product ? 'active' : ''}`}>
            <div className='title-quick-view'>
                <span >Xem nhanh</span>
                <button className="close-btn" onClick={onClose}>X</button>
            </div>
            <div className="quick-view-content" key={product.product_id}>
                {
                    selectedImage ? <img src={require(`../../assets/images/product/product/${selectedImage}`)} alt={product.product_name} />
                        :
                        <img src={require(`../../assets/images/product/product/${product.product_image1}`)} alt={product.product_name} />
                }
                <div className="product-detail-container">
                    <h2>{product.product_name}</h2>
                    <div>Tình trạng: <span className="in-stock">{product.product_status === 1 ? "Còn hàng" : "Hết hàng"}</span></div>
                    <div>Mã sản phẩm: <span className="product-code">{product.product_id_name}</span></div>

                    <div className="price-section">
                        <span className="current-price">{VND.format(product.product_price_sale)}</span>
                        <span className="original-price">{VND.format(product.product_price)}</span>
                    </div>

                    <div className="color-selection">
                        <div>Màu sắc:</div>
                        {color.map((color) => (
                            <button
                                className={`color-btn ${selectedColor === color.color_id ? 'btn-selected' : ''}`}
                                onClick={() => handleChange(color)}>
                                {color.color_name}
                            </button>
                        ))}
                    </div>

                    <div className="size-selection">
                        <div>Size:</div>
                        {['S', 'M', 'L'].map(size => (
                            <button
                                key={size}
                                className={`size-btn ${selectedSize === size ? 'btn-selected' : ''}`}
                                onClick={() => handleSizeChange(size)}>
                                {size}
                            </button>
                        ))}
                    </div>

                    <div className="quantity-selection">
                        <div>Số lượng:</div>
                        <div className="quantity-cart row ml-2">
                            <button className="coltrol-btn" onClick={handleDecrease}>-</button>
                            <input type="text" className="quantity-input" value={amountItem} onChange={(e) => setAmountItem(e.target.value)} />
                            <button className="coltrol-btn" onClick={handleIncrease}>+</button>
                        </div>
                    </div>

                    <button className="add-to-cart-btn" onClick={() => { handleAddToCart(amountItem, colorProduct, selectedSize) }}>THÊM VÀO GIỎ HÀNG</button>
                </div>
            </div>
        </div>
    );
};

export default ProductQuickView;