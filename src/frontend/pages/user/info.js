import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/useContext";
import { useNavigate } from "react-router-dom";
import '../../../assets/user/info.css'
import axiosInstance from "../../../api/axios";
import OrderDetail from "./orderDetail";

const Info = () => {
    const { user, setUser } = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const [orderId, setOrderId] = useState(null);
    const [orderDetail, setOrderDetail] = useState([]);
    const user_id = user[0].user_id;
    const navigative = useNavigate();
    const logout = () => {
        setUser("");
        navigative("/");
    };

    useEffect(() => {
        axiosInstance.get(`/order/order-by-user/${user[0].user_id}`)
            .then((response) => {
                setOrders(response.data);
                console.log("Get order success: ", response.data);
            })
            .catch((error => {
                console.log("Get order failed: ", error);
            }))
    }, [user_id]);

    function openTab(event, tabId) {
        // Xóa lớp 'active' khỏi tất cả các tab và nội dung
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Thêm lớp 'active' vào tab và nội dung được chọn
        event.currentTarget.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    };
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    const [isVisible, setIsVisible] = useState(false);

    const togglePopup = (order) => {
        setOrderId(order.order_id);
        setIsVisible(!isVisible);
    };

    useEffect(() => {
        axiosInstance.get(`order-detail/detail/${orderId}`)
            .then(response => {
                setOrderDetail(response.data);
                console.log("Get detail successfully: ", response.data);
            })
            .catch(error => {
                console.log("Get detail fail: ", error);
            });
    }, [orderId]);


    return (
        <>
            <div class="profile-container container my-3">
                <h1>Hồ sơ cá nhân</h1>
                <div class="tabs">
                    <button class="tab-btn active" onClick={(event) => openTab(event, 'info')}>Thông tin cá nhân</button>
                    <button class="tab-btn" onClick={(event) => openTab(event, 'orders')}>Đơn hàng</button>
                </div>


                <div id="info" class="tab-content active">
                    <h2>Thông tin cá nhân</h2>
                    <div class="info-item">
                        <strong>Tên:</strong> <span id="user-name">{user[0].user_name}</span>
                    </div>
                    <div class="info-item">
                        <strong>Số điện thoại:</strong> <span id="user-phone">{user[0].phone}</span>
                    </div>
                    <div class="info-item">
                        <strong>Email:</strong> <span id="user-email">{user[0].email}</span>
                    </div>
                    <div class="info-item">
                        <strong>Địa chỉ:</strong> <span id="user-address">{user[0].address}</span>
                    </div>
                    <div className="d-flex justify-content-center align-item-center my-5">
                        <button className="btn btn-danger text-light" onClick={logout}>Đăng xuất</button>
                    </div>
                </div>

                <div id="orders" class="tab-content">
                    <h2>Đơn hàng</h2>
                    <ul class="order-list">
                        {
                            orders ?
                                orders.map((item) => (
                                    <li  onClick={() => togglePopup(item)}><strong>{item.order_name}</strong> &nbsp;
                                        Ngày đặt: {new Date(item.created_at).toLocaleString('vi-VN', {
                                            year: 'numeric',
                                            month: '2-digit',
                                            day: '2-digit',
                                        })} - Tổng: {VND.format(item.total_price)}</li>
                                ))
                                :
                                <div className="d-flex justify-content-center align-item-center">
                                    <h4 className="text-dark">Không tìm thấy đơn hàng nào</h4>
                                </div>
                        }
                        {isVisible && (
                            <OrderDetail orderDetail = {orderDetail} setPopup={setIsVisible}/>
                        )}

                    </ul>
                </div>
            </div>

        </>
    )
}
export default Info;