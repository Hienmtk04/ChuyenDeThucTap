import { Link, useNavigate } from 'react-router-dom';
import '../../../assets/user/login.css'
import '../../../assets/user/signin.css'
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import axiosInstance from '../../../api/axios';

function SignIn() {
    const [values, setValues] = useState({
        user_name: '',
        email: '',
        phone: '',
        password: '',
        gender: 1,
    });
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    function handleRegister(event) {
        event.preventDefault();
        axiosInstance.post('/user/register', values)
            .then(response => {
                console.log("RegisterSuccess: ", response.data);
                navigate('/login');
            })
            .catch(error => {
                if (error.response) {
                    setError(error.response.data.message);
                }
                else {
                    console.error("Register fail: ", error);
                    setError('Đăng ký thất bại. Vui lòng thử lại.');
                }
            })
    };

    return (
        <>
            <div class="rows" >
                <ul class="breadcrumb">
                    <li class="home ml-5">
                        <Link to="#" class="text-dark"><span style={{ color: 'rgb(0, 0, 0)' }}>Trang chủ</span></Link>
                        <span class="mr_lr">&nbsp;<FaChevronRight />&nbsp;</span>
                    </li>
                    <li><strong><span style={{ color: 'rgb(203, 6, 6)' }}> Đăng ký</span></strong></li>
                </ul>
            </div>
            <div className='login'>
                <div className='login-container'>
                    <div className='login-main '>
                        <div className='option '>
                            <div className='btn-option row'>
                                <div className='option-login col-6'>
                                    <Link to="/login" className='text-center option-text'>ĐĂNG NHẬP</Link>
                                </div>
                                <div className='option-signin col-6' style={{ borderBottom: '2px solid rgb(203, 6, 6)' }}>
                                    <Link to="/signin" className='text-center option-text'>ĐĂNG KÝ</Link>
                                </div>
                            </div>

                        </div>
                        <div className='login-form'>
                            <p>ĐĂNG KÝ</p>
                            <div className='form-main'>
                                {error && <span style={{ color: 'red' , backgroundColor: 'rgb(167, 242, 242)', padding: '10px', borderRadius: '20px'}}>{error}</span>}
                                <form onSubmit={handleRegister}>
                                    <div className='user-name'>
                                        <div className='user-name-input'>
                                            <input type="text"
                                                id="user_name"
                                                name="user_name"
                                                placeholder="Họ tên" required
                                                onChange={handleInput}
                                            />
                                        </div>
                                    </div>
                                    <div className='email'>
                                        <div className='email-input'>
                                            <input type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Email"
                                                onChange={handleInput} required />
                                        </div>
                                    </div>
                                    <div className='numphone'>
                                        <div className='numphone-input'>
                                            <input type="text"
                                                id="phone"
                                                name="phone"
                                                placeholder="Phone"
                                                onChange={handleInput} required />
                                        </div>
                                    </div>
                                    <div className='password'>
                                        <div className='password-input'>
                                            <input type="password"
                                                id="password"
                                                name="password"
                                                placeholder="Mật khẩu"
                                                onChange={handleInput} required />
                                        </div>
                                    </div>
                                    <div className='gender'>
                                        <div className='gender-input'>
                                            <select name="gender" id="gender" onChange={handleInput}>
                                                <option value='' className='option' >Chọn giới tính</option>
                                                <option value='1' className='option'>Nam</option>
                                                <option value='0' className='option' >Nữ</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="submit">
                                        <button type="submit"
                                            onclick="">
                                            Đăng ký
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="social-login">
                            <p>Hoặc đăng nhập bằng</p>
                            <div className="social-buttons">
                                <button className="btn facebook">
                                    <FaFacebookF /> Facebook
                                </button>
                                <button className="btn google">
                                    <FaGoogle /> Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignIn;