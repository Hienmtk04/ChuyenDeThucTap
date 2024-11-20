import { Link } from 'react-router-dom';
import '../../../assets/home/newproduct.css'
import '../../../assets/home/productcard.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import '../../assets/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axios';
import ProductCard from '../product/productCard';
import ProductQuickView from '../product/popupProduct';


function NewProduct() {
    const [newProduct, setNewProduct] = useState([]);
    const [colorProduct, setColorProduct] = useState({});
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        axiosInstance.get('/products/new')
            .then((response) => {
                setNewProduct(response.data);
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
        <section className='newproduct mx-5'>
            <div className='newproduct-content'>
                <div className='mb-2 row'>
                    <div className="newproduct-title col-6">
                        <div to="" title="Sản phẩm mới" style={{ textDecoration: 'none' }}>
                            <p><Link to="" className='txt-name'>SẢN PHẨM MỚI</Link></p>
                            <p className="">Chúng tôi luôn cập nhật những sản phẩm mới nhất!</p>
                        </div>
                    </div>
                    <div className="col-6 mt-5">
                        <Link to="" title="Sản phẩm mới" style={{ textDecoration: 'none' }}>
                            <p style={{ color: 'rgb(203,6,6)', fontWeight: 'bold' }} className='text-right'>Xem tất cả</p>
                        </Link>
                    </div>
                </div>
                <Swiper

                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={5}
                    navigation
                >
                    {

                        newProduct.map((item) => (
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
    )
}
export default NewProduct;