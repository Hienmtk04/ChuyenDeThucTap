import { Link, useNavigate } from 'react-router-dom';
import '../../../assets/user/login.css'
import React, { useContext, useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Collapse } from 'react-bootstrap';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import axiosInstance from "../../../api/axios";
import UserContext from '../../context/useContext';
import ReCAPTCHA from "react-google-recaptcha";
import { GoogleLogin } from '@react-oauth/google';
import AuthService from '../../../api/authService';
import { toast } from 'react-toastify';

function Login() {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [error, setError] = useState('');
    const [captcha, setCaptcha] = useState(null);

    function handleLogin(event) {
        event.preventDefault();
        if (!captcha) {
            setError("Vui lòng xác minh bạn không phải là Robot.");
            return;
        }
        axiosInstance.post('/user/login', { email, password })
            .then(response => {
                console.log("LoginSuccess: ", response.data);
                var user = response.data;
                setUser(user);
                toast.success('Đăng nhập thành công!', {
                    position: "top-right",
                    autoClose: 2000
                });
                navigate('/');
            })
            .catch(error => {
                if (error.response) {
                    setError(error.response.data.message);
                }
                else {
                    console.error("Login fail: ", error);
                    setError("Đăng nhập thất bại, vui lòng thử lại.")
                }
            })
    };

    const handleGoogleLogin = async (credentialResponse) => {
        try {
            const token = credentialResponse.credential;
            const response = await axiosInstance.post('/auth/google-auth', { token });

            const user = Array.isArray(response.data) ? response.data[0] : response.data;
            console.log("Google login user: ", [user]);
            setUser([user]);

            navigate('/');
        } catch (error) {
            console.error("Google login failed: ", error);
            setError("Đăng nhập bằng Google thất bại, vui lòng thử lại.");
        }
    };

    const handleError = () => {
        setError("Đăng nhập thất bại!");
    };


    return (
        <>
            <div class="rows" >
                <ul class="breadcrumb">
                    <li class="home ml-5">
                        <Link to="#" class="text-dark"><span style={{ color: 'rgb(0, 0, 0)' }}>Trang chủ</span></Link>
                        <span class="mr_lr">&nbsp;<FaChevronRight />&nbsp;</span>
                    </li>
                    <li><strong><span style={{ color: 'rgb(203, 6, 6)' }}> Đăng nhập</span></strong></li>
                </ul>
            </div>
            <div className='login'>
                <div className='login-container'>
                    <div className='login-main '>
                        <div className='option '>
                            <div className='btn-option row'>
                                <div className='option-login col-6' style={{ borderBottom: '2px solid rgb(203, 6, 6)' }}>
                                    <Link to="/login" className='text-center option-text'>ĐĂNG NHẬP</Link>
                                </div>
                                <div className='option-signin col-6'>
                                    <Link to="/signin" className='text-center option-text'>ĐĂNG KÝ</Link>
                                </div>
                            </div>

                        </div>
                        <div className='login-form'>
                            <p>ĐĂNG NHẬP</p>
                            <div className='form-main'>
                                {error && <span style={{ color: 'red', backgroundColor: 'rgb(167, 242, 242)', padding: '10px', borderRadius: '20px' }}>{error}</span>}
                                <form onSubmit={handleLogin}>
                                    <div className='email'>
                                        <div className='email-input'>
                                            <input type="email"
                                                className='form-control'
                                                name="email"
                                                placeholder="Email" required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className='password'>
                                        <div className='password-input'>
                                            <input type="password"
                                                className='form-control'
                                                name="password"
                                                placeholder="Mật khẩu" required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className='captcha d-flex justify-content-center mb-3'>
                                        <ReCAPTCHA
                                            sitekey="6LdAsWkqAAAAALqHZ0hKjoPZ0hb3pJ99lBEf9OXy"
                                            onChange={val => setCaptcha(val)}
                                        />
                                    </div>

                                    <div class="submit">
                                        <button type="submit">
                                            Đăng nhập
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='other-action'>
                            <div className='forget-pass'>
                                <p
                                    onClick={() => setOpen(!open)}
                                    aria-controls="collapse-body"
                                    aria-expanded={open}
                                >
                                    Quên mật khẩu
                                </p>
                                <Collapse in={open}>
                                    <div id="collapse-body">
                                        <form action="">
                                            <div className='email'>
                                                <div className='email-input'>
                                                    <input type="email"
                                                        id="email"
                                                        name="email"
                                                        placeholder="Email" required />
                                                </div>
                                            </div>
                                            <div class="submit">
                                                <button type="submit"
                                                    onclick="">
                                                    Lấy lại mật khẩu
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                        <div className="social-login">
                            <p>Hoặc đăng nhập bằng</p>
                            <div className="social-buttons">
                                <button className="btn facebook">
                                    <FaFacebookF /> Facebook
                                </button>
                                <GoogleLogin
                                    onSuccess={handleGoogleLogin}
                                    onError={handleError}
                                    render={(renderProps) => (
                                        <button className="btn google" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                            <FaGoogle /> Google
                                        </button>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;