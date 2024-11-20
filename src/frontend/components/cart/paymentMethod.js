import { FaRegMoneyBill1 } from "react-icons/fa6";
const PaymentMethod = () => {
    return (
        <>
            <div className="payment-method">
                <h3>Thanh toán</h3>
                <div className="method-group">
                    <div className="option-method row">
                        <div className="col-md-9">
                            <label class="container">Chuyển khoản
                                <input type="radio" checked="checked" name="credit" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div className="col-md-3">
                            <FaRegMoneyBill1 style={{ fontSize: '30px', marginTop: '10px', color: '#2196F3' }} />
                        </div>
                    </div>
                    <div className="option-method row">
                        <div className="col-md-9">
                            <label class=" container">Tiền mặt
                                <input type="radio" checked="checked" name="money" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div className="col-md-3">
                            <FaRegMoneyBill1 style={{ fontSize: '30px', marginTop: '10px', color: '#2196F3' }} />
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default PaymentMethod;