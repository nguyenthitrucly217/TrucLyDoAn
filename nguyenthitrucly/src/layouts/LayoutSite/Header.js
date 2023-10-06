import { useState } from 'react';
import Logo from '../../assets/images/logoLy.png';
import { FaCartPlus, FaSearch} from 'react-icons/fa';
// import  Search  from '../LayoutSite/Search';
function Header() {
    const[keyword, setKeyword]= useState("");
    return (
        <section className="header">
            <div className="container">
                <div className="row gy-2 gx-3 align-items-center">
                    <div className="col-md-3">
                        <img style={{width:100}} src={Logo} className="img-fluid" alt="LOGO" />
                    </div>
                    <div class="col-md-5">
                        {/* <Search/> */}
                        <label class="visually-hidden" for="autoSizingInputGroup">Enter product name</label>
                       <form action={"/tim-kiem/" +keyword} method="">
                        <div class="input-group">
                            <input onChange={(e)=>setKeyword(e.target.value)} type="text" class="form-control" placeholder="Enter product name" />
                            <button class="btn btn-success" type ="submit"><i class=""><FaSearch/></i></button>                      
                              </div></form>
                    </div>  

                    {/* <div className="col-md-2">
                        <p> Phone: 1234567891</p>
                    </div> */}

                    <div className="col-md-3">
                    <a href='register' class="btn btn-link">Đăng ký</a>
                    <a href='login' class="btn btn-link">Đăng nhập</a>                 

                    </div>
                    <div className="col-md-1">   <button className="btn btn-primary">
                                   <FaCartPlus/></button> </div> 
                     {/* <div className="col-md-4">TIMKIEM</div> 
            <div className="col-md-3">HHH</div>    
                <div className="col-md-1"><FaCartPlus></div> */}
                </div>
            </div>
        </section>
    );
}
export default Header;