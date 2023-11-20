import "./sideBar.scss";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
    let location = useLocation();

    return (
        <div className="sidebar">
            <Link to={"/admin/dashboard"}>
                {" "}
                <div
                    className={
                        location.pathname == "/admin/dashboard"
                            ? "activeLocation"
                            : ""
                    }
                >
                    <i className="fa-solid fa-layer-group"></i> Dashboard
                </div>
            </Link>
            <Link to={"/admin/orders"}>
                {" "}
                <div
                    className={
                        location.pathname == "/admin/orders"
                            ? "activeLocation"
                            : ""
                    }
                >
                    {" "}
                    <i className="fa-solid fa-truck-fast"></i> Orders
                </div>
            </Link>
            <Link to={"/admin/users"}>
                {" "}
                <div
                    className={
                        location.pathname == "/admin/users"
                            ? "activeLocation"
                            : ""
                    }
                >
                    <i className="fa-solid fa-users"></i> Users
                </div>
            </Link>
            <Link to={"/"}>
                {" "}
                <div
                    className={
                        location.pathname == "/admin/reviews"
                            ? "activeLocation"
                            : ""
                    }
                >
                    <i className="fa-solid fa-comment"></i> Reviews
                </div>
            </Link>{" "}
            <div>
                <details>
                    <summary>
                        <i className="fa-brands fa-shopify"></i> Product
                    </summary>

                    <Link to={"/admin/products"}>
                        <p
                            className={
                                location.pathname == "/admin/all"
                                    ? "activeLocation"
                                    : ""
                            }
                        >
                            <i className="fa-solid fa-list"></i> All
                        </p>
                    </Link>

                    <Link to={"/admin/products/add"}>
                        <p
                            className={
                                location.pathname == "/admin/new"
                                    ? "activeLocation"
                                    : ""
                            }
                        >
                            <i className="fa-solid fa-plus"></i> New
                        </p>
                    </Link>
                </details>
            </div>
        </div>
    );
};

export default SideBar;
