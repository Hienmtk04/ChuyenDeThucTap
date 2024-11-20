import React, { useContext, useEffect, useState } from 'react';
import '../../../assets/product/popup.css'
import { useDispatch, useSelector } from 'react-redux';
import { ADD, REMOVE_ITEM, TOTAL_CART, UPDATE_QUANTITY } from '../../../redux/action/cartAction';
import axiosInstance from '../../../api/axios';
import { Link } from 'react-router-dom';
import UserContext from '../../context/useContext';

const PaymentPopup = ({ isVisible, onClose }) => {
    const getDataCart = useSelector(state => state.cart.carts);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const disPatch = useDispatch();
    const {user} = useContext(UserContext);


    const handleQuantityChange = (product_id, color, size, newQuantity) => {
        if (newQuantity < 1) return;
        disPatch(UPDATE_QUANTITY(product_id, color, size, newQuantity));
        disPatch(TOTAL_CART());
    };

    const removeItem = (item) => {
        disPatch(REMOVE_ITEM(item));
        disPatch(TOTAL_CART());
    };
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    return (
        <div className={`quick-view-popup ${isVisible ? 'active' : ''}`}>
            <div className='title-quick-view'>
                <span >Thanh toán</span>
                <button className="close-btn" onClick={onClose}>X</button>
            </div>
            {
                getDataCart.map((item) => (
                    <div className="quick-view-content " key={item.product_id}>
                        <div className='product-item' key={`${item.product_id}-${item.color.color_id}-${item.size}`}>
                            <div className='row text-left'>
                                <img src={require(`../../assets/images/product/product/${item.color.color_image}`)} alt={item.product_name} className='col-ms-4' />
                                <div className='info-product ml-2 col-md-8'>
                                    <h5 className='text-uppercase'>{item.product_name}</h5>
                                    <span>{item.color.color_name} | {item.size}</span>
                                    <div className='row'>
                                        <div className='delete col-md-2 ml-3' style={{ cursor: 'pointer' }} onClick={() => removeItem(item)}>Xóa</div>
                                        <div className='price-product col-md-8 text-right'>{VND.format(item.price)}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='row justify-content-center align-items-center d-flex'>
                                <label style={{ fontWeight: 'bold', marginTop: '5px' }}>Số lượng:  </label>
                                <div className="quantity-cart row">
                                    <button className="coltrol-btn" onClick={() => handleQuantityChange(item.product_id, item.color, item.size, item.quantity - 1)}>-</button>
                                    <input type="text" className="quantity-input" value={item.quantity} />
                                    <button className="coltrol-btn" onClick={() => handleQuantityChange(item.product_id, item.color, item.size, item.quantity + 1)}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className='row' style={{ fontWeight: 'bold' }}>
                <div className='col-4' >Tổng tiền:  </div>
                <div className="col-7 text-right ">
                    {VND.format(totalAmount)}
                </div>
            </div>
            <Link className='btn-payment mx-5' to='/cart' style={{ textDecoration: 'none', color: 'white' }}>Xem giỏ hàng</Link>
            {
                user ? <Link className='btn-payment' to='/payment' style={{ textDecoration: 'none', color: 'white' }}>Thanh toán</Link>
                :
                <Link className='btn-payment' to='/login' style={{ textDecoration: 'none' }}>Thanh toán</Link>
            }
        </div>
    );
};

export default PaymentPopup;