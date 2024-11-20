import '../../../assets/store/store.css'
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhone, FaPaperPlane } from "react-icons/fa";
function Store() {
    const store = [
        {
            id: 1,
            name: "Dola Sài Gòn",
            address: "Tầng 3, 70 Lữ Gia, Phường 15, Quận 11, Thành phố Hồ Chí Minh",
            phone: "1900 6750",
        },
        {
            id: 2,
            name: "Dola Bình Dương",
            address: "169 / 34 Nguyễn Hữu Cảnh, Phường Phú Thọ, TP.Thủ Dầu Một, Tỉnh Bình Dương",
            phone: "1900 6750",
        },
        {
            id: 2,
            name: "Dola Cần Thơ",
            address: "81 đường Phan Huy Chú, KDC Thới Nhựt I, Phường An Khánh, Quận Ninh Kiều, Tp Cần Thơ ",
            phone: "1900 6750",
        },
        {
            id: 2,
            name: "Dola Hà Nội",
            address: "Tầng 6 - 266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội",
            phone: "1900 6750",
        },
        {
            id: 2,
            name: "Dola Đà Nẵng",
            address: "181 đường Huỳnh Tấn Phát, Phường Hoà Cường Nam, Quận Hải Châu, TP Đà Nẵng",
            phone: "1900 6750",
        },

    ];

    return (
        <>
            <div class="rows" >
                <ul class="breadcrumb">
                    <li class="home ml-5">
                        <Link to="/"><span style={{ color: 'rgb(0, 0, 0)' }}>Trang chủ</span></Link>
                        <span class="mr_lr">&nbsp;<FaChevronRight />&nbsp;</span>
                    </li>
                    <li><strong><span style={{ color: 'rgb(203, 6, 6)' }}>Hệ thống cửa hàng</span></strong></li>
                </ul>
            </div>
            <div className='section-store'>
                <div className='store-banner row'>
                    <div className='store-banner-content col-md-3 row'>
                        <div className='banner-content-img col-md-3'>
                            <img src={require('../../assets/images/icons/icon_hethong1.webp')} alt='Hệ thống 1' />
                        </div>
                        <div className='banner-content-txt col-md-9'>
                            <p>Cửa hàng</p>
                            <p>50+</p>
                        </div>
                    </div>
                    <div className='store-banner-content col-md-3 row'>
                        <div className='banner-content-img col-md-3'>
                            <img src={require('../../assets/images/icons/icon_hethong2.webp')} alt='Hệ thống 1' />
                        </div>
                        <div className='banner-content-txt col-md-9'>
                            <p>Tỉnh thành</p>
                            <p>30+</p>
                        </div>
                    </div>
                    <div className='store-banner-content col-md-3 row'>
                        <div className='banner-content-img col-md-3'>
                            <img src={require('../../assets/images/icons/icon_hethong3.webp')} alt='Hệ thống 1' />
                        </div>
                        <div className='banner-content-txt col-md-9'>
                            <p>Văn phòng đại diện</p>
                            <p>3</p>
                        </div>
                    </div>
                    <div className='store-banner-content col-md-3 row'>
                        <div className='banner-content-img col-md-3'>
                            <img src={require('../../assets/images/icons/icon_hethong4.webp')} alt='Hệ thống 1' />
                        </div>
                        <div className='banner-content-txt col-md-9'>
                            <p>Nhân sự</p>
                            <p>500+</p>
                        </div>
                    </div>
                </div>

                <div className='store-system row'>
                    <div className='system col-md-4 '>
                        <div className='find-store row'>
                            <div className='province col-md-6'>
                                <span>Tỉnh thành</span>
                                <div className='select-province'>
                                    <select>
                                        <option value="hochiminh">Chọn tỉnh thành</option>
                                        <option value="hochiminh">TP Hồ Chí Minh</option>
                                        <option value="hochiminh">Hà Nội</option>
                                        <option value="hochiminh">Cần Thơ</option>

                                    </select>
                                </div>
                            </div>

                            <div className='province col-md-6'>
                                <span>Nhập tên cửa hàng</span>
                                <div className=''>
                                    <input className='enter-find' name='store' type='text' placeholder='Nhập tên cửa hàng' />
                                </div>
                            </div>
                        </div>


                        {
                            store.map(item => (
                                <div className="location-card">
                                    <span className="location-title">{item.name}</span>
                                    <div className="location-info">
                                        <div className="location-item row">
                                            <div className='icons col-md-2'>
                                                <FaMapMarkerAlt fontSize={24} color='black' />
                                            </div>
                                            <span className='col-md-10'>{item.address}</span>
                                        </div>
                                        <div className="location-item row">
                                            <div className='icons col-md-2'>
                                                <FaPhone fontSize={24} color='black' />
                                            </div>
                                            <span className='col-md-10'>{item.phone}</span>
                                        </div>
                                    </div>

                                    <button className="direction-button">
                                        <FaPaperPlane className="button-icon" />
                                        Chỉ đường
                                    </button>
                                </div>
                            ))
                        }

                    </div>

                    <div className='big-map col-md-8'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.904611732553!2d105.81388241542348!3d21.03650239288885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab1946cc7e23%3A0x87ab3917166a0cd5!2zQ8O0bmcgdHkgY-G7lSBwaOG6p24gY8O0bmcgbmdo4buHIFNBUE8!5e0!3m2!1svi!2s!4v1555900531747!5m2!1svi!2s"
                            style={{ border: '0', width: '100%', height: '100%', marginTop: 10, paddingRight: 10 }} title="Google Map showing Sapo Office Location"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Store;