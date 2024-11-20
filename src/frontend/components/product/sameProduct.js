import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import '../../assets/css/bootstrap.min.css';
import '../../../assets/home/news.css';
import '../../../assets/product/product.css';
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axios';
import ProductCard from './productCard';
import ProductQuickView from './popupProduct';

const SameProduct = ({category_id, currentProductId }) => {

    const [product, setProduct] = useState([]);
    const [colorProduct, setColorProduct] = useState({});
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        axiosInstance.get(`/products/category/${category_id}`)
            .then((response) => {
                // Loại bỏ sản phẩm hiện tại bằng cách filter
                const relatedProducts = response.data.filter(item => item.product_id !== currentProductId);
                setProduct(relatedProducts);

                relatedProducts.forEach((item) => {
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
    }, [category_id, currentProductId]);


    const handleQuickView = (product) => {
        setSelectedProduct(product);
    }
    return (
        <section className="product m-5">
            <div className="section1">
                <div className='text-center mb-3'>
                    <div className="product-title-top">
                        <Link to="" title="Sản phẩm liên quan" style={{ textDecoration: 'none' }}>
                            <p>Sản phẩm liên quan</p>
                        </Link>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={5}
                    navigation
                >
                    {

                        product.map((item) => (
                            <SwiperSlide key={item.product_id}>
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

        </section>
    );
}

export default SameProduct;
