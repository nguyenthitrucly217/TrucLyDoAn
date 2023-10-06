import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import topicservice from "../../../services/TopicServices";
function TopicShow() {
    const navigate=useNavigate();
    const { id } = useParams("id"); //"id" trong routes
    const [topic, setTopic] = useState([]);
    useEffect(function () {
        (async function () {
            await topicservice.getById(id).then(function (result) {
                setTopic(result.data.topic);
            });
        })();
    }, []);
    function topicDelete(id){
        topicservice.remove(id).then(function(result){
            alert(result.data.message);
            navigate('../../admin/topic', { replace: true });
        });
    }

    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT TOPIC</strong></div>
                    <div className="col-md-6 text-end " >
                        <Link to="/admin/topic" className="btn btn-sm btn-info me-2">
                            Về danh sách
                        </Link>
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/topic/update/" + topic.id}>
                            <FaEdit />Sửa </Link>
                        <button onClick={() => topicDelete(topic.id)} className="btn btn-sm btn-danger me-2"><FaTrash />Xóa</button>
                    </div>

                </div>
            </div>

            <div className="card-body">
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{topic.id}</td>
                        </tr>
                        <tr>
                            <th>Tên thương hiệu</th>
                            <td>{topic.name}</td>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <td>{topic.slug}</td>
                        </tr>
                        <tr>
                            <th>Ngày tạo</th>
                            <td>{topic.created_at}</td>
                        </tr>
                        <tr>
                            <th>Mô tả</th>
                            <td>{topic.metadesc}</td>
                        </tr>
                        <tr>
                            <th>Từ Khóa</th>
                            <td>{topic.metakey}</td>
                        </tr>

                        <tr>
                            <th>Parent_id</th>
                            <td>{topic.parent_id}</td>
                        </tr>


                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default TopicShow;