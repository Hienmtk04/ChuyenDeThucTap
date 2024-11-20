import { Link } from 'react-router-dom';
import '../../../assets/home/aboutshop.css'
function AboutShop() {
    return (
        <div className="about-section">
            <div className="row">
                <div className="col-md-7 txt">
                    <h2 className="about-title">Về chúng tôi</h2>
                    <p className="about-description">
                        Helias Shop không chỉ là một cửa hàng thời trang nữ đơn thuần, mà còn là điểm đến lý tưởng cho những cô gái đam mê thời trang,
                        yêu thích sự sang trọng và đẳng cấp. Với một sứ mệnh tôn vinh vẻ đẹp và phong cách riêng biệt của mỗi người phụ nữ, Helias Shop đã trở thành biểu tượng của sự uy tín và chất lượng trong ngành thời trang.
                    </p>
                    <Link to="/" className="btn about-button">Xem thêm</Link>
                </div>
                <div className="col-md-5 img">
                    <img src={require('../../assets/images/header/logo2.jpg')} alt='logo' />
                </div>
            </div>
        </div>

    )
}
export default AboutShop;