import httpAxios from "../httpAxios";

function getAll()
{
    return httpAxios.get('post/index');
}

function getAllPa()
{
    return httpAxios.get('post/indexPa');
}

function getById(id) {

    return httpAxios.get(`post/show/${id}`);
}
function getPostByTopicId(limit,topic_id)
{
    return httpAxios.get(`post_topic/${limit}/${topic_id}`);
}
function getPostHome(limit,type) {

    return httpAxios.get(`post_list/${limit}/${type}`);
}
function getPostById(id) {

    return httpAxios.get(`post_detail/${id}`);
}

function getPostAll(limit) {

    return httpAxios.get(`post_all/${limit}`);
}

function create(post) {
    return httpAxios.post('post/store',post);

}
function update(post,id) {

    return httpAxios.post(`post/update/${id}`,post);


}
function remove(id) {
    return httpAxios.delete(`post/destroy/${id}`);

}
function getByPa(type)
{
    return httpAxios.get(`post_listPa/${type}`);
}

const postservice={
    getByPa:getByPa,
    getAllPa:getAllPa,
    getPostByTopicId:getPostByTopicId,
    getPostById:getPostById,
    getPostHome:getPostHome,
    getPostAll:getPostAll,
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove,

}
export default postservice;