import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaTrash } from 'react-icons/fa';
import { useState } from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import orderdetailservice from "../../../services/OrderdetailServices";

function OrderdetailList() {
    const [statusdel,setStatusDelete]=useState(0);
    const [orderdetails,setOrderdetails]=useState([]);
    useEffect(function(){
        (async function(){
            await orderdetailservice.getAll().then(function(result){
                setOrderdetails(result.data.orderdetails);
            });
        })();

    },[statusdel]);   
    function orderdetailDelete(id){
        orderdetailservice.remove(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id)
        });
    }
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT ĐƠN HÀNG</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to={"/admin/orderdetail/create"}>
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
                            <th className="text-center">Mã đơn hàng</th>
                            <th className="text-center">Mã sản phẩm</th>
                            <th className="text-center">Giá</th>
                            <th className="text-center">số lượng</th>
                            <th className="text-center">Tổng cộng</th>
                            <th className="text-center">Ngày đặt</th>
                            <th style ={{width :150}}className="text-center">Chức năng</th>
                            <th className="text-center">ID</th>


                        </tr>
                    </thead>
                    <tbody>
                        {orderdetails.map(function (orderdetail, index) {
                            return (
                                <tr key={index}>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    {/* <td>
                                        <img src={urlImage+'orderdetail/'+orderdetail.image} alt="hinh.png" className="img-fluid"
                                        style={{maxWidth:100,maxHeight:100}} />
                                   
                                    </td> */}
                                    <td>{orderdetail.order_id}</td>
                                    <td>{orderdetail.product_id}</td>
                                    <td>{orderdetail.price}</td>
                                    <td>{orderdetail.quality}</td>
                                    <td>{orderdetail.amount}</td>
                                    <td>{orderdetail.created_at}</td>

                                    <td>
                                        <Link className="btn btn-sm btn-info me-1 " to={"/admin/orderdetail/show/"+orderdetail.id}>
                                            <FaRegEye />
                                        </Link>
                                        {/* <Link className="btn btn-sm btn-primary me-1 " to={"/admin/orderdetail/update/"+orderdetail.id}>
                                            <FaEdit/>
                                        </Link> */}
                                        <button onClick={()=>orderdetailDelete(orderdetail.id)} className="btn btn-sm btn-danger">
                                            <FaTrash/>
                                        </button>
                                    </td>
                                    <td>{orderdetail.id}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default OrderdetailList;
