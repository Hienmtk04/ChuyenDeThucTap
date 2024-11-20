import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import '../../../assets/contact/contact.css'
import { IoLocation, IoAlarm } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import axiosInstance from "../../../api/axios";
import { toast } from "react-toastify";
import UserContext from '../../context/useContext';


function Contact() {

    const {user} = useContext(UserContext);
    console.log("user: ", user);

    const [values, setValues] = useState({
        user_id: user ? user[0].user_id : user.user_id,
        user_name: '',
        phone: '',
        email: '',
        content: ''
    });
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (user) {
            axiosInstance.post('/contact/add-contact', values)
                .then(response => {
                    console.log("Add contact successfully: ", response.data);
                    toast.success("Chúng tôi đã nhận được thông tin của bạn. Chúng tôi sẽ sớm liên lạc với bạn!");
                    // Clear form after successful submission
                    setValues({
                        user_id: user[0].user_id,
                        user_name: '',
                        phone: '',
                        email: '',
                        content: ''
                    });
                    navigate('/contact');
                })
                .catch(error => {
                    if (error.response) {
                        setError(error.response.data.message);
                        toast.error(error.response.data.message); // Show error toast
                    } else {
                        console.error("Add contact fail: ", error);
                        setError('Gửi liên lạc thất bại. Vui lòng thử lại.');
                        toast.error('Gửi liên lạc thất bại. Vui lòng thử lại.'); // Show error toast
                    }
                });
        } else {
            navigate('/login');
        }
    };
    
    return (
        <>
            <div className="rows" >
                <ul className="breadcrumb">
                    <li className="home ml-5">
                        <Link to="#"><span style={{ color: 'rgb(0, 0, 0)' }}>Trang chủ</span></Link>
                        <span class="mr_lr">&nbsp;<FaChevronRight />&nbsp;</span>
                    </li>
                    <li><strong><span style={{ color: 'rgb(203, 6, 6)' }}> Liên hệ</span></strong></li>
                </ul>
            </div>
            <div className="contact">
                <div className="contact-container row">
                    <div className="shop-info-contact col-7">
                        <div className="shop-info ">
                            <div className="shop-info-content">
                                <div className="shop-info-title">Cửa hàng Helias</div>
                                <div className="shop-info-subtitle">
                                    <p>Helias không chỉ là một cửa hàng thời trang nữ đơn thuần, mà còn là điểm đến lý tưởng cho những cô gái đam mê thời trang,
                                        yêu thích sự sang trọng và đẳng cấp.
                                        Với một sứ mệnh tôn vinh vẻ đẹp và phong cách riêng biệt của mỗi người phụ nữ,
                                        Helias đã trở thành biểu tượng của sự uy tín và chất lượng trong ngành thời trang.</p>
                                </div>
                            </div>
                            <div className="info-contact row">
                                <div className="info row ">
                                    <div className="icon-container col-md-2">
                                        <div className="icon-contact">
                                            <IoLocation />
                                        </div></div>
                                    <div className="txt-info col-md-10">
                                        <p>Địa chỉ: 70 Lữ Gia, Phường 15, Quận 11, TP.HCM</p>
                                    </div>
                                </div>
                                <div className="info row">
                                    <div className="icon-container col-md-2">
                                        <div className="icon-contact">
                                            <IoAlarm />
                                        </div></div>
                                    <div className="txt-info col-md-10">
                                        <p>Thời gian làm việc: <br />8h - 22h
                                            Từ thứ 2 đến chủ nhật</p>
                                    </div>
                                </div>
                            </div>
                            <div className="info-contact row">
                                <div className="info row">
                                    <div className="icon-container col-md-2">
                                        <div className="icon-contact">
                                            <FaPhoneVolume />
                                        </div></div>
                                    <div className="txt-info col-md-10">
                                        <p>Hotline: 1900 6750</p>
                                    </div>
                                </div>
                                <div className="info row">
                                    <div className="icon-container col-md-2">
                                        <div className="icon-contact">
                                            <MdEmail />
                                        </div>
                                    </div>
                                    <div className="txt-info col-md-10">
                                        <p>Email: helias.info2004@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="form-contact col-5">
                        <div className="form-container">
                            <h2>Liên hệ với chúng tôi</h2>
                            <p>Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể .</p>
                            {error && <span style={{ color: 'red' , backgroundColor: 'rgb(167, 242, 242)', padding: '10px', borderRadius: '20px'}}>{error}</span>}
                            <form action="" method="POST" onSubmit={ handleSubmit }>
                                <div className="mb-3">
                                    <input type="text" name="user_name" id="name" class="form-control" placeholder="Họ và tên"
                                        required 
                                        onChange={handleInput}/>
                                </div>
                                <div className="mb-3">
                                    <input type="tel" name="phone" id="phone" class="form-control"
                                        placeholder="Số điện thoại" required 
                                        onChange={handleInput} />
                                </div>
                                <div className="mb-3">
                                    <input type="email" name="email" id="email" class="form-control" placeholder="Email"
                                        required 
                                        onChange={handleInput}/>
                                </div>
                                <div className="mb-3">
                                    <textarea name="content" id="comment" class="form-control" rows="5" placeholder="Nội dung" required onChange={handleInput}></textarea>
                                </div>

                                <button type="submit" className="btn" style={{ backgroundColor: "rgb(203,6,6)", color: "white" }}>Gửi
                                    liên hệ</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div >
            <div class="section_maps section m-5">
                <div class="iFrameMap">
                    <div id="contact_map" class="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.904611732553!2d105.81388241542348!3d21.03650239288885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab1946cc7e23%3A0x87ab3917166a0cd5!2zQ8O0bmcgdHkgY-G7lSBwaOG6p24gY8O0bmcgbmdo4buHIFNBUE8!5e0!3m2!1svi!2s!4v1555900531747!5m2!1svi!2s"
                            style={{ border: '0', width: '100%', height:'500px' }} title="Google Map showing Sapo Office Location"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;