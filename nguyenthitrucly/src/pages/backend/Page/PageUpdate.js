import { Link, useNavigate, useParams } from "react-router-dom";
import pageservice from "../../../services/PageServices";
import { useEffect, useState } from "react";

function PageUpdate() {
    const {id} =useParams('id');
    const navigate = useNavigate ();
    // const [page,setPage]=useState([]);
    const [pages,setPages]=useState([]);
    useEffect(function(){
        (async function(){
            await pageservice.getAll().then(function(result){
                setPages(result.data.pages);
            });
        })();

    },[]);

    useEffect(function(){
        (async function(){
            await pageservice.getById(id).then(function(result){

                const tmp=result.data.page;
                // setPage(tmp);
                // setTopicId(tmp.topic_id);
                // setLink(tmp.link);
                setSlug(tmp.slug);
                setName(tmp.name);
                setDetail(tmp.detail);
                // setMetakey(tmp.metakey);
                // setMetadesc(tmp.metadesc);
                setType(tmp.type)
                setStatus(tmp.status);
             
            });
        })();

    },[]);

    // const [metakey, setMetakey] = useState('');
    // const [metadesc, setMetadesc] = useState('');    
    // const [topic_id, setTopicId] = useState();
    // const [link, setLink] = useState("");
    const [slug, setSlug] = useState("");
    const [name, setName] = useState("");
    const [detail, setDetail] = useState("");
    const [type, setType] = useState("");

    const [status, setStatus] = useState("1");

    async function pageEdit(event) {
        event.preventDefault();
        // const image=document.querySelector("#image")
        //dung upload file len
        var page= new FormData();

        // page.append("topic_id",topic_id);
        // page.append("link",link);
        page.append("slug",slug);
        page.append("detail",detail);
        page.append("type",type);
        page.append("name",name);
        page.append("status",status);
        // page.append("metakey",metakey);
        // page.append("metadesc",metadesc);
        // page.append("image",image.files[0]);

        await pageservice.update(page,id)
            .then(function (res) {
                alert(res.data.message)
                navigate("../../admin/page",{replace:true});
            });
    }
    
    return ( 
        <form onSubmit={pageEdit} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">CẬP NHẬT TRANG ĐƠN</strong>
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
                        {/* <div className="mb-3">
                                <label htmlFor="name">Từ khóa</label>
                                <textarea 
                                    name="metakey"
                                    value={metakey}
                                    onChange={(e) => setMetakey(e.target.value)}
                                    className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Mô tả</label>
                                <textarea 
                                    name="metadesc"
                                    value={metadesc}
                                    onChange={(e) => setMetadesc(e.target.value)}
                                    className="form-control"></textarea>
                            </div> */}


                        <div className="col-md-3">
                                <div className="mb-3">
                                <label htmlFor="name">chi tiet</label>
                                <textarea type="text" name="name" value={detail} onChange={(e) => setDetail(e.target.value)} className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">kieu</label>
                                <input type="text" name="name" value={type} onChange={(e) => setType(e.target.value)} className="form-control"></input>
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

export default PageUpdate;