import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import '../../assets/css/bootstrap.min.css';
import '../../../assets/home/deal.css';
import '../../../assets/home/productcard.css';
import { SlSocialYoutube } from "react-icons/sl";
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axios';
import ProductCard from '../product/productCard';
import ProductQuickView from '../product/popupProduct';
function DressCollection() {
    const [dressCollection, setDressCollection] = useState([]);
    const [colorProduct, setColorProduct] = useState({});
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        axiosInstance.get('/products/dress')
            .then((response) => {
                setDressCollection(response.data);
                response.data.forEach((item) => {
                    axiosInstance.get(`/products-color/${item.product_id}/product`)
                        .then((colorResponse) => {
                            setColorProduct(prevColors => ({
                                ...prevColors,
                                [item.product_id]: colorResponse.data
                            }));
                        })
                        .catch(error => {
                            console.log("Error in loading colors: ", error);
                        });
                });
            })
            .catch(error => {
                console.log("Error in loading DB: ", error);
            });
    }, []);
    const handleQuickView = (product) => {
        setSelectedProduct(product);
    }

    return (
        <>
            {/*----------------------------------- dress collection--------------------------------------- */}
            <div div className='row m-5' >
                <div className='col-4  d-flex justify-content-center align-items-center'>
                    <div className='info '>
                        <div className='collection-img '>
                            <Carousel id="carousel1_indicator" interval={3000} indicators controls>
                                <Carousel.Item>
                                    <img src={require('../../assets/images/product/den-hndlu092-5-20230227165706-04.webp')} alt='collection img' />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={require('../../assets/images/product/soc-xanh-la-hndlu104-6-202401221.webp')} alt='collection img' />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={require('../../assets/images/product/den-hndng028-3-20230424115020-23.webp')} alt='collection img' />

                                </Carousel.Item>
                            </Carousel>
                        </div>

                        <div className="collection-name text-center">
                            <div className="youtube">
                                <Link to="" >
                                    <SlSocialYoutube style={{ width: '100px', height: '70px', color: 'white', opacity: '1' }} />
                                </Link>
                            </div>
                            <p style={{ fontSize: '30px', color: 'black' }}>Bộ sưu tập</p>
                            <p style={{ fontSize: '30px', color: 'rgb(157,6,6)' }}>Đầm</p>
                            <div className="show-actions">
                                <button className="show-btn">
                                    <Link to="">Xem ngay</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-8 '>
                    <Swiper
                        style={{ marginLeft: '30px' }}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation
                    >
                        {

                            dressCollection.map((item) => (
                                <SwiperSlide  key={item.product_id}>
                                    <ProductCard
                                        product={item}
                                        colors={colorProduct[item.product_id] || []}
                                        onQuickView={handleQuickView} />
                                </SwiperSlide>
                            ))

                        }


                    </Swiper>
                    {selectedProduct && (
                        <ProductQuickView
                            product={selectedProduct}
                            color={colorProduct[selectedProduct.product_id] || []}
                            onClose={() => setSelectedProduct(null)}
                        />
                    )}
                </div>
            </div>
        </>
    )
}
export default DressCollection;