import { Link } from "react-router-dom";

function Header() {
    return (
        <section className="header bg-primary">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-white" to="/admin">Quản trị</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       Sản phẩm
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/admin/product">Tất cả sản phẩm</Link></li>
                                        <li><Link className="dropdown-item" to="/admin/category">Danh mục</Link></li>
                                        <li><Link className="dropdown-item" to="/admin/brand">Thương hiệu</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       Đơn hàng
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/admin/order">Tất cả đơn hàng</Link></li>
                                        <li><Link className="dropdown-item" to="/admin/orderdetail">Chi tiết đơn hàng</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/admin/contact">Liên hệ</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/admin/menu">Menu</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/admin/post">Post</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/admin/topic">topic</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/admin/slider">slider</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/admin/user">User</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link disabled text-white" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success text-white" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    )
}
export default Header;