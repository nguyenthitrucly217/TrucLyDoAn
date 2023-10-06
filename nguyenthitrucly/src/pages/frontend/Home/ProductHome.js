import { useState } from "react";
import ProductItem from "../../../components/frontend/ProductItem";
import { useEffect } from "react";
import productservice from "../../../services/ProductServices"
import { Link } from "react-router-dom";

function ProductHome(props){
    const [products,setProducts]=useState([]);
    useEffect(function(){
        (async function(){
            await productservice.getProductHome(4, props.category.id)
            .then(function(result){
                setProducts(result.data.products);
            });
        })();
    },[]);
if (products!=null)
{
return (
    <div className="container">
    <div className="product-category">
        <h3 className="text-center text-danger">{props.category.name}</h3></div>
        <div className="row">
            {products.map(function (product, index) {
                return <ProductItem product={product} key={index} />
            })}
        </div>
        <div className="text-center my-4">
            <Link to={"san-pham/"+props.category.slug}className="btn btn-success">Xem thêm</Link>
        </div>
    </div>

);
        }
}

export default ProductHome;