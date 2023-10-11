import { Link } from "react-router-dom";
import { urlImage } from "../../config";
import { FaCartPlus } from 'react-icons/fa';

function ProductItem(props) {
    return (
        <div className="col-md-3 d-flex align-items-center">
            <div className="product-item border">
                <div className="product-image">
                    <Link to={"/chi-tiet-san-pham/"+props.product.slug}>
                        <img src={urlImage+ "product/"+props.product.image} className="img-fluid" alt={props.product.image}/>
                    </Link>
                </div>
                <div className="product-name p-2">
                    <h3 className="text-center fs-6 text-danger">
                        <Link to ={"/chi-tiet-san-pham/"+props.product.slug}>
                            {props.product.name}
                            </Link>
                            </h3>
                </div>
                <div className="product-price">
                    <div className="row">
                        <div className="col-5">
                            <strong className="text-danger fs-3">{props.product.pricesale}<sup>đ</sup></strong>
                        </div>
                        <div className="col-7 text-end">
                            <del className="fs-5">{props.product.price}</del><sup>đ</sup>
                        </div>
                    </div>
                </div>
                <div className="link-detail">{props.product.detail}</div>
                <div className="text-center"> <div className="btn btn-warning"><FaCartPlus/></div></div>
            </div>
        </div>
    )
}
export default ProductItem;
