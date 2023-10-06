import httpAxios from "../httpAxios";

function getProductAll(limit)
{
    return httpAxios.get(`product_all/${limit}`);
}

function getProductSale(limit,type)
{
    return httpAxios.get(`product_sale/${limit}/${type}`);
}

function getProductBySlug(slug)
{
    return httpAxios.get(`product_detail/${slug}`);
}
function getProductByCategoryId(limit,category_id)
{
    return httpAxios.get(`product_category/${limit}/${category_id}`);
}
function getProductByBrandId(limit,brand_id)
{
    return httpAxios.get(`product_brand/${limit}/${brand_id}`);
}
function getAll()
{
    return httpAxios.get('product/index');
}
function getById(id) {

    return httpAxios.get(`product/show/${id}`);

}
function create(product) {
    return httpAxios.post('product/store',product);

}
function update(product,id) {

    return httpAxios.post(`product/update/${id}`,product);

}
function remove(id) {
    return httpAxios.delete(`product/destroy/${id}`);
}
function getProductHome(limit,category_id){

    return httpAxios.get(`product_home/${limit}/${category_id}`);

}
function getSearchProduct(keyword){
    return httpAxios.get(`search_product/${keyword}`);
}

const productservice={
    getProductSale:getProductSale,
    getSearchProduct:getSearchProduct,
    getProductByCategoryId:getProductByCategoryId,
    getProductByBrandId:getProductByBrandId,
    getProductBySlug:getProductBySlug,
    getProductAll:getProductAll,
    getProductHome:getProductHome,
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove,

}
export default productservice;