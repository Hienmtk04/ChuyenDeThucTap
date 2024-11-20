import { useState } from 'react';
import '../../../assets/cart/payment.css'
import { mockData } from './mockData';
const InfoShopping = (props) => {
    const [dataInfo, setDataInfo] = useState({
        selectedCity: "",
        isSelectedCity: false,
        selectedProvince: "",
        isSelectedProvince: false,
        provinceList: [],
    });

    const handleChangeCity = (event) => {
        const city = event.target.value;
        if (city === "") {
            setDataInfo({
                selectedCity: "",
                isSelectedCity: false,
                selectedProvince: "",
                isSelectedProvince: false,
                provinceList: [],
            });
            return;
        }
        const filterCity = mockData.find((item) => item.id === city);
        const filterProvince = filterCity.province;
        setDataInfo({
            selectedCity: city,
            isSelectedCity: true,
            selectedProvince: "",
            isSelectedProvince: false,
            provinceList: filterProvince,
        });
    };

    const handleChangeProvince = (event) => {
        const province = event.target.value;
        if (province === "") {
            setDataInfo({
                ...dataInfo,
                selectedProvince: "",
                isSelectedProvince: false,
            });
        } else {
            setDataInfo({
                ...dataInfo,
                selectedProvince: province,
                isSelectedProvince: true,
            });
        }
    };
    
    return (
        <>
            <div className="">
                <h3>Thông tin nhận hàng</h3>
                <div className='info'>
                    <input type="text" className="form-control" placeholder="Email" name="email" value={props.email} required />
                </div>
                <div className='info'>
                    <input type='text' placeholder='Họ tên' value={props.user_name} required />
                </div>
                <div className='info'>
                    <input type="text" value={props.phone} placeholder="Số điện thoại (tùy chọn)" />
                </div>
                <div className='info'>
                    <select className="form-select mb-3" defaultValue='---' onChange={handleChangeCity}>
                        {/* <div>Chọn tỉnh thành</div> */}
                        <option value="">Tỉnh thành</option>
                        {mockData.map((city) => (
                            <option key={city.id} value={city.id}>
                                {city.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='info'>
                    <select className="form-select mb-3" onChange={handleChangeProvince}>
                        <option>Chọn quận</option>
                        {dataInfo.provinceList.map((province) => (
                            <option key={province.id} value={province.id}>
                                {province.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='info'>
                    <input type='text' placeholder='Địa chỉ tùy chọn' required />
                </div>
                <div className='info'>
                    <textarea placeholder="Ghi chú (tùy chọn)"></textarea>
                </div>

            </div>
        </>
    )
}

export default InfoShopping;