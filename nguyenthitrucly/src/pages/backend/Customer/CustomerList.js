import { Link } from "react-router-dom";
import { FaPlus,FaRegEye,FaEdit,FaTrash} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";
import { useEffect } from "react";
import userservice from "../../../services/UserServices";
import { urlImage } from "../../../config";
function CustomerList() {
    const [statusdel,setStatusDelete]=useState(0);
    const [users,setUsers]=useState([]);
    useEffect(function(){
        (async function(){
            await userservice.getAllCus().then(function(result){
                setUsers(result.data.users);
            });
        })();

    },[statusdel]);   
    function userDelete(id){
        userservice.remove(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id)
        });
    }
      return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">TẤT CẢ KHÁCH HÀNG</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to={"/admin/user/create"}>
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
                            <th style ={{width :180}}className="text-center">Hình</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Phone</th>
                            <th className="text-center">Tên người dùng</th>
                            <th className="text-center">Password</th>
                            <th className="text-center">Địa chỉ</th>
                            <th className="text-center">Vai trò</th>
                            <th style ={{width :250}}className="text-center">Ngày tạo</th>
                            <th style ={{width :150}}className="text-center">Chức năng</th>
                            <th className="text-center">ID</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map(function(user,index){
                            return(
                                <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <img src={urlImage+'user/'+user.image} alt="hinh.png" className="img-fluid"
                                 style={{maxWidth:100,maxHeight:100}} />
                            </td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>{user.address}</td>
                            <td>{user.roles}</td>
                            <td className="text-center">{user.created_at}</td>
                            <td>
                                <Link className="btn btn-sm btn-info me-1 " to={"/admin/user/show/"+user.id}>
                                    <FaRegEye />
                                </Link>
                                <Link className="btn btn-sm btn-primary me-1 " to={"/admin/user/update/"+user.id}>
                                    <FaEdit />
                                </Link>
                                <button onClick={()=>userDelete(user.id)} className="btn btn-sm btn-danger">
                                    <FaTrash/>
                                </button>
                            </td>
                            <td>{user.id}</td>
                        </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default CustomerList;   