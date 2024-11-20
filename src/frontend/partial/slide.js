import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import '../../assets/home/slide.css'
import '../../assets/home/header.css'
import '../assets/css/bootstrap.min.css'
import { IoShirt } from "react-icons/io5";
import { GiTrousers } from "react-icons/gi";
import { GiAmpleDress, GiSkirt } from "react-icons/gi";
import { GiSonicShoes } from "react-icons/gi";
import { FaRedhat } from "react-icons/fa";
import { useEffect, useState } from 'react';
import axiosInstance from '../../api/axios';

function Slide() {
    const [categories, setCategories] = useState([]);
    const [subCategoriesMap, setSubCategoriesMap] = useState({});

    useEffect(() => {
        axiosInstance.get('/categories')
            .then((response) => {
                setCategories(response.data);
                
                response.data.forEach(category => {
                    if (category.parent_id === 0) { 
                        axiosInstance.get(`/categories/${category.category_id}/subcategories`)
                            .then(subResponse => {
                                setSubCategoriesMap(prev => ({
                                    ...prev,
                                    [category.category_id]: subResponse.data
                                }));
                            })
                            .catch(error => {
                                console.log("Error fetching subcategories: ", error);
                            });
                    }
                });
            })
            .catch((error) => {
                console.log("Error fetching categories: ", error);
            });
    }, []);
    return (
        <>
            <section className="section-main main padding-y">
                <main className=" main">
                    <div className="card-body ">
                        <div className="row mx-5 ">
                            <aside className="col-md-3">
                                <div className=' row categoryTop'>
                                    <div className='text-category'>
                                        <b> DANH MỤC SẢN PHẨM </b>
                                    </div>
                                </div>
                                <nav className="nav-home-aside">
                                    <ul className="menu-category">
                                        {categories.map((item) => {
                                            const subCategories = subCategoriesMap[item.category_id] || [];
                                            if (subCategories.length > 0) { 
                                                return (
                                                    <li className="has-submenu" key={item.category_id}>
                                                        <Link to={`/product/category/${item.category_id}`} className='px-3' style={{ whiteSpace: 'pre-wrap'}}>
                                                            {item.category_description}
                                                        </Link>
                                                        <ul className="submenu">
                                                            {(subCategoriesMap[item.category_id]).map(subItem => (
                                                                <li key={subItem.category_id}>
                                                                    <Link to={`/product/category/${item.category_id}`}>{subItem.category_description}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                );
                                            } else {
                                                return (
                                                    <li key={item.category_id}>
                                                        <Link to="#" className='px-3' style={{ whiteSpace: 'pre-wrap'}}>
                                                            <FaRedhat /> &nbsp; {item.category_description}
                                                        </Link>
                                                    </li>
                                                );
                                            }
                                        })}
                                    </ul>
                                </nav>
                            </aside>
                            <div className="col-md-9 slide ">
                                <Carousel id="carousel1_indicator" interval={3000} indicators controls>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={require('../assets/images/header/2d045f6adcd26296f79782c0ed144396.jpg')}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={require('../assets/images/header/6da71bd391c240f776fe6c12866b17e1.jpg')}
                                            alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={require('../assets/images/header/f293bf7395523e1e58bad6aae6f32f11.jpg')}
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>

                    </div>
                    <div className=' justify-content-center' >
                        <div className="align-items-center">
                            <div className='topbar-text'>
                                <div className="marquee-container" style={{ height: '50px', background: 'rgb(203, 6, 6)' }}>
                                    <div className="marquee-text text-uppercase text-center" style={{ color: 'white', fontSize: '30px' }}><b>Ưu đãi bất ngờ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Thời trang không giới hạn    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   Xu hướng thời trang mới nhất </b>  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

            </section>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
        </>
    )
}

export default Slide;
