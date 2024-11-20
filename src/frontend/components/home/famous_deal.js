import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import '../../assets/css/bootstrap.min.css';
import '../../../assets/home/deal.css';
import '../../../assets/home/productcard.css';
import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axios';
import ProductCard from '../product/productCard';
import ProductQuickView from '../product/popupProduct';

function Deal() {
    const [dealProduct, setDealProduct] = useState([]);
    const [colorProduct, setColorProduct] = useState({});
    const [selectedProduct, setSelectedProduct] = useState(null);



    useEffect(() => {
        axiosInstance.get('/products/deal')
            .then((response) => {
                setDealProduct(response.data);
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
        <section className="deal m-5">
            <div className="section1">
                <div className='m-4'>
                    <div className="deal-title">
                        <Link to="" title="Deal nổi bật" className="row" style={{ textDecoration: 'none' }}>
                            <p className='text-deal'>Deal nổi bật</p>
                            <img src={require('../../assets/images/icons/hot_icon.webp')} alt='icon hot' style={{ width: '50px' }} />
                        </Link>
                    </div>
                    <div className='destitle text-center'>
                        <p className="destitle-text">Chương trình đã kết thúc, hẹn gặp lại trong thời gian sớm nhất!</p>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={5}
                    navigation
                >
                    {
                        dealProduct.map((item) => (
                            <SwiperSlide key={item.product_id}>
                                <ProductCard
                                    product={item}
                                    colors={colorProduct[item.product_id] || []}
                                    onQuickView={handleQuickView}
                                />
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
        </section>
    );
}

export default Deal;
