import { Link } from "react-router-dom";
import { FaPlus,FaRegEye,FaEdit,FaTrash} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";
import { useEffect } from "react";
import postservice from "../../../services/PostServices";
import { urlImage } from "../../../config";
function PostList() {
    const [statusdel,setStatusDelete]=useState(0);
    const [posts,setPosts]=useState([]);
    useEffect(function(){
        (async function(){
            await postservice.getAll().then(function(result){
                setPosts(result.data.posts);
            });
        })();

    },[statusdel]);  
    function postDelete(id){
        postservice.remove(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id)
        });
    }

    
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">Bai viet</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to={"/admin/post/create"}>
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
                            <th className="text-center">chu de</th>
                            {/* <th className="text-center">ten bai viet</th> */}
                            <th className="text-center">ten thuong hieu</th>
                            <th className="text-center">chi tiet</th>
                            <th className="text-center">kieu</th>
                            <th className="text-center">từ khóa</th>
                            <th className="text-center">mô tả</th>
                            <th style ={{width :250}}className="text-center">Ngày tạo</th>
                            <th style ={{width :150}}className="text-center">Chức năng</th>
                            <th className="text-center">ID</th>

                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(function(post,index){
                            return(
                                <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <img src={urlImage+'post/'+post.image} alt="hinh.png" className="img-fluid" 
                                style={{maxWidth:100,maxHeight:100}}/>
                            </td>
                            <td>{post.title}</td>
                            {/* <td>{post.name}</td> */}
                            <td>{post.slug}</td>
                            <td>{post.detail}</td>
                            <td>{post.type}</td>
                            <td>{post.metakey}</td>
                            <td>{post.metadesc}</td>
                            <td className="text-center">{post.created_at}</td>
                            <td>
                                <Link className="btn btn-sm btn-info me-1 " to={"/admin/post/show/"+post.id}>
                                    <FaRegEye />
                                </Link>
                                <Link className="btn btn-sm btn-primary me-1 " to={"/admin/post/update/"+post.id}>
                                    <FaEdit />
                                </Link>
                                <button  onClick={()=>postDelete(post.id)}className="btn btn-sm btn-danger">
                                    <FaTrash/>
                                </button>
                            </td>
                            <td>{post.id}</td>
                        </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default PostList;   