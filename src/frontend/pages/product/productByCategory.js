import { Link, useParams } from "react-router-dom";
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

function ProductByCategory() {
    const { category_id } = useParams();
    const [productByCategory, setProductByCategory] = useState([]);
    const [colorProduct, setColorProduct] = useState({});
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [category, setCategory] = useState({});
    const [loadingCategory, setLoadingCategory] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);  // Number of products per page

    useEffect(() => {
        axiosInstance.get(`/categories/${category_id}`)
            .then((catResponse) => {
                console.log("Category response: ", catResponse.data);
                setCategory(catResponse.data[0]);
                setLoadingCategory(false);
            })
            .catch(error => {
                console.error("Error loading category data: ", error);
                setLoadingCategory(false);
            });

        axiosInstance.get(`/products/category/${category_id}`)
            .then((response) => {
                setProductByCategory(response.data || []);
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
    }, [category_id]);

    const handleQuickView = (product) => {
        setSelectedProduct(product);
    };

    const [filteredProducts, setFilteredProducts] = useState([]);
    const handleFilterChange = (filterValue) => {
        const filteredProducts = productByCategory.filter(product => product.category === filterValue);
        setFilteredProducts(filteredProducts);
    };


    // Calculate the products to display for the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts ? filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct) : [];

    // Pagination controls
    const totalPages = Math.ceil((productByCategory?.length || 0) / productsPerPage);

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
            <div class="rows" >
                <ul class="breadcrumb">
                    <li class="home ml-5">
                        <Link to="#"><span style={{ color: 'rgb(0, 0, 0)' }}>Trang chủ</span></Link>
                        <span class="mr_lr">&nbsp;<FaChevronRight />&nbsp;</span>
                    </li>
                    <li><strong><span style={{ color: 'rgb(203, 6, 6)' }}>{category.category_name}</span></strong></li>
                </ul>
            </div>
            <div className="all-product-main">
                <div className="banner">
                    <img src={require('../../assets/images/banner/banner_col_1.webp')} alt="Banner" title="Banner" />
                </div>
                <Voucher />
                <div className="all-product-content my-5">
                    <div className="section1">
                        <div className='m-5'>
                            <div className="all-product-title ">
                                <p>{loadingCategory ? "Loading..." : category.category_name}</p>
                            </div>
                            <SelectOption
                                products={productByCategory}
                                setFilteredProducts={setFilteredProducts}  // Pass setFilteredProducts to SelectOption
                            />

                            <div className="product-list row mt-5">
                                {/* Conditionally render products to prevent errors */}
                                {currentProducts.length > 0 ? (
                                    currentProducts.map((item) => (
                                        <ProductCard
                                            key={item.product_id}
                                            product={item}
                                            colors={colorProduct[item.product_id] || []}
                                            onQuickView={handleQuickView} />
                                    ))
                                ) : (
                                    <p>No products available.</p>
                                )}

                                {selectedProduct && (
                                    <ProductQuickView
                                        product={selectedProduct}
                                        color={colorProduct[selectedProduct.product_id] || []}
                                        onClose={() => setSelectedProduct(null)}
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
                </div >
            </div >
        </>
    );
}

export default ProductByCategory;
