import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaTrash } from 'react-icons/fa';
import { useState } from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import orderservice from "../../../services/OrderServices";

function OrderList() {
    const [statusdel,setStatusDelete]=useState(0);

    const [orders,setOrders]=useState([]);
    useEffect(function(){
        (async function(){
            await orderservice.getAll().then(function(result){
                setOrders(result.data.orders);
            });
        })();

    },[statusdel]);   
    function orderDelete(id){
        orderservice.remove(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id)
        });
    }

    
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">ĐƠN HÀNG</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to={"/admin/order/create"}>
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
                            {/* <th className="text-center">Hình</th> */}
                            <th className="text-center">User_id</th>
                            <th className="text-center">Tên đơn hàng</th>
                            <th className="text-center">Số điện thoại</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Địa chỉ</th>
                            <th className="text-center">Ghi chú</th>
                            <th style ={{width :250}}className="text-center">Ngày đặt</th>
                            <th style ={{width :150}}className="text-center">Chức năng</th>
                            <th className="text-center">ID</th>


                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(function (order, index) {
                            return (
                                <tr key={index}>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    {/* <td>
                                        <img src={urlImage+'order/'+order.image} alt="hinh.png" className="img-fluid"
                                        style={{maxWidth:100,maxHeight:100}} />
                                   
                                    </td> */}
                                    <td>{order.user_id}</td>
                                    <td>{order.name}</td>
                                    <td>{order.phone}</td>
                                    <td>{order.email}</td>
                                    <td>{order.address}</td>
                                    <td>{order.note}</td>

                                    <td className="text-center">{order.created_at}</td>
                                    <td>
                                        <Link className="btn btn-sm btn-info me-1 " to={"/admin/order/show/"+order.id}>
                                            <FaRegEye />
                                        </Link>
                                        <Link className="btn btn-sm btn-primary me-1 " to={"/admin/order/update/"+order.id}>
                                            <FaEdit/>
                                        </Link>
                                        <button  onClick={()=>orderDelete(order.id)} className="btn btn-sm btn-danger">
                                            <FaTrash/>
                                        </button>
                                    </td>
                                    <td>{order.id}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default OrderList;
