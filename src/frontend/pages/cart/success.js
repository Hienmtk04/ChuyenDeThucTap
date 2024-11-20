import React, { useContext, useEffect, useState } from 'react';
import { CiCircleCheck } from "react-icons/ci";
import { Link, useParams } from 'react-router-dom';
import UserContext from '../../context/useContext';
import axiosInstance from '../../../api/axios';
import { useSelector } from 'react-redux';

const Success = () => {
    const [user_id, setUser_id] = useState(null);
    const [orderDetail, setOrderDetail] = useState([]);
    const total_price = useSelector((state) => state.cart.totalAmount);
    const [order, setOrder] = useState(null); // Change to null
    const { order_id } = useParams();

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    const shipCost = 30000;

    const { user } = useContext(UserContext);

    useEffect(() => {
        if (user.length > 0) {
            setUser_id(user[0].user_id);
        }
    }, [user]);

    useEffect(() => {
        axiosInstance.get(`order-detail/detail/${order_id}`)
            .then(response => {
                setOrderDetail(response.data);
                console.log("Get detail successfully: ", response.data);
            })
            .catch(error => {
                console.log("Get detail fail: ", error);
            });
    }, [order_id]);

    useEffect(() => {
        axiosInstance.get(`order/${order_id}`)
            .then(response => {
                setOrder(response.data);
                console.log("Get order successfully: ", response.data);
            })
            .catch(error => {
                console.log("Get order fail: ", error);
            });
    }, [order_id]);

    return (
        <div className='justify-content-center align-items-center my-5'>
            <div className='justify-content-center d-flex'>
                <img src={require('../../assets/images/header/logo2.jpg')} alt='logo' />
            </div>
            <div className='row justify-content-center mt-5'>
                <div className='col-7'>
                    <div className="confirmation-container row" style={{ width: '600px' }}>
                        <div className="confirmation-icon"><CiCircleCheck style={{ fontSize: '100px', color: 'rgb(47, 157, 7)' }} /></div>
                        <div className='col-10 mt-3'>
                            <h2>Cảm ơn bạn đã đặt hàng</h2>
                            <div>Một email xác nhận đã được gửi tới <span>{user[0]?.email}</span>. Xin vui lòng kiểm tra email của bạn.</div>
                        </div>
                    </div>
                    <div className='info-area mt-4 border p-5'>
                        <div className='row'>
                            <div className='col-6'>
                                <h2>Thông tin mua hàng</h2>
                                <div className='h6'>{user[0] ? user[0].user_name : ''}</div>
                                <div className='h6'>{user[0] ? user[0].email : ''}</div>
                                <div className='h6'>{user[0] ? user[0].phone : ''}</div>
                            </div>
                            <div className='col-6'>
                                <h2>Địa chỉ nhận hàng</h2>
                                <div className='h6'>{user[0] ? user[0].user_name : ''}</div>
                                <div className='h6'>{user[0] ? user[0].address : ''}</div>
                                <div className='h6'>{user[0] ? user[0].phone : ''}</div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <h2>Phương thức thanh toán</h2>
                                <div className='h6'>Chuyển khoản</div>
                            </div>
                            <div className='col-6'>
                                <h2>Phương thức vận chuyển</h2>
                                <div className='h6'>Giao hàng nhận nơi</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='info-order my-5'>
                        <div className='count-order' style={{ borderBottom: '1px solid rgb(188, 187, 187)', width: '400px' }}>
                            <h3>Đơn hàng ({orderDetail.length} đơn hàng)</h3>
                        </div>
                        <div className='list-order' style={{ borderBottom: '1px solid rgb(188, 187, 187)', width: '400px' }}>
                            {
                                orderDetail.length > 0 ? (
                                    orderDetail.map(item => (
                                        <div className='order-item row my-4' key={item.product_id}> {/* Add a key prop */}
                                            <img
                                                src={require(`../../assets/images/product/product/${item.color_image}`)}
                                                alt=""
                                                className='col-3'
                                            />
                                            <div className='order-quantity'>{item.quantity}</div>
                                            <div className='info-product col-9 w-50'>
                                                <h5 className='text-uppercase'>{item.product_name}</h5>
                                                <div className='row'>
                                                    <div className='col-7'>
                                                        {item.color_name} | {item.size}
                                                    </div>
                                                    <div className='col-3 text-right ml-4'>
                                                        {VND.format(item.quantity * item.price)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className='d-flex justify-content-center'>
                                        Không có sản phẩm nào!
                                    </div>
                                )
                            }
                        </div>
                        <div className='price-final' style={{ borderBottom: '1px solid rgb(188, 187, 187)', width: '400px' }}>
                            <div className='my-4'>
                                <div className='first-price row'>
                                    <span className='col-7 ml-0 text-muted'>Tạm tính tiền</span>
                                    <span className='col-4 text-right ml-2 text-muted'>
                                        {order ? VND.format(order[0].total_price) : VND.format(0)}
                                    </span>
                                </div>
                                <div className='first-price row'>
                                    <span className='col-7 ml-0 text-muted'>Phí vận chuyển</span>
                                    <span className='col-4 text-right ml-2 text-muted'>{VND.format(shipCost)}</span>
                                </div>
                            </div>
                        </div>
                        <div className='price-total'>
                            <div className='my-4'>
                                <div className='total row'>
                                    <span className='col-6 ml-0 text-muted '>Tổng cộng</span>
                                    <span className='col-4 text-right pr-4 text-primary h5'>
                                        {order ? VND.format(order[0].total_price + shipCost) : VND.format(shipCost)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-4' style={{ width: "500px" }}>
                    <Link to="/" className='col-6 h5 bg-primary text-center p-4 text-dark' style={{ width: '100px' }}>Tiếp tục mua hàng </Link>
                    <button className='h5 col-6 '>In</button>
                </div>
            </div>
        </div>
    )
}

export default Success;
