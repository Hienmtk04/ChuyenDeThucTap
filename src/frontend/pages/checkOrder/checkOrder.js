import { useState } from 'react';
import '../../../assets/checkOrder/checkOrder.css';
import { FaSearch } from "react-icons/fa";

function CheckOrder() {
    const [tabActive, setTabActive] = useState("phone");
    const handleTabChange = (tab) => {
        setTabActive(tab);
    };
    return (
        <>
            <div className='check'>
                <div className='check-container'>
                    <div className='check-main row'>
                        <div className='check-form col-md-5'>
                            <div className='check-content card'>
                                <div className='check-title'>
                                    <p> <FaSearch /> &nbsp; Kiểm tra đơn hàng của bạn</p>
                                </div>
                                <form action='' method='get'>
                                    <div className='label'>
                                        <label>Kiểm tra bằng</label>
                                    </div>
                                    <div className='option-check'>
                                        <input type="radio" id="phone" name="check_by_phone" value="phone" 
                                        checked = {tabActive === 'phone'}
                                        onClick={() => handleTabChange('phone')} />
                                        <label for="phone">Số điện thoại</label>
                                        <input type="radio" id="email" name="check_by_email" value="email" 
                                         checked = {tabActive === 'email'}
                                        onClick={() => handleTabChange('email')} />
                                        <label for="email">Email</label>
                                    </div>
                                    <div className='enter-info' id="email" style={{ display: tabActive === 'email' ? 'block' : 'none' }}>
                                        <label>Nhập email: </label> <br />
                                        <input type="text" id="email" name="email" placeholder='Nhập email để kiếm tra' />
                                    </div>
                                    <div className='enter-info' id="phone" style={{ display: tabActive === 'phone' ? 'block' : 'none' }}>
                                        <label>Nhập số điện thoại: </label> <br />
                                        <input type="text" id="phone" name="phone" placeholder='Nhập số điên thoại để kiếm tra' />
                                    </div>
                                    <div className='submit-check'>
                                        <button id="submit">Kiểm tra</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='order-item col-md-6'>
                            <div className='order-conainer'>
                                Không tìm thấy đơn hàng nào!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CheckOrder;