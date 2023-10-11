import { Link } from "react-router-dom";
import { FaPlus,FaRegEye,FaEdit,FaTrash} from 'react-icons/fa';
import { useState } from "react";
import { useEffect } from "react";
import brandservice from "../../../services/BrandServices";
import { urlImage } from "../../../config";

function BrandList() {
    const [statusdel,setStatusDelete]=useState(0);
        const [brands,setBrands]=useState([]);
        useEffect(function(){
            (async function(){
                await brandservice.getAll().then(function(result){
                    setBrands(result.data.brands);
                });
            })();
    
        },[statusdel]);
        function brandDelete(id){
            brandservice.remove(id).then(function(result){
                console.log(result.data.message);
                setStatusDelete(result.data.id)
            });
        }
    
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">THƯƠNG HIỆU</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to={"/admin/brand/create"}>
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
                            <th style ={{width :180}} className="text-center">Hình</th>
                            <th className="text-center">Tên sản phẩm</th>
                            <th className="text-center">Chi tiết</th>
                            <th className="text-center">Slup</th>
                            <th style ={{width :250}}className="text-center">Ngày tạo</th>
                            <th style ={{width :150}}className="text-center">Chức năng</th>
                            <th className="text-center">ID</th>


                        </tr>
                    </thead>
                    <tbody>
                        {brands.map(function(brand,index){
                            return(
                                <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <img src={urlImage+'brand/'+brand.image} alt="hinh.png" className="img-fluid"
                                style={{maxHeight:100,maxWidth:100}} />
                            </td>
                            <td >{brand.name}</td>
                            <td >{brand.description}</td>

                            <td>{brand.slug}</td>
                            <td className="text-center">{brand.created_at}</td>
                            <td>
                                <Link className="btn btn-sm btn-info me-1 " to={"/admin/brand/show/"+brand.id}>
                                    <FaRegEye />
                                </Link>
                                <Link className="btn btn-sm btn-primary me-1 " to={"/admin/brand/update/"+brand.id}>
                                    <FaEdit />
                                </Link>
                                <button onClick={()=>brandDelete(brand.id)} className="btn btn-sm btn-danger">
                                    <FaTrash/>
                                </button>
                            </td>
                            <td>{brand.id}</td>
                        </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default BrandList;   