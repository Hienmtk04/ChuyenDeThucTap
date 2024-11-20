import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import '../../../assets/home/collection.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axios';
import ProductCard from '../product/productCard';
import ProductQuickView from '../product/popupProduct';

function Collection() {
    const [likedProduct, setLikedProduct] = useState(false);
    const handleChangeLiked = () => {
        const newLikeState = !likedProduct;
        setLikedProduct(newLikeState);
        if (likedProduct) {
            toast.success('Tuyệt vời! Bạn đã thêm sản phẩm vào yêu thích.')
        }
        else {
            toast.warning('Thật tiếc quá đi, bạn đã xóa sản phẩm khỏi yêu thích!')
        }

    };

    const [product, setProduct] = useState([]);
    const [colorProduct, setColorProduct] = useState({});
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        axiosInstance.get('/products/new')
            .then((response) => {
                setProduct(response.data);
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
            <div className='body mt-5 row'>
                <div className='col-md-5'>
                    <div className='image'>
                        <img src={require('../../assets/images/banner/image_product_3.webp')} alt='collection img' />
                    </div>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover />
                <div className='col-md-7 '>
                    <div className=" text-center txt-name mb-3">
                        <p style={{ fontSize: '20px', color: '#000000' }}>Bộ sưu tập</p>
                        <p style={{ fontSize: '30px' }}>Thu Đông</p>
                        <p style={{ color: '#000000' }}>Chúng tôi luôn luôn cập nhật những những bộ sưu tập bắt kịp theo xu hướng của thời đại</p>
                        <div className="show-actions">
                            <Link to="" style={{ fontSize: '20px' }} className="show-btn">Xem ngay</Link>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <Swiper
                            style={{ width: '100%', marginRight: '20px' }}
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={20}
                            slidesPerView={3}
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
                </div>
            </div>
        </>
    )
}
export default Collection;