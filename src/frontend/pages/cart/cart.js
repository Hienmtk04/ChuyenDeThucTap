import '../../../assets/cart/cart.css'
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR, REMOVE_ITEM, TOTAL_CART, UPDATE_QUANTITY } from '../../../redux/action/cartAction';
import UserContext from '../../context/useContext';
function Cart() {
    const [amountItem, setAmountItem] = useState(1);
    const getDataCart = useSelector(state => state.cart.carts);
    const disPatch = useDispatch();
    const {user} = useContext(UserContext);
    const clearCart = () => {
        disPatch(CLEAR());
        disPatch(TOTAL_CART());
    };
    const removeItem = (item) => {
        disPatch(REMOVE_ITEM(item));    
        disPatch(TOTAL_CART());
    };

    const totalAmount = useSelector(state => state.cart.totalAmount);
    console.log("Product: ", getDataCart);
    console.log("TotalAmount: ", totalAmount);

    const handleQuantityChange = (product_id, color, size, newQuantity) => {
        if (newQuantity < 1) return;
        disPatch(UPDATE_QUANTITY(product_id, color, size, newQuantity));
        disPatch(TOTAL_CART());
    };

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    var total = 0;
    return (
        <>
            <div class="rows" >
                <ul class="breadcrumb">
                    <li class="home ml-5">
                        <Link to="/"><span style={{ color: 'rgb(0, 0, 0)' }}>Trang chủ</span></Link>
                        <span class="mr_lr">&nbsp;<FaChevronRight />&nbsp;</span>
                    </li>
                    <li><strong><span style={{ color: 'rgb(203, 6, 6)' }}>Giỏ hàng</span></strong></li>
                </ul>
            </div>
            <div className='section-cart'>
                <div className='cart'>
                    <div className='cart-container row'>
                        <div className='cart-main col-md-8'>
                            <div className='list-cart card p-2'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Thông tin sản phẩm</th>
                                            <th>Đơn giá</th>
                                            <th>Số lượng</th>
                                            <th>Thành tiền</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getDataCart.length > 0 ?
                                            getDataCart.map(item => {
                                                total += item.price * item.quantity;
                                                return (
                                                    <tr className='product-item' key={`${item.product_id}-${item.color.color_id}-${item.size}`}>
                                                        <td className='row m-2'>
                                                            <img src={require(`../../assets/images/product/product/${item.color.color_image}`)} alt={item.product_name} />
                                                            <div className='info-product ml-2' style={{width: '450px'}}>
                                                                <h5 className='text-uppercase'>{item.product_name}</h5>
                                                                <span>{item.color.color_name} | {item.size}</span>
                                                                <div className='delete mt-2' style={{ cursor: 'pointer' }} onClick={() => removeItem(item)}>Xóa</div>
                                                            </div>
                                                        </td>
                                                        <td className='price-product'>{VND.format(item.price)}</td>
                                                        <td>
                                                            <div className="quantity-cart row">
                                                                <button className="coltrol-btn" onClick={() => handleQuantityChange(item.product_id, item.color, item.size, item.quantity - 1)}>-</button>
                                                                <input type="text" className="quantity-input" value={item.quantity} />
                                                                <button className="coltrol-btn" onClick={() => handleQuantityChange(item.product_id, item.color, item.size, item.quantity + 1)}>+</button>
                                                            </div>
                                                        </td>
                                                        <td className='price-product'>{VND.format(item.price * item.quantity)}</td>
                                                    </tr>
                                                )
                                            }
                                            ) :
                                            <tr>
                                                <td colSpan={4}>Không có sản phẩm nào trong giỏ hàng!</td>
                                            </tr>
                                        }
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan={2}></td>
                                            <td className='total-title'> Tổng tiền: </td>
                                            <td className='total'>{VND.format(totalAmount)}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                                <div className='payment'>
                                    {user ? <Link className='btn-payment' to='/payment' style={{ textDecoration: 'none' }}>Thanh toán</Link>
                                        :
                                        <Link className='btn-payment' to='/login' style={{ textDecoration: 'none' }}>Thanh toán</Link>
                                    }
                                </div>
                            </div>
                            <div className='clear-all'>
                                <button className='btn-success p-2 mt-3' style={{ borderRadius: '10px' }} onClick={() => clearCart()}>Hủy giỏ hàng</button>
                            </div>
                        </div>
                        <div className='cart-action col-md-4'>
                            <div className="coupon-section">
                                <div className="coupon-input card ">
                                    <label>Have coupon?</label>
                                    <div className='row'>
                                        <input
                                            type="text"
                                            value=""
                                            placeholder="Coupon code"
                                        />
                                        <button className="apply-btn">Apply</button>
                                    </div>

                                </div>

                                <div className="price-breakdown card">
                                    <div className="price-item">
                                        <span>Tổng tiền:</span>
                                        <span>{VND.format(totalAmount)}</span>
                                    </div>
                                    <div className="price-item">
                                        <span>Giảm giá:</span>
                                        <span>0</span>
                                    </div>
                                    <div className="price-item total">
                                        <span>Tổng thành tiền:</span>
                                        <span>{VND.format(totalAmount)}</span>
                                    </div>
                                    <nav className="navbar navbar-expand-lg">
                                        <div className="collapse navbar-collapse itemMenu" id="navbarNav">
                                            <ul className="navbar-nav payment-selection">
                                                <li className="nav-item">
                                                    <Link to='#'><img width="57" height="35" alt="Payment 1" data-src="//bizweb.dktcdn.net/100/507/559/themes/949750/assets/payment_1.png?1715575747749" className="lazyload loaded" src="//bizweb.dktcdn.net/100/507/559/themes/949750/assets/payment_1.png?1715575747749" data-was-processed="true" /></Link>
                                                </li>
                                                <li className=" nav-item">
                                                    <Link to='#'> <img width="57" height="35" alt="Payment 2" data-src="//bizweb.dktcdn.net/100/507/559/themes/949750/assets/payment_2.png?1715575747749" className="lazyload loaded" src="//bizweb.dktcdn.net/100/507/559/themes/949750/assets/payment_2.png?1715575747749" data-was-processed="true" /></Link>
                                                </li>
                                                <li className=" nav-item">
                                                    <Link to='#'> <img width="57" height="35" alt="Payment 3" data-src="//bizweb.dktcdn.net/100/507/559/themes/949750/assets/payment_3.png?1715575747749" className="lazyload loaded" src="//bizweb.dktcdn.net/100/507/559/themes/949750/assets/payment_3.png?1715575747749" data-was-processed="true" /></Link>
                                                </li>

                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cart;