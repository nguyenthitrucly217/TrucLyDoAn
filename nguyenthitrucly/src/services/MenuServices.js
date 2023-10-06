import httpAxios from "../httpAxios";

function getAll()
{
    return httpAxios.get('menu/index');
}
function getById(id) {

    return httpAxios.get(`menu/show/${id}`);


}
function create(menu) {
    return httpAxios.post('menu/store',menu);

}
function update(menu,id) {

    return httpAxios.post(`menu/update/${id}`,menu);


}
function remove(id) {
    return httpAxios.delete(`menu/destroy/${id}`);

}
function getByParentId(position,parent_id)
{
    return httpAxios.get(`menu_list/${position}/${parent_id}`);
}
function getBySlug(slug) {

    return httpAxios.get(`menu/show/${slug}`);


}

const menuservice={
    getBySlug:getBySlug,
    getByParentId:getByParentId,
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove,

}
export default menuservice;