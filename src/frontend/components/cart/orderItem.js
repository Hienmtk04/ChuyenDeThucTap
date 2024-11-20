import { Link } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa";


const OrderItem = (props) => {
    return (
        <>
            <div className='info-order my-5' key={props.product_id}>
                <div className='count-order' style={{ borderBottom: '1px solid rgb(188, 187, 187)', width: '400px' }} >
                    <h3>Đơn hàng (1 đơn hàng)</h3>
                </div>
                <div className='list-order' style={{ borderBottom: '1px solid rgb(188, 187, 187)', width: '400px' }}>
                    <div className='order-item row ml-2 my-4'>
                        <img src={require(`../../assets/images/product/product/${props.product_image1}`)} alt={props.product_name} />
                        <div className='info-product ml-2'>
                            <h5 className='text-uppercase'>{props.product_name}</h5>
                            <span>{props.color_name} | {props.size}</span>
                        </div>
                        <div className='price-item'>{props.product_price_sale}</div>
                    </div>
                </div>
                <div className='voucher-input' style={{ borderBottom: '1px solid rgb(188, 187, 187)', width: '400px' }}>
                    <div className='my-4'>
                        <input type='text' placeholder='Nhập mã giảm giá' name='voucher' />
                        <button className='appli'>Áp dụng</button>
                    </div>
                </div>
                <div className='price-final ' style={{ borderBottom: '1px solid rgb(188, 187, 187)', width: '400px' }}>
                    <div className='my-4'>
                        <div className='first-price row'>
                            <span className='col-7 ml-0 text-muted'>Tạm tính tiền</span>
                            <span className='col-4 text-right ml-2 text-muted'>{props.product_price_sale}</span>
                        </div>
                        <div className='first-price row'>
                            <span className='col-7 ml-0 text-muted'>Phí vận chuyển</span>
                            <span className='col-4 text-right ml-2 text-muted'>0</span>
                        </div>
                    </div>
                </div>
                <div className='price-total'>
                    <div className='my-4'>
                        <div className='total row'>
                            <span className='col-6 ml-0 text-muted '>Tổng cộng</span>
                            <span className='col-4 text-right pr-4 text-danger h5'>{props.product_price_sale}</span>
                        </div>
                        <div className='back mt-4 row'>
                            <Link to="" className='col-6 h6 text-primary align-items-center d-flex'> <FaAngleLeft />Quay về giỏ hàng</Link>
                            <button className='col-3 ml-3 h6'>ĐẶT HÀNG</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OrderItem;