import { useState } from "react";
import { Link } from "react-router-dom";

const DescriptionDetail = ( {props}) => {
    
    const [tabActive, setTabActive] = useState("description");
    const handleTabChange = (tab) => {
        setTabActive(tab);
    };
    return (
        <>
            <div className="description-product m-4">
                <nav className="navbar navbar-expand-lg  ">
                    <div className=" navbar-collapse title" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className={`nav-item ${tabActive === 'description' ? 'active' : ''}`}>
                                <Link className="des-item" onClick={() => handleTabChange('description')}>Mô tả sản phẩm</Link>
                            </li>
                            <li className={`nav-item ${tabActive === 'purchase' ? 'active' : ''}`}>
                                <Link className="des-item" onClick={() => handleTabChange('purchase')}>Hướng dẫn mua hàng</Link>
                            </li>
                            <li className={`nav-item ${tabActive === 'evaluate' ? 'active' : ''}`}>
                                <Link className="des-item" onClick={() => handleTabChange('evaluate')}>Đánh giá sản phẩm </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div id="product-descriptions" style={{ display: tabActive === 'description' ? 'block' : 'none' , whiteSpace: 'pre-wrap'}}>
                    <div className="product-description" style={{ whiteSpace: 'pre-wrap'}}>
                    <p>{props.product_description || "Mô tả không có sẵn."}</p>
                    </div>

                    <div className="product-description ml-3">
                        <h3>HƯỚNG DẪN BẢO QUẢN</h3>
                        <ul className="care-instructions">
                            <li className="my-2">- Giặt tay bằng nước lạnh</li>
                            <li className="my-2">- Không ngâm, không tẩy</li>
                            <li className="my-2">- Giặt riêng các sản phẩm khác màu</li>
                            <li className="my-2">- Không vắt</li>
                            <li className="my-2">- Là ủi ở nhiệt độ thấp. Khuyến khích giặt khô</li>
                        </ul>
                    </div>
                </div>

                <div id="purchase-guide" className="purchase-guide" style={{ display: tabActive === 'purchase' ? 'block' : 'none' }}>
                    <h2>Hướng Dẫn Mua Hàng</h2>
                    <div className="step">
                        <div>
                            <p><b>Bước 1: </b>Truy cập website và lựa chọn sản phẩm cần mua.</p>
                        </div>
                        <div>
                            <p><b>Bước 2: </b>Click vào sản phẩm muốn mua, màn hình hiển thị ra pop up với các lựa chọn sau:</p>
                            <p>Nếu bạn muốn tiếp tục mua hàng: Bấm vào phần tiếp tục mua hàng để lựa chọn thêm sản phẩm vào giỏ hàng.</p>
                            <p>Nếu bạn muốn xem giỏ hàng để cập nhật sản phẩm: Bấm vào xem giỏ hàng.</p>
                            <p>Nếu bạn muốn đặt hàng và thanh toán cho sản phẩm này vui lòng bấm vào: Đặt hàng và thanh toán.</p>
                        </div>
                        <div>
                            <p><b>Bước 3: </b>Lựa chọn thông tin tài khoản thanh toán:</p>
                            <p>Nếu bạn đã có tài khoản vui lòng nhập thông tin tên đăng nhập là email và mật khẩu vào mục đã có tài khoản trên hệ thống.</p>
                            <p>Nếu bạn chưa có tài khoản và muốn đăng ký tài khoản vui lòng điền các thông tin cá nhân để tiếp tục đăng ký tài khoản. Khi có tài khoản bạn sẽ dễ dàng theo dõi được đơn hàng của mình.</p>
                            <p>Nếu bạn muốn mua hàng mà không cần tài khoản vui lòng nhấp chuột vào mục đặt hàng không cần tài khoản.</p>
                        </div>
                        <div>
                            <p><b>Bước 4: </b>Điền các thông tin của bạn để nhận đơn hàng, lựa chọn hình thức thanh toán và vận chuyển cho đơn hàng của mình.</p>
                        </div>

                        <div>
                            <p> <b>Bước 5: </b>Xem lại thông tin đặt hàng, điền chú thích và gửi đơn hàng</p>
                            <p>Sau khi nhận được đơn hàng bạn gửi chúng tôi sẽ liên hệ bằng cách gọi điện lại để xác nhận đơn hàng và địa chỉ của bạn.</p>
                            <p><strong>Trân trọng cảm ơn.</strong></p>
                        </div>
                    </div>
                </div>
                <div id="evaluơate" style={{ display: tabActive === 'evaluate' ? 'block' : 'none' }}>
                    <p style={{ backgroundColor: 'rgba(101, 232, 228, 0.5)', padding: '10px', color: 'black', borderRadius: '10px' }}>Bạn tiến hàng mua và cài app <Link to='' className="text-danger">Đánh giá sản phẩm</Link> mới sử dụng được tính năng này!</p>
                </div>
            </div >
        </>
    )
}
export default DescriptionDetail;