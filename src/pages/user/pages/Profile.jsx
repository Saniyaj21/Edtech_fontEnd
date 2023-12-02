import { useSelector } from "react-redux";
import "./profile.scss";
import { selectUser } from "../../../redux/slices/authSlice";
import Loading from "../../layout/loader/Loading";
import { Link } from "react-router-dom";

function Profile() {
    const { user, status } = useSelector(selectUser);
    const u = user;
    console.log(u);

    9;
    return (
        <>
            {status === "loading" ? (
                <Loading />
            ) : (
                <main>
                    <div className="main">
                        <div className="profile_container">
                            <img
                                className="avatar"
                                src={user?.avatar?.url}
                                alt={user?.avatar?.public_id}
                            ></img>
                            <h3 className="userName">{user?.name}</h3>
                            <h5 className="userMail">{user?.email}</h5>
                        </div>
                        <div className="aside">
                            {/* //  Button Container  */}
                            <div className="buttonContainer">
                                <button role="button" className="editButton">
                                    CP : {user?.cp}{" "}
                                    <i className="fa-solid fa-star"></i>
                                </button>
                                <Link role="button" className="editButton">
                                    <i className="fa-solid fa-pen"></i> Edit
                                    Profile
                                </Link>
                            </div>
                            <div className="top">
                                <div className="contentBox flex-left">
                                    {/* <div className="logo"> */}
                                    <img
                                        src={user?.avatar.url}
                                        alt="college logo"
                                        className="logo"
                                    />
                                    {/* </div> */}
                                    <div className="content">
                                        <h6 className="heading">Institution</h6>
                                        <h3 className="headingContent">
                                            Panskura Banamali College{" "}
                                            <i
                                                className="fa-solid fa-circle-check"
                                                style={{
                                                    color: "#467fe2",
                                                    fontSize: "0.9rem",
                                                }}
                                                title="verified"
                                            ></i>
                                        </h3>
                                        <Link to={"/"}>
                                            Institute info{" "}
                                            <i className="fa-solid fa-up-right-from-square"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="contentBox flex-left">
                                    <img
                                        src={user?.avatar.url}
                                        alt="Team logo"
                                        className="logo"
                                    />
                                    <div className="content">
                                        <h6 className="heading">Your Team</h6>
                                        <h3 className="headingContent">
                                            Your Team Name
                                        </h3>
                                        <Link to={"/"}>
                                            Team info{" "}
                                            <i className="fa-solid fa-up-right-from-square"></i>
                                        </Link>
                                    </div>
                                </div>
                                {/* <div className="contentBox">
                                    <h6 className="heading">Institution</h6>
                                    <h3 className="headingContent">
                                        Panskura Banamali College
                                    </h3>
                                </div> */}
                            </div>
                            <div className="bottom">
                                <Link className="contentBox">
                                    <div className="content">
                                        <h6 className="heading">
                                            Global Rank{" "}
                                        </h6>
                                        <h3 className="headingContent">4500</h3>
                                    </div>

                                    <div className="rankLogo">
                                        <i class="fa-solid fa-ranking-star"></i>
                                    </div>
                                </Link>
                                <Link className="contentBox">
                                    <div className="content">
                                        <h6 className="heading">
                                            Institution Rank
                                        </h6>
                                        <h3 className="headingContent">31</h3>
                                    </div>
                                    <div className="rankLogo">
                                        <i class="fa-solid fa-ranking-star"></i>
                                    </div>
                                </Link>
                                <Link className="contentBox">
                                    <div className="content">
                                        <h6 className="heading">Team Rank</h6>
                                        <h3 className="headingContent">450</h3>
                                    </div>
                                    <div className="rankLogo">
                                        <i class="fa-solid fa-ranking-star"></i>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* User profile:
                    <div>
                        <img
                            src={user?.avatar.url}
                            alt={user?.avatar.public_id}
                        />
                    </div>
                    <p>Name : {user?.name}</p>
                    <p>Email : {user?.email}</p>
                    <p>Role : {user?.role}</p>
                    <p>Joined : {user?.createdAt}</p> */}
                </main>
            )}
        </>
    );
}

export default Profile;
