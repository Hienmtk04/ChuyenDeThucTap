import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import '../../../assets/home/productcard.css';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from "../../../api/axios";

const SelectOption = ({ products, setFilteredProducts, handleFilterChange }) => {
    const [selectArrange, setSelectArrange] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectCat, setSelectCat] = useState(null);

    useEffect(() => {
        axiosInstance.get('/categories')
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.log("Error fetching categories: ", error);
            });
    }, []);

    useEffect(() => {
        let filtered = [...products];

        // Filter by selected category
        if (selectCat) {
            filtered = filtered.filter(product => product.category_id === selectCat.category_id);
        }

        // Apply sorting
        if (selectArrange === 'item1') {
            filtered.sort((a, b) => a.product_name.localeCompare(b.product_name));
        } else if (selectArrange === 'item2') {
            filtered.sort((a, b) => b.product_name.localeCompare(a.product_name));
        } else if (selectArrange === 'item3') {
            filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        } else if (selectArrange === 'item4') {
            filtered.sort((a, b) => a.product_price - b.product_price);
        } else if (selectArrange === 'item5') {
            filtered.sort((a, b) => b.product_price - a.product_price);
        }

        setFilteredProducts(filtered);
    }, [selectArrange, selectCat, products, setFilteredProducts]);

    return (
        <>
            <div className="row text-center" style={{ backgroundColor: '#f0eeeb' }}>
                <ul className="btn-filter">
                    <li className="dropdown mx-4" onClick={() => setSelectCat(null)}>
                        <input
                            type="radio"
                            style={{ cursor: 'pointer' }}
                            checked={selectCat === null}
                            readOnly
                        /> Tất cả
                    </li>
                    {categories.map((item) => (
                        <li key={item.category_id} className="dropdown mx-4" onClick={() => setSelectCat(item)}>
                            <input
                                type="radio"
                                style={{ cursor: 'pointer' }}
                                checked={selectCat?.category_id === item.category_id}
                                readOnly
                            /> {item.category_name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="arrange">
                <div className="arrange-title">
                    <img src={require('../../assets/images/icons/FontAwesome-Arrow-Down-a-Z-icon.png')} alt="icon" style={{ width: '30px' }} /> Xếp theo
                </div>
                <div className="arrange-item">
                    <Link to="#" className={`item ${selectArrange === 'item1' ? 'true' : ''}`} onClick={() => setSelectArrange('item1')}>Tên A-Z</Link>
                    <Link to="#" className={`item ${selectArrange === 'item2' ? 'true' : ''}`} onClick={() => setSelectArrange('item2')}>Tên Z-A</Link>
                    <Link to="#" className={`item ${selectArrange === 'item3' ? 'true' : ''}`} onClick={() => setSelectArrange('item3')}>Hàng mới</Link>
                    <Link to="#" className={`item ${selectArrange === 'item4' ? 'true' : ''}`} onClick={() => setSelectArrange('item4')}>Giá thấp đến cao</Link>
                    <Link to="#" className={`item ${selectArrange === 'item5' ? 'true' : ''}`} onClick={() => setSelectArrange('item5')}>Giá cao xuống thấp</Link>
                </div>
            </div>
        </>
    );
}
export default SelectOption;
