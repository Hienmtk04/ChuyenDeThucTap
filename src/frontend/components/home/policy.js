import React from 'react';
import '../../../assets/home/policy.css'
import { Link } from 'react-router-dom';

const PoliciesSection = () => {
    return (
        <>
            <div className='main my-5'>
                <div className='policy-top'>
                    <div className='title-top text-center'>
                        <p>Chính sách tại Helias Shop</p>
                    </div>
                    <div className='subtitle text-center'>
                        <p>Với cam kết mang đến sự hài lòng tuyệt đối cho khách hàng, Dola className chú trọng vào chất lượng sản phẩm và dịch vụ tốt nhất.
                            Chúng tôi cam kết chỉ bán các sản phẩm chất lượng tốt nhất đến quý khách.
                        </p>
                    </div>
                </div>
                <div className='policyContainer row mx-3'>
                    <Link to="" className='policyItem col-3 '>
                        <img className='icon' src={require('../../assets/images/icons/chinhsach_1.webp')} alt="Miễn phí vận chuyển" />
                        <div className='policy-title'><p>Miễn phí vận chuyển</p></div>
                        <div className='policy-description'><p>Cho tất cả đơn hàng trong nội thành Hồ Chí Minh</p></div>
                    </Link>
                    <Link to="" className='policyItem col-3'>
                        <img className='icon' src={require('../../assets/images/icons/chinhsach_2.webp')} alt="Miễn phí đổi trả" />
                        <div className='policy-title'><p>Miễn phí đổi trả</p></div>
                        <div className='policy-description'><p>Đối với sản phẩm lỗi sản xuất hoặc vận chuyển</p></div>
                    </Link>
                    <Link to="" className='policyItem col-3'>
                        <img className='icon' src={require('../../assets/images/icons/chinhsach_3.webp')} alt="Hỗ trợ nhanh chóng" />
                        <div className='policy-title'><p>Hỗ trợ nhanh chóng</p></div>
                        <div className='policy-description'><p>Gọi Hotline: 19006750 để được hỗ trợ ngay lập tức</p></div>
                    </Link>
                    <Link to="" className='policyItem col-3'>
                        <img className='icon' src={require('../../assets/images/icons/chinhsach_4.webp')} alt="Ưu đãi thành viên" />
                        <div className='policy-title'><p>Ưu đãi thành viên</p></div>
                        <div className='policy-description'><p>Đăng ký thành viên để được nhận được nhiều khuyến mãi
                        </p></div>
                    </Link>
                </div>
            </div>
            <div className='system-shop'>
                <div className="brand-container">
                    <h1 className="brand-title">Helias Shop</h1>
                    <p className="brand-slogan">Nơi Thăng Hoa Phong Cách</p>
                    <button className="brand-button">Hệ thống của hàng</button>
                </div>
            </div>
        </>
    );
};


export default PoliciesSection;
