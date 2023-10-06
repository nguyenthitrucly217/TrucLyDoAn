import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaTrash } from 'react-icons/fa';
import { useState } from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import categoryservice from "../../../services/CategoryServices";
import { urlImage } from "../../../config";

function CategoryList() {
    const [statusdel,setStatusDelete]=useState(0);
    const [categories,setCategories]=useState([]);
    useEffect(function(){
        (async function(){
            await categoryservice.getAll().then(function(result){
                setCategories(result.data.categories);
            });
        })();

    },[statusdel]);   
    function categoryDelete(id){
        categoryservice.remove(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id)
        });
    }
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">DANH MỤC</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to={"/admin/category/create"}>
                            <FaPlus />Thêm
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                        <th style ={{width :50}}>#</th>
                            <th className="text-center">Hình</th>
                            <th className="text-center">Tên dang mục</th>
                            <th className="text-center">Slup</th>
                            <th style ={{width :250}}className="text-center">Ngày tạo</th>
                            <th style ={{width :150}}className="text-center">Chức năng</th>
                            <th className="text-center">ID</th>


                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(function (category, index) {
                            return (
                                <tr key={index}>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        <img src={urlImage+'category/'+category.image} alt="hinh.png" className="img-fluid"
                                        style={{maxWidth:100,maxHeight:100}} />
                                   
                                    </td>
                                    <td>{category.name}</td>
                                    <td>{category.slug}</td>
                                    <td className="text-center">{category.created_at}</td>
                                    <td>
                                        <Link className="btn btn-sm btn-info me-1 " to={"/admin/category/show/"+category.id}>
                                            <FaRegEye />
                                        </Link>
                                        <Link className="btn btn-sm btn-primary me-1 " to={"/admin/category/update/"+category.id}>
                                            <FaEdit/>
                                        </Link>
                                        <button onClick={()=>categoryDelete(category.id)}  className="btn btn-sm btn-danger">
                                            <FaTrash/>
                                        </button>
                                    </td>
                                    <td>{category.id}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default CategoryList;
