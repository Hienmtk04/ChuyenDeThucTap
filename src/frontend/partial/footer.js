import { Link } from 'react-router-dom';
import '../../assets/home/footer.css'
function Footer() {
    return (
        <>
            <div className="footer">
                <div className="infor row mx-5">
                    <div className="col-md-2 ">
                        <label className="topic">Chính sách</label>
                        <div className="content">
                            <ul>
                                <li ><Link to='' className="content-item">Chính sách thành viên</Link></li>
                                <li ><Link to='' className="content-item">Chính sách thanh toán</Link></li>
                                <li ><Link to='' className="content-item">Chính sách vận chuyển và giao nhận</Link></li>
                                <li ><Link to='' className="content-item">Chính sách thông tin cá nhân</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <label className="topic">Hướng dẫn</label>
                        <div className="content">
                            <ul>
                                <li className="content-item">
                                    <Link to=''>Hướng dẫn mua hàng</Link></li>
                                <li ><Link to='' className="content-item">Hướng dẫn thanh toán</Link> </li>
                                <li><Link to='' className="content-item">Hướng dẫn giao nhận</Link></li>
                                <li ><Link to='' className="content-item">Điều khoản dịch vụ</Link></li>
                                <li ><Link to='' className="content-item">Câu hỏi thường gặp</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label className="topic">Thông tin liên hệ</label>
                        <div className="content">
                            <div>Công ty TNHH Dola Style chuyên sản xuất - phân phối - bán lẻ thời trang nữ.
                                Mã số thuế: 123456xxxx - Ngày cấp: 12/09/2024 - Nơi cấp: Sở kế hoạch và đầu tư TPHCM - Website: helias.net</div>
                            <div><label style={{ color: 'rgb(203, 6, 6)' }}>Địa chỉ:</label> 70 Lữ Gia, Phường 15, Quận 11, TP.HCM</div>
                            <div><label style={{ color: 'rgb(203, 6, 6)' }}>Điện thoại:</label> <Link to='' className="content-item"> 1900 3379 </Link></div>
                            <div><label style={{ color: 'rgb(203, 6, 6)' }}>Email:</label> <Link to='' className="content-item"> helias.info2004@gmail.com </Link></div>
                        </div> 
                        <div className='local_contact my-2'>
                            <label className="topic" style={{ float: 'left' }}>Mạng xã hội</label>
                            <div className='content '>
                                <nav className="navbar navbar-expand-lg ">
                                    <div className="collapse navbar-collapse itemSocial" id="navbarNav">
                                        <ul className="navbar-nav ">
                                            <li className="local-item nav-item">
                                                <Link to='#'> <img src={require('../assets/images/footer/facebook.png')} alt='facebook' /></Link>
                                            </li>
                                            <li className="local-item nav-item">
                                                <Link to='#'> <img src={require('../assets/images/footer/instagram.png')} alt='instagram' /></Link>
                                            </li>
                                            <li className="local-item nav-item">
                                                <Link to='#'> <img src={require('../assets/images/footer/pinterest.png')} alt='pinterest' /></Link>
                                            </li>
                                            <li className="local-item nav-item">
                                                <Link to='#'> <img src={require('../assets/images/footer/twitter.png')} alt='twitter' /></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <label className="topic">Nhận tin khuyến mãi</label>
                        <div className="content">
                            <div className='send-email'>
                                <form action="" method="get" className="d-flex send">
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="form-control me-2"
                                        placeholder="Nhập email nhận tin khuyến mãi"
                                    />
                                    <input type="hidden" name="type" value="email" ></input>
                                    <button
                                        type="submit"
                                        className="btn-send"
                                        aria-label="ĐĂNG KÝ"
                                        title="ĐĂNG KÝ"
                                    >
                                        ĐĂNG KÝ
                                    </button>
                                </form>
                            </div>
                            <div className='social mt-3'>
                                <label className="topic" style={{ float: 'left' }}>Liên kết sàn</label>
                                <div className='content'>
                                    <nav className="navbar navbar-expand-lg">
                                        <div className="collapse navbar-collapse itemSocial" id="navbarNav">
                                            <ul className="navbar-nav">
                                                <li className="local-item nav-item">
                                                    <Link to='#'> <img src={require('../assets/images/footer/lazada.jpg')} alt='lazada' /></Link>
                                                </li>
                                                <li className="local-item nav-item">
                                                    <Link to='#'> <img src={require('../assets/images/footer/icons8-shopee-48.png')} alt='shopee' /></Link>
                                                </li>
                                                <li className="local-item nav-item">
                                                    <Link to='#'> <img src={require('../assets/images/footer/ma-giam-gia-sendo.png')} alt='sendo' /></Link>
                                                </li>
                                                <li className="local-item nav-item">
                                                    <Link to='#'> <img src={require('../assets/images/footer/tiki-200x200.jpg')} alt='tiki' /></Link>
                                                </li>

                                            </ul>
                                        </div>
                                    </nav>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='intro my-5'>
                    <div className="col-12 col-fix ft-bottom" style={{ textAlign: 'center' }}>
                        <div className='logo-bottom my-3'>
                            <a href="/" class="logo-ft" title="Logo">
                                <img style={{ maxHeight: '50px', width: '610', height: '133' }} className="lazyload loaded" src={require("../assets/images/header/logo2.jpg")} alt="Helias" data-was-processed="true" />
                            </a>
                        </div>
                        <div className="ft-content">
                            Helias Shop không chỉ là một cửa hàng thời trang hiện đại, mà còn là điểm đến lý tưởng cho những cô gái đam mê thời trang, yêu thích sự sang trọng và đẳng cấp. Với một sứ mệnh tôn vinh vẻ đẹp và phong cách riêng biệt của mỗi người phụ nữ, Dola Style đã trở thành biểu tượng của sự uy tín và chất lượng trong ngành thời trang.
                        </div>
                        <nav className="navbar navbar-expand-lg">
                            <div className="collapse navbar-collapse itemMenu" id="navbarNav">
                                <ul className="navbar-nav payment">
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
            <div id="copyright" class="copyright">
                <div class="row">
                    <div class="col-12 col-lg-12 text-copy">
                        <span class="copy-right">Copyright <b>@Helias theme</b>  – All rights reserved.</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;