import { Link } from 'react-router-dom';
import '../../../assets/home/banner.css'
function Banner() {
    return (
        <>
            <div className="banner row">
                <div className="banner-img col-md-6 ">
                    <Link to="">
                        <img src={require('../../assets/images/banner/banner_three_1.webp')} alt='banner1' />
                    </Link>
                </div>
                <div className=" banner-img col-md-6">
                    <Link to="">
                        <img src={require('../../assets/images/banner/banner_three_2.webp')} alt='banner2' />
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Banner;