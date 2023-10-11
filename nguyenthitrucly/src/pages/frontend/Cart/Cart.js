import React from "react";
import "./style.css";
// import "../../../assets/js/jquery"
function Cart(){
    return(
        <section class="section-content padding-y">
            <div class="container">

                <div class="row">
                    <main class="col-md-9">
                        <div class="card">

                            <table class="table table-borderless table-shopping-cart">
                                <thead class="text-muted">
                                    <tr class="small text-uppercase">
                                        <th scope="col">Product</th>
                                        <th scope="col" width="120">Quantity</th>
                                        <th scope="col" width="120">Price</th>
                                        <th scope="col" class="text-right" width="200"> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <figure class="itemside">
                                                <div class="aside"><img src={require("../../../assets/images/bg.jpg")} class="img-sm"width={50}
                                                height={50} /></div>
                                                <figcaption class="info">
                                                    <a href="#" class="title text-dark">Some name of item goes here nice</a>
                                                    <p class="text-muted small">Size: XL, Color: blue, <br /> Brand: Gucci</p>
                                                </figcaption>
                                            </figure>
                                        </td>
                                        <td>
                                            <select class="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </td>
                                        <td>
                                            <div class="price-wrap">
                                                <var class="price">$1156.00</var>
                                                <small class="text-muted"> $315.20 each </small>
                                            </div>
                                        </td>
                                        <td class="text-right">
                                            <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light mr-1" data-toggle="tooltip"> <i class="fa fa-heart"></i></a>
                                            <a href="" class="btn btn-light"> Remove</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <figure class="itemside">
                                                <div class="aside"><img src={require("../../../assets/images/bg2.jpg")} class="img-sm" /></div>
                                                <figcaption class="info">
                                                    <a href="#" class="title text-dark">Product name  goes here nice</a>
                                                    <p class="text-muted small">Size: XL, Color: blue, <br /> Brand: Gucci</p>
                                                </figcaption>
                                            </figure>
                                        </td>
                                        <td>
                                            <select class="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </td>
                                        <td>
                                            <div class="price-wrap">
                                                <var class="price">$149.97</var>
                                                <small class="text-muted"> $75.00 each </small>
                                            </div>
                                        </td>
                                        <td class="text-right">
                                            <a data-original-title="Save to Wishlist " title="" href="" class="btn btn-light mr-1" data-toggle="tooltip"> <i class="fa fa-heart"></i></a>
                                            <a href="" class="btn btn-light btn-round"> Remove</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <figure class="itemside">
                                                <div class="aside"><img src={require("../../../assets/images/bg3.jpg")} class="img-sm" /></div>
                                                <figcaption class="info">
                                                    <a href="#" class="title text-dark">Another name of some product goes just here as a demo text </a>
                                                    <p class="small text-muted">Size: XL, Color: blue,  Brand: Tissot</p>
                                                </figcaption>
                                            </figure>
                                        </td>





                                        
                                        {/* <div class="container"> 
                                            <div class="row">
                                                <div class="col-md-3 col-md-offset-3">
                                                    <p>min = 1 và max = 9999999999999</p>
                                                    <div class="input-group"> <span class="input-group-btn">
                                                        <button type="button" class="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                                            <span class="glyphicon glyphicon-minus"></span> </button>
                                                    </span>
                                                        <input name="quant[1]" class="form-control input-number" value="1" type="text" fdprocessedid="bp259" />
                                                        <span class="input-group-btn">
                                                            <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]" fdprocessedid="r458gw9">
                                                                <span class="glyphicon glyphicon-plus"></span> </button>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <p>min = 1 và max = 10</p>
                                                    <div class="input-group"> <span class="input-group-btn">
                                                        <button type="button" class="btn btn-danger btn-number" data-type="minus" data-field="quant[2]" fdprocessedid="o0se1s">
                                                            <span class="glyphicon glyphicon-minus"></span>
                                                        </button></span> <input name="quant[2]" class="form-control input-number" value="1" min="1" max="10" type="text" fdprocessedid="5ltnst" /> <span class="input-group-btn">
                                                            <button type="button" class="btn btn-success btn-number" data-type="plus" data-field="quant[2]" fdprocessedid="yr9pb">
                                                                <span class="glyphicon glyphicon-plus"></span> </button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                        {/* <td>
                                            <select class="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </td> */}
                                        <td>
                                            <div class="price-wrap">
                                                <var class="price">$98.00</var>
                                                <small class="text-muted"> $578.00 each</small>
                                            </div>
                                        </td>
                                        <td class="text-right">
                                            <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light mr-1" data-toggle="tooltip"> <i class="fa fa-heart"></i></a>
                                            <a href="" class="btn btn-light btn-round"> Remove</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* <div class="card-body border-top">
                                <a href="#" class="btn btn-primary float-md-right"> Make Purchase <i class="fa fa-chevron-right"></i> </a>
                                <a href="#" class="btn btn-light"> <i class="fa fa-chevron-left"></i> Continue shopping </a>
                            </div> */}
                        </div>

                        <div class="alert alert-success mt-3">
                            <p class="icontext"><i class="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
                        </div>

                    </main>
                    <aside class="col-md-3">
                        {/* <div class="card mb-3">
                            <div class="card-body">
                                <form>
                                    <div class="form-group">
                                        <label>Have coupon?</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="" placeholder="Coupon code" />
                                            <span class="input-group-append ms-2">
                                                <button class="btn btn-primary">Apply</button>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div> */}
                        <div class="card">
                            <div class="card-body">
                                <dl class="dlist-align">
                                    <dt>Total price:</dt>
                                    <dd class="text-right">USD 568</dd>
                                </dl>
                                <dl class="dlist-align">
                                    <dt>Discount:</dt>
                                    <dd class="text-right">USD 658</dd>
                                </dl>
                                <dl class="dlist-align">
                                    <dt>Total:</dt>
                                    <dd class="text-right  h5"><strong>$1,650</strong></dd>
                                </dl>
                                <hr />
                                <a href="thong-tin"className="text-decoration-none ms-6" >Thanh toan</a>

                                {/* <p class="text-center mb-3">
                                    <img src={require("../../assets/images/misc/payments.png")} height="26" />
                                </p> */}

                            </div>
                        </div>
                    </aside>
                </div>

            </div>
        </section>

    );
}
export default Cart;