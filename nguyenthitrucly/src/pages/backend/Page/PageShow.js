import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { useState } from "react";
import { useEffect } from "react";
import pageservice from "../../../services/PageServices";
import { urlImage } from "../../../config";


function PageShow() {
    const navigate=useNavigate();
    const { id } = useParams("id");
    const [page, setPage] = useState([]);
    useEffect(function () {
        (async function () {
            await pageservice.getById(id).then(function (result) {
                setPage(result.data.page);
            });
        })();

    }, []);

    function pageDelete(id){
        pageservice.remove(id).then(function(result){
            alert(result.data.message);
            navigate('../../admin/page', { replace: true });
        });
    }

    return (

        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT TRANG ĐƠN</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to={"/admin/page"}>
                            <FaPlus />Về danh sách
                        </Link>
                        <Link className="btn btn-sm btn-primary me-1 " to={"/admin/page/update/" + page.id}>
                            <FaEdit /> Sửa
                        </Link>
                        <button onClick={()=>pageDelete(page.id)}className="btn btn-sm btn-danger">
                            <FaTrash />Xóa
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Tên trường</th>
                            <th>Giá trị</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{page.id}</td>
                        </tr>
                        <tr>
                            <th>tên bài viết</th>
                            <td>{page.name}</td>
                        </tr>
                        {/* <tr>
                            <th>Link</th>
                            <td>{page.link}</td>
                        </tr> */}

                        <tr>
                            <th>Tên thương hiệu</th>
                            <td>{page.slug}</td>
                        </tr>
                        <tr>
                            <th>chi tiết</th>
                            <td>{page.detail}</td>
                        </tr>
                        <tr>
                            <th>kiểu</th>
                            <td>{page.type}</td>
                        </tr>
                        {/* <tr> */}
                            {/* <th>từ khóa</th>
                            <td>{page.metakey}</td>
                        </tr>
                        <tr>
                            <th>mô tả</th>
                            <td>{page.metadesc}</td>
                        </tr>
 */}
                        <tr>
                            <th>ngày tạo</th>
                            <td>{page.created_at}</td>
                        </tr>

                        {/* <tr>
                            <img src={urlImage+'page/'+page.image} alt="hinh" className="img-fluid"
                             style={{maxWidth:100,maxHeight:100}} />
                        </tr>
 */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default PageShow;   