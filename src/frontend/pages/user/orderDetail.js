import { useEffect, useState } from "react";
import "../../../assets/order/popuporrder.css"

const OrderDetail = ({ orderDetail, setPopup }) => {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    return (
        <div className="popup-container">

            <div className="popup-body">
                <div className="popup-header row">
                    <div className="popup-text col-11 text-center">
                        <h3 className="ml-5">Chi tiết đơn hàng</h3>
                    </div>
                    <div className="close col-1" onClick={() => setPopup(false)}><h3>X</h3></div>
                </div>
                {
                    orderDetail.length > 0 ? (
                        orderDetail.map(item => (
                            <div className='order-item row my-4' key={item.product_id}> {/* Add a key prop */}
                                <img
                                    src={require(`../../assets/images/product/product/${item.color_image}`)}
                                    alt=""
                                    className='col-3'
                                />
                                <div className='info-product col-9 w-50'>
                                    <h5 className='text-uppercase'>{item.product_name}</h5>
                                    <div> Số lượng: {item.quantity}</div>
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
        </div>
    )
}

export default OrderDetail;
