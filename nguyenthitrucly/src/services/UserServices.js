import httpAxios from "../httpAxios";

function getAll()
{
    return httpAxios.get('user/index');
}
function getAllCus()
{
    return httpAxios.get('user/indexcustomer');
}

function getById(id) {

    return httpAxios.get(`user/show/${id}`);


}
function create(user) {
    return httpAxios.post('user/store',user);

}
function update(user,id) {

    return httpAxios.post(`user/update/${id}`,user);


}
function remove(id) {
    return httpAxios.delete(`user/destroy/${id}`);
}

function Login(user) {
    return httpAxios.post(`user/kiem_tra`,user);
}
function Register(user) {

    return httpAxios.post(`user/Register`,user);
}

const userservice={
    getAllCus:getAllCus,
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove,
    Login:Login,
    Register:Register,

}
export default userservice;