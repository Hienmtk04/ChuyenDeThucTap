import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../../../api/axios";
function Category() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axiosInstance.get('/categories')
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
    }, []);

    return (
        <section className="category m-5 ">
            <div className=" container listCategory my-5">
                <p style={{ fontWeight: "bold" }} className="category">Danh mục nổi bật</p>
            </div>
            <div className="row justify-content-center">

                {
                    categories.map((item, index) => (
                        <div className="col-md-2" key={item.category_id}>
                            <Link to={`/product/category/${item.category_id}`} className="category1 mt-5" style={{ textDecoration: 'none', width: '200px', height: '200px' }} >
                                <div className="item1" style={{ textAlign: 'center' }}>
                                    <img src={require(`../../assets/images/header/${item.category_image}`)} style={{ width: '200px', height: '200px' }} className="round-image" alt="ÁO" />
                                    <p className="categoryName text-uppercase">{item.category_name}</p>
                                </div>
                            </Link>
                        </div>
                    ))
                }

            </div>
        </section>
    )

}
export default Category;
