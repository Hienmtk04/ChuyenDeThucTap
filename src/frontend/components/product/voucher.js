import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";

const Voucher = () => {
    const [savedVouchers, setSavedVouchers] = useState([]);

    const handleSaveClick = (voucherId) => {
        if (!savedVouchers.includes(voucherId)) {
            setSavedVouchers([...savedVouchers, voucherId]);
        }
    };

    // Dữ liệu voucher
    const vouchers = [
        { id: 1, name: 'HELIAS10', discount: 'Giảm 10.000Đ', condition: 'Áp dụng cho đơn hàng từ 1 triệu trở lên' },
        { id: 2, name: 'FREESHIP', discount: 'Giảm 20.000Đ', condition: 'Áp dụng cho đơn hàng từ 0 đồng trở lên' },
        { id: 3, name: 'HELIAS30', discount: 'Giảm 30.000Đ', condition: 'Áp dụng cho đơn hàng từ 3 triệu trở lên' },
        { id: 4, name: 'HELIAS40', discount: 'Giảm 40.000Đ', condition: 'Áp dụng cho đơn hàng từ 4 triệu trở lên' }
    ];
    return(
        <>
        <div className="voucher row m-5">
                    {vouchers.map(voucher => (
                        <div key={voucher.id} className="voucher-item col-3">
                            <div className="voucher-content">
                                <p className="voucher-name">{voucher.name}</p>
                                <div className="voucher-title row">
                                    <div className="title-item col-5">
                                        <p>{voucher.discount}</p>
                                    </div>
                                    <div className="subtitle col-7">
                                        <p>{voucher.condition}</p>
                                    </div>
                                </div>
                                <div className="voucher-action row">
                                    <div className="icon-voucher col-6 d-flex justify-content-start">
                                        {voucher.name === "FREESHIP" ? (
                                            <img src={require('../../assets/images/icons/img_coupon_2.webp')} alt="Voucher Freeship" />
                                        ) : (
                                            <img src={require('../../assets/images/icons/img_coupon_1.webp')} alt="Voucher Sale" />
                                        )}
                                    </div>
                                    <div className="save col-6 d-flex justify-content-end">
                                        <Link
                                            to=""
                                            className="button-save"
                                            onClick={() => handleSaveClick(voucher.id)}
                                        >
                                            {savedVouchers.includes(voucher.id) ? 'Đã lưu' : 'Sao chép'}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </>
    )
}
export default Voucher;