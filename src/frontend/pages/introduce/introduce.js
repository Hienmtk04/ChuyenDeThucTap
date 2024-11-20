import { Link } from "react-router-dom";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import '../../../assets/home/deal.css';
import '../../../assets/home/productcard.css';
import '../../../assets/product/allproduct.css'
import '../../../assets/about/introduce.css'


function Introduce() {
    return (
        <>
            <div className="rows" >
                <ul className="breadcrumb">
                    <li className="home ml-5">
                        <Link to="#"><span style={{ color: 'rgb(0, 0, 0)' }}>Trang chủ</span></Link>
                        <span class="mr_lr">&nbsp;<FaChevronRight />&nbsp;</span>
                    </li>
                    <li><strong><span style={{ color: 'rgb(203, 6, 6)' }}> Giới thiệu</span></strong></li>
                </ul>
            </div>

            <div className="introduce-main">
                <div className="about-us row ">
                    <div className="about-us-content col-8">
                        <div className="about-us-title">Về chúng tôi</div>
                        <div className="about-us-subtitle">
                            <p>Helias không chỉ là một cửa hàng thời trang nữ đơn thuần, mà còn là điểm đến lý tưởng cho những cô gái đam mê thời trang,
                                yêu thích sự sang trọng và đẳng cấp.
                                Với một sứ mệnh tôn vinh vẻ đẹp và phong cách riêng biệt của mỗi người phụ nữ,
                                Helias đã trở thành biểu tượng của sự uy tín và chất lượng trong ngành thời trang.</p>
                        </div>
                    </div>
                    <div className="about-us-img col-4">
                        <img src={require('../../assets/images/banner/about_1.webp')} alt="about-1" />
                    </div>
                </div>

                <div className="about-us row ">
                    <div className="about-us-img col-4">
                        <img src={require('../../assets/images/banner/about_2.webp')} alt="about-1" />
                    </div>
                    <div className="about-us-content col-8">
                        <div className="about-us-title">Uy Tín và Chất Lượng</div>
                        <div className="about-us-subtitle">
                            <p>Helias tự hào là địa chỉ tin cậy của hàng ngàn khách hàng.
                                Chúng tôi cam kết mang đến cho khách hàng những sản phẩm chất lượng tốt nhất,
                                từ chất liệu cho đến kiểu dáng và công nghệ sản xuất.
                                Mỗi sản phẩm tại Dola Style đều được lựa chọn kỹ lưỡng, đảm bảo vừa vặn và phản ánh đúng phong cách của người mặc.</p>
                        </div>
                    </div>

                </div>

                <div className="about-us row ">
                    <div className="about-us-content col-8">
                        <div className="about-us-title">Chính sách</div>
                        <div className="about-us-subtitle">
                            <p>Helias luôn đặt sự hài lòng và lợi ích của khách hàng lên hàng đầu.
                                Chúng tôi không chỉ cung cấp những sản phẩm chất lượng mà còn mang đến dịch vụ chăm sóc khách hàng tận tình và chuyên nghiệp.
                                Chính sách đổi trả linh hoạt, giao hàng nhanh chóng và an toàn, cùng với các ưu đãi và khuyến mãi đặc biệt,
                                là cam kết của chúng tôi để khách hàng luôn có trải nghiệm mua sắm tốt nhất.</p>
                        </div>
                    </div>
                    <div className="about-us-img col-4">
                        <img src={require('../../assets/images/banner/about_3.webp')} alt="about-1" />
                    </div>
                </div>
                <div className="about-us row ">
                    <div className="about-us-img col-4">
                        <img src={require('../../assets/images/banner/about_4.webp')} alt="about-1" />
                    </div>
                    <div className="about-us-content col-8">
                        <div className="about-us-title">Đánh giá từ khách hàng</div>
                        <div className="about-us-subtitle">
                            <p>"Thời trang tại Dola Style không chỉ là việc mua sắm, mà còn là trải nghiệm tinh tế và đẳng cấp.
                                Tôi luôn tin tưởng vào chất lượng của sản phẩm ở đây và không bao giờ hối hận khi lựa chọn."
                                - Ngọc Trinh, Khách hàng thân thiết của Dola Style.</p>
                            <p>"Helias đã làm cho phong cách của tôi trở nên ấn tượng hơn bao giờ hết.
                                Tôi thích cách họ kết hợp giữa xu hướng mới nhất và phong cách cá nhân của mình, tạo nên những bộ trang phục độc đáo và nổi bật."
                                - Hoàng Yến, Khách hàng hài lòng.</p>
                            <p>"Helias không chỉ bán hàng, họ bán cảm xúc và niềm tin vào bản thân. Những bộ trang phục tôi mua tại đây không chỉ là quần áo,
                                mà còn là biểu tượng của phong cách và sự tự tin của tôi." - Mai Phương, Một khách hàng trung thành.</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="about-us-footer">
                <div className="about-us-footer-title">
                    Chính sách tại Helias Shop
                </div>
                <div className="about-us-footer-content">
                    <p>Với cam kết mang đến sự hài lòng tuyệt đối cho khách hàng, Helias chú trọng vào chất lượng sản phẩm và dịch vụ tốt nhất.
                        Chúng tôi cam kết chỉ bán các sản phẩm chất lượng tốt nhất đến quý khách.</p>
                </div>
            </div>
        </>
    )
}
export default Introduce;