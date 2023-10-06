import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import pageservice from "../../../services/PageServices";
function PageCreate() {
    const navigate = useNavigate ();
    const [pages,setPages]=useState([]);
    useEffect(function(){
        (async function(){
            await pageservice.getAll().then(function(result){
                setPages(result.data.pages);
            });
        })();
    },[]);
    // const [link, setLink] = useState("");
    const [slug, setSlug] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [detail, setDetail] = useState("");
    const [status, setStatus] = useState("1");

    async function pageStore(event) {
        event.preventDefault();

        var page= new FormData();
        // page.append("link",link);
        page.append("slug",slug);
        page.append("detail",detail);
        page.append("name",name);
        page.append("type",type);
        page.append("status",status);
        await pageservice.create(page)
            .then(function (res) {
                alert(res.data.message)
                navigate("../../admin/page",{replace:true});
            });  
        }
     return (
        <form onSubmit={pageStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">THEM TRANG ĐƠN</strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success">Lưu</button>
                            <Link to="/admin/page" className="btn btn-sm btn-info">Về danh sách</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                        <div className="mb-3">
                                <label htmlFor="name">tên</label>
                                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control"></input>
                            </div>
                            {/* <div className="mb-3">
                                <label htmlFor="name">link</label>
                                <input type="text" name="name" value={link} onChange={(e) => setLink(e.target.value)} className="form-control"></input>
                            </div> */}
                            {/* <div className="mb-3">
                                <label htmlFor="name">tên bài viết</label>
                                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control"></input>
                            </div>
 */}
                            <div className="mb-3">
                                <label htmlFor="name">ten thuong hieu</label>
                                <input type="text" name="name" value={slug} onChange={(e) => setSlug(e.target.value)} className="form-control"></input>
                            </div>

                        </div>
                        <div className="col-md-3">
                                <div className="mb-3">
                                <label htmlFor="name">chi tiet</label>
                                <textarea type="text" name="name" value={detail} onChange={(e) => setDetail(e.target.value)} className="form-control"></textarea>
                            </div>
                                <div className="mb-3">
                                <label htmlFor="name">kiểu</label>
                                <textarea type="text" name="name" value={type} onChange={(e) => setType(e.target.value)} className="form-control"></textarea>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="status">Trạng thái</label>
                                <select name="status" className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                </select>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="card-footer"></div>
            </div>
        </form>
    );
}

export default PageCreate;