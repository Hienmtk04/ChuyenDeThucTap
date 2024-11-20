import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import '../../assets/home/menu.css'
import '../../assets/product/allproduct.css';
import axiosInstance from '../../api/axios';


function Menu() {

    const [menuTree, setMenuTree] = useState([]);

    useEffect(() => {
        axiosInstance.get('/menu')
            .then((response) => {
                setMenuTree(response.data);
            })
            .catch(error => {
                console.log("Error fetching menu: ", error);
            });
    }, []);

    const renderSubMenu = (subMenu) => {
        if (!subMenu || subMenu.length === 0) return null;
        return (
            <ul className='row'>
                {subMenu.map(submenuitem => (
                    <li key={submenuitem.menu_id} className='submenu-item'>
                        <Link to={`/${submenuitem.link}`} className='menu-name'>{submenuitem.menu_name}</Link>
                        {renderSubTitleMenu(submenuitem.submenus)}
                    </li>
                ))}
            </ul>
        );
    };

    const renderSubTitleMenu = (subMenu) => {
        if (!subMenu || subMenu.length === 0) return null;
        return (
            <ul>
                {subMenu.map(submenuitem => (
                    <li key={submenuitem.menu_id}>
                        <Link to={`/${submenuitem.link}`} className='submenu-name'>{submenuitem.menu_name}</Link>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg menu">
                <div className="collapse navbar-collapse itemMenu" id="navbarNav">
                    <ul className="navbar-nav ">
                    {menuTree.map((item) => {
                            const hasSubmenus = item.submenus && item.submenus.length > 0;
                            return (
                                <li key={item.menu_id} className="nav-item menu-dropdown">
                                    <Link 
                                        to={`/${item.link}`}
                                        className={`link-action text-uppercase ${hasSubmenus ? 'dropdown-toggle' : ''}`}>
                                        {item.menu_name}
                                    </Link>
                                    {hasSubmenus && (
                                        <div className="dropdown-menu-content">
                                            <div className='row'>
                                                <div className='img-menu col-3'>
                                                    <img src={require('../assets/images/banner/mega2-1-image.webp')} alt='first' />
                                                </div>
                                                <div className='col-6 justify-content align-items-center'>
                                                    {renderSubMenu(item.submenus)}
                                                </div>
                                                <div className='img-menu col-3'>
                                                    <img src={require('../assets/images/banner/mega1-1-image.webp')} alt='second' />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>

        </>

    );
}
export default Menu;