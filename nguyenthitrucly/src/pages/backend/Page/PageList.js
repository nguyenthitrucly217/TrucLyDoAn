import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { FaPlus,FaRegEye,FaEdit,FaTrash} from 'react-icons/fa';
import { useState } from "react";
import { useEffect } from "react";
import pageservice from "../../../services/PageServices";
function PageList() {
    const [statusdel,setStatusDelete]=useState(0);
    const [pages,setPages]=useState([]);
    useEffect(function(){
        (async function(){
            await pageservice.getAll().then(function(result){
                setPages(result.data.pages);
            });
        })();

    },[statusdel]);  
    function pageDelete(id){
        pageservice.remove(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id)
        });
    }

    
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">trang don</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to={"/admin/page/create"}>
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
                            {/* <th style ={{width :180}}className="text-center">Hình</th> */}
                            {/* <th className="text-center">chu de</th> */}
                            <th className="text-center">ten bai viet</th>
                            {/* <th className="text-center">link</th> */}
                            <th className="text-center">ten thuong hieu</th>
                            <th className="text-center">chi tiet</th>
                            <th className="text-center">kieu</th>
                            {/* <th className="text-center">từ khóa</th>
                            <th className="text-center">mô tả</th> */}
                            <th style ={{width :250}}className="text-center">Ngày tạo</th>
                            <th style ={{width :150}}className="text-center">Chức năng</th>
                            <th className="text-center">ID</th>

                        </tr>
                    </thead>
                    <tbody>
                        {pages.map(function(page,index){
                            return(
                                <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            {/* <td>
                                <img src={urlImage+'page/'+page.image} alt="hinh.png" className="img-fluid" 
                                style={{maxWidth:100,maxHeight:100}}/>
                            </td> */}
                            {/* <td>{page.title}</td> */}
                            <td>{page.name}</td>
                            {/* <td>{page.link}</td> */}
                            <td>{page.slug}</td>
                            <td>{page.detail}</td>
                            <td>{page.type}</td>
                            {/* <td>{page.metakey}</td>
                            <td>{page.metadesc}</td> */}
                            <td className="text-center">{page.created_at}</td>
                            <td>
                                <Link className="btn btn-sm btn-info me-1 " to={"/admin/page/show/"+page.id}>
                                    <FaRegEye />
                                </Link>
                                <Link className="btn btn-sm btn-primary me-1 " to={"/admin/page/update/"+page.id}>
                                    <FaEdit />
                                </Link>
                                <button  onClick={()=>pageDelete(page.id)}className="btn btn-sm btn-danger">
                                    <FaTrash/>
                                </button>
                            </td>
                            <td>{page.id}</td>
                        </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default PageList;   