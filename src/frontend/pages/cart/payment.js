import InfoShopping from '../../components/cart/infoShopping';
import { FaRegMoneyBill1 } from "react-icons/fa6";
import ShippingMethod from '../../components/cart/shippingMethod';
import { Link, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/useContext';
import axiosInstance from '../../../api/axios';
import { mockData } from '../../components/cart/mockData';
import { CLEAR } from '../../../redux/action/cartAction';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import { toast } from 'react-toastify';
import { FaCcPaypal } from "react-icons/fa";
function Payment() {

    const getDataCart = useSelector((state) => state.cart.carts);
    const amount = getDataCart.length;
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    console.log('Total Amount:', totalAmount);
    const { user } = useContext(UserContext);
    const [user_id, setUser_id] = useState(null);
    const [addressData, setAddress] = useState("");
    const [fullAddress, setFullAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [note, setNote] = useState("");
    const [numberOrder, setNumberOrder] = useState(0);
    // const [order_name, setOrderName] = useState("");
    const disPatch = useDispatch();

    ///info-shipping
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


    useEffect(() => {
        const selectedCityName = dataInfo.selectedCity
            ? mockData.find(city => city.id === dataInfo.selectedCity)?.name
            : "";

        const selectedProvinceName = dataInfo.selectedProvince
            ? dataInfo.provinceList.find(province => province.id === dataInfo.selectedProvince)?.name
            : "";

        const fullAddress = `${addressData}, ${selectedProvinceName}, ${selectedCityName}`.trim();
        console.log('Full Address:', fullAddress);
        setFullAddress(fullAddress);
    }, [addressData, dataInfo.selectedCity, dataInfo.selectedProvince, dataInfo.provinceList]);

    //------------------------------------------------
    useEffect(() => {
        console.log('User data:', user);
        if (user.length > 0) {
            setUser_id(user[0].user_id);
        }
    }, [user]);

    const navigate = useNavigate();

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    const shipCost = 30000;
    const total_price = shipCost + totalAmount;
    const changeMoney = (total_price * 0.000040).toFixed(2);

    const order_name = `Đơn hàng #${total_price}`;

    const [values, setValues] = useState({
        order_name: null,
        user_id: null,
        total_price: null,
        payment: 'COD',
        note: ""
    });

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('COD');

    useEffect(() => {
        setValues(prev => ({ ...prev, order_name: order_name, user_id: user_id, total_price: total_price, payment: selectedPaymentMethod, note: note }));
    }, [order_name, user_id, total_price, selectedPaymentMethod, note]);

    const handleInput = (event) => {
        const { value } = event.target;
        setSelectedPaymentMethod(value);
        setValues(prev => ({ ...prev, payment: value }));
    }

    useEffect(() => {
        console.log("Number Order:", numberOrder);
    }, [numberOrder]);


    const handleAddOrder = async () => {
        // event.preventDefault();
        axiosInstance.post('/order/add-order', values, { timeout: 10000 })
            .then(response => {
                console.log("Order added successfully: ", response.data);
                const order_id = response.data.insertId;
                setNumberOrder(response.data.insertId);
                if (!order_id) {
                    throw new Error("Order ID not found in the response");
                }

                if (getDataCart.length > 0) {
                    getDataCart.forEach(item => {
                        axiosInstance.post('/order-detail/add-order', {
                            order_id,
                            price: item.price,
                            quantity: item.quantity,
                            product_id: item.product_id,
                            color_id: item.color.color_id,
                            size: item.size
                        })
                            .then(response => {
                                console.log("OrderDetail added successfully: ", response.data);
                                disPatch(CLEAR());
                            })
                            .catch(error => {
                                console.log("Error adding order detail: ", error);
                            });
                    });
                }
                localStorage.setItem('cart', JSON.stringify({}));
                navigate(`/success/${order_id}`);
            })
            .catch(error => {
                console.log("Error adding order: ", error);
            });
        axiosInstance.post(`/user/add-info/${user_id}`, { address: fullAddress, phone })
            .then(response => {
                console.log("Update user successfully: ", response.data);
            })
            .catch(error => {
                console.log("Error update user: ", error);
            });
        disPatch(CLEAR());

    };

    return (
        <>
            <PayPalScriptProvider options={{ "client-id": "AR7sH7FqlHuNBys3Ko40rBkvTB1dhkg5IwmQvIe9BAtbJ_s8fuvviyfHCBrEueZaBaK1mGd9k02y8S9M" }}>
                <div className="container-fluid">
                    <div className="main-content justify-content-center row">
                        <div className="col-8 my-5">
                            <div className="img-logo d-flex justify-content-center align-items-center ">
                                <img src={require('../../assets/images/header/logo2.jpg')} alt="logo" />
                            </div>
                            <div className='row mt-5 ml-5'>
                                <div className='info-order col-5'>
                                    <div className="">
                                        <h3>Thông tin nhận hàng</h3>
                                        <div className='info'>
                                            <input type="text" className="form-control" placeholder="Email" name="email" value={user[0].email} required />
                                        </div>
                                        <div className='info'>
                                            <input type='text' placeholder='Họ tên' value={user[0].user_name} required />
                                        </div>
                                        <div className='info'>
                                            <input type="text" value={user[0].phone ? user[0].phone : phone} onChange={(e) => setPhone(e.target.value)} placeholder="Số điện thoại (tùy chọn)" />
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
                                            <input type='text' placeholder='Địa chỉ tùy chọn' value={addressData} onChange={(e) => setAddress(e.target.value)} required />
                                        </div>
                                        <div className='info'>
                                            <textarea placeholder="Ghi chú (tùy chọn)" value={note} onChange={(e) => setNote(e.target.value)}></textarea>
                                        </div>

                                    </div>
                                </div>
                                <div className='delivery col-5 ml-5'>
                                    <ShippingMethod />
                                    <div className="payment-method">
                                        <h3>Thanh toán</h3>
                                        <div className="method-group">
                                            <div className="option-method row">
                                                <div className="col-md-9">
                                                    <label className="container">Thanh toán khi giao hàng (COD)
                                                        <input
                                                            type="radio"
                                                            checked={selectedPaymentMethod === "COD"}
                                                            name="payment"
                                                            value="COD"
                                                            onChange={handleInput}
                                                        />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="col-md-3">
                                                    <FaRegMoneyBill1 style={{ fontSize: '30px', marginTop: '10px', color: '#2196F3' }} />
                                                </div>
                                            </div>
                                            <div className="option-method row">
                                                <div className="col-md-9">
                                                    <label className="container">Thanh toán qua PayPal
                                                        <input
                                                            type="radio"
                                                            checked={selectedPaymentMethod === "PayPal"}
                                                            name="payment"
                                                            value="PayPal"
                                                            onChange={handleInput}
                                                        />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="col-md-3">
                                                    <FaCcPaypal style={{ fontSize: '30px', marginTop: '10px', color: 'rgb(227, 155, 10)' }} />
                                                </div>
                                            </div>

                                            {selectedPaymentMethod === 'PayPal' ? (
                                                <div className="paypal-container" style={{ marginTop: '20px' }}>
                                                    <PayPalButtons
                                                        createOrder={(data, actions) => {
                                                            console.log("Creating order with data:", data);
                                                            return actions.order.create({
                                                                purchase_units: [{
                                                                    amount: {
                                                                        currency_code: 'USD',
                                                                        value: changeMoney.toString(),
                                                                    },
                                                                }],
                                                            });
                                                        }}

                                                        onApprove={async (data, actions) => {
                                                            try {
                                                                const details = await actions.order.capture();
                                                                console.log("Transaction completed:", details);
                                                                alert("Thanh toán thành công.");
                                                                toast.success("Thanh toán thành công.");
                                                                await handleAddOrder();
                                                                disPatch(CLEAR());
                                                            } catch (error) {
                                                                console.error("Error capturing order:", error);
                                                                toast.error("Có lỗi xảy ra khi xử lý thanh toán.");
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            ) : ''}


                                        </div >
                                    </div >
                                </div>
                            </div>
                        </div>
                        <div className="col-4" style={{ borderLeft: '1px solid rgb(188, 187, 187)', height: '100%' }}>
                            <div className='info-order my-5'>
                                <div className='count-order' style={{ borderBottom: '1px solid rgb(188, 187, 187)', width: '400px' }}>
                                    <h3>Đơn hàng ({amount} đơn hàng)</h3>
                                </div>
                                <div className='list-order' style={{ borderBottom: '1px solid rgb(188, 187, 187)', width: '400px' }}>
                                    {
                                        getDataCart.length > 0 ? (
                                            getDataCart.map(item => (
                                                <div className='order-item row my-4' key={`${item.product_id}-${item.color.color_id}-${item.size}`}>
                                                    <img
                                                        src={require(`../../assets/images/product/product/${item.color.color_image}`)}
                                                        alt={item.product_name}
                                                        className='col-3'
                                                    />
                                                    <div className='order-quantity'>{item.quantity}</div>
                                                    <div className='info-product col-9 w-50'>
                                                        <h5 className='text-uppercase'>{item.product_name}</h5>
                                                        <div className='row'>
                                                            <div className='col-7'>
                                                                {item.color.color_name} | {item.size}
                                                            </div>
                                                            <div className='col-3 text-right ml-4'>
                                                                {VND.format(item.price * item.quantity)}
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
                                <div className='price-final' style={{ borderBottom: '1px solid rgb(188, 187, 187)', width: '400px' }}>
                                    <div className='my-4'>
                                        <div className='first-price row'>
                                            <span className='col-7 ml-0 text-muted'>Tạm tính tiền</span>
                                            <span className='col-4 text-right ml-2 text-muted'>{VND.format(totalAmount)}</span>
                                        </div>
                                        <div className='first-price row'>
                                            <span className='col-7 ml-0 text-muted'>Phí vận chuyển</span>
                                            <span className='col-4 text-right ml-2 text-muted'>{VND.format(shipCost)}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='price-total'>
                                    <div className='my-4'>
                                        <div className='total row'>
                                            <span className='col-6 ml-0 text-muted '>Tổng cộng</span>
                                            <span className='col-4 text-right pr-4 text-danger h5'>{VND.format(total_price)}</span>
                                        </div>
                                        <div className='back mt-4 row'>
                                            <Link to="/cart" className='col-6 h6 text-primary align-items-center d-flex'><FaAngleLeft />Quay về giỏ hàng</Link>
                                            <button className='col-3 ml-3 h6' onClick={handleAddOrder}>ĐẶT HÀNG</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PayPalScriptProvider>
        </>
    )
}
export default Payment;
