import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import '../../../assets/home/deal.css';
import '../../../assets/home/productcard.css';
import '../../../assets/product/allproduct.css'
import Voucher from "../../components/product/voucher";
import SelectOption from "../../components/product/selectOption";
import axiosInstance from "../../../api/axios";
import ProductCard from "../../components/product/productCard";
import ProductQuickView from "../../components/product/popupProduct";
import { useSearchParams } from 'react-router-dom';
import { all } from "axios";

function AllProduct() {
    const [allProduct, setAllProduct] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [colorProduct, setColorProduct] = useState({});
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);

    const searchQuery = searchParams.get('query');

    useEffect(() => {
        axiosInstance.get('/products')
            .then((response) => {
                let filteredProducts = response.data;

                if (searchQuery) {
                    filteredProducts = filteredProducts.filter((item) =>
                        item.product_name.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                }

                setAllProduct(filteredProducts);
                setFilteredProducts(filteredProducts);

                const colorRequests = filteredProducts.map((item) =>
                    axiosInstance.get(`/products-color/${item.product_id}/product`)
                );

                Promise.all(colorRequests)
                    .then((colorResponses) => {
                        const colors = colorResponses.reduce((acc, response, index) => {
                            acc[filteredProducts[index].product_id] = response.data;
                            return acc;
                        }, {});
                        setColorProduct(colors);
                    })
                    .catch(error => {
                        console.log("Error in loading colors: ", error);
                    });
            })
            .catch(error => {
                console.log("Error in loading DB: ", error);
            });
    }, [searchQuery]);

    const handleQuickView = (product) => {
        setSelectedProduct(product);
    }

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <>
            <div className="rows">
                <ul className="breadcrumb">
                    <li className="home ml-5">
                        <Link to="#"><span style={{ color: 'rgb(0, 0, 0)' }}>Trang chủ</span></Link>
                        <span className="mr_lr">&nbsp;<FaChevronRight />&nbsp;</span>
                    </li>
                    <li><strong><span style={{ color: 'rgb(203, 6, 6)' }}> Tất cả sản phẩm</span></strong></li>
                </ul>
            </div>

            <div className="all-product-main">
                <div className="banner">
                    <img src={require('../../assets/images/banner/banner_col_1.webp')} alt="Banner" title="Banner" />
                </div>
                <Voucher />

                <div className="all-product-content my-5">
                    <div className="section1">
                        <div className="m-5">
                            <div className="all-product-title">
                                <p>Tất cả sản phẩm</p>
                            </div>
                            <SelectOption
                                products={allProduct}
                                setFilteredProducts={setFilteredProducts}
                            />

                            <div className="product-list row mt-5 justify-content-center">
                                {
                                    currentProducts.map((item) => (
                                        <ProductCard
                                            key={item.product_id}
                                            product={item}
                                            colors={colorProduct[item.product_id] || []}
                                            onQuickView={handleQuickView}
                                        />
                                    ))
                                }
                                {selectedProduct && (
                                    <ProductQuickView
                                        product={selectedProduct}
                                        color={colorProduct[selectedProduct.product_id] || []}
                                        onClose={() => setSelectedProduct(null)}
                                        toggle={true}
                                    />
                                )}
                            </div>

                            <div className="pagination">
                                <button onClick={handlePreviousPage} disabled={currentPage === 1} className="mx-4 p-2 w-45">
                                    Trước
                                </button>

                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                                    <span
                                        key={pageNumber}
                                        onClick={() => setCurrentPage(pageNumber)}
                                        style={{
                                            margin: '0 5px',
                                            cursor: 'pointer',
                                            backgroundColor: currentPage === pageNumber ? 'rgb(203,6,6)' : 'white',
                                            color: currentPage === pageNumber ? 'white' : 'rgb(203,6,6)',
                                            padding: '10px 20px',
                                            fontWeight: currentPage === pageNumber ? 'bold' : 'normal'
                                        }}
                                    >
                                        {pageNumber}
                                    </span>
                                ))}

                                <button onClick={handleNextPage} disabled={currentPage === totalPages} className="mx-4 w-45 p-2">
                                    Sau
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AllProduct;
