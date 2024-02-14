import React, { useDebugValue, useEffect, useState } from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import dp from "../../../img/profile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, selectUser } from "../../../redux/slices/authSlice";
import Loading from "../../layout/loader/Loading";
import regImage from "./registration.png";
import Input from "../../componentStore/input/Input";
import { Icon } from "@iconify/react";
import vactor from "./Vector.svg";
import vactor1 from "./Vector1.svg";
import vactor2 from "./Vector2.svg"
import vactor4 from "./Vector4.svg"
import EmailOtp from "../components/EmailOtp";

function Register() {
  const [avatar, setAvatar] = useState(dp);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [next, setNext] = useState("simple");

  const dispatch = useDispatch();
  const { isAuthenticated, error, status } = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (isAuthenticated === true) {
      navigate("/");
    }
  }, [dispatch, isAuthenticated, error, status, navigate]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setAvatar(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      console.log("Error happened");
    }
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Confirm Password!");
    } else {
      const myForm = new FormData();

      myForm.set("name", userName);
      myForm.set("email", email);
      myForm.set("password", password);
      console.log(userName, email, password);
      myForm.set("avatar", avatar);
      dispatch(registerUser(myForm));
      setNext("otp_section");
    }
  };

  const inputHandle = (name, value) => {
    console.log({ name, value });
  };


  // progress bar logic(mobile)
  const viewportWidth = window.innerWidth;
  const progress = document.getElementById("progress");
  if(viewportWidth < 800){

  if (next === "simple") {
    progress.style.border = "solid 5px #EBEBEB";
       
  }
  else if(next === "otp_section"){
    progress.style.borderLeft = "solid 5px #008894";
      
  }
  else if(next === "password_section"){
    progress.style.borderTop = "solid 5px #008894";
  }

  }

  console.log(name);
  return (
    <div className="register">
      <div className="register_new_div">
        {/* image container */}
        <div className="image_container">
          <img src={regImage} alt="" id="progress" />
        </div>

        {/* form container */}
        <div className="form_container">
          <form
            className="form"
            encType="multipart/form-data"
            onSubmit={handleRegister}
          >
            {/* <div className="image-container">
             <img src={avatar} alt='' /> */}

            {/* <label className="label" for="file">
              <img id="image" className="input-image" src={avatar} alt="" />
            </label>
          </div>
          <div className="image-input"> */}
            {/* <input
						className='file-input'
						type='file'
						required
						onChange={handleFileChange}
					/> */}
            {/* <input
              hidden
              className="file-input"
              type="file"
              name="file"
              id="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div> */}
           <div>
                  <h2>Create a new Account</h2>
            </div>

            {next === "simple" ? (
              <>
               {/* name and email container */}
                <div>
                  <Input
                    name={"name"}
                    placeholder={"Name"}
                    type={"name"}
                    onInputChange={inputHandle}
                  />
                </div>
                <div>
                  <Input
                    name={"email"}
                    placeholder={"Email"}
                    type={"email"}
                    onInputChange={inputHandle}
                  />
                </div>
                <div className="action-btn">
                  <button type="submit">
                    <span>Next</span>{" "}
                    <img className="img1" src={vactor} alt="" />
                    <img src={vactor1} alt="" />
                  </button>
                </div>
              </>
            ) :
            
            next === "otp_section"? (
              <>
              {/* otp container  */}
                <div>
                  <Input name={"otp"} type={"number"} placeholder={"OTP"} />
                </div>
                <div className="text_container">
                 <p>Your OTP is sended to your Email id : p***********@gmail.com if not get then check spam section otherwise retry for a new OTP</p>
                </div>
                <div className="action-btn" id="action_otp">
                  <button type="submit" onClick={()=>setNext("simple")}>
                    <img  src={vactor4} alt="" />
                    <img src={vactor2} alt="" className="img2" />
                    <span> Previous</span>
                  </button>
                  <button type="submit" onClick={()=>setNext("password_section")}>
                    <span>Next</span>{" "}
                    <img className="img1" src={vactor} alt="" />
                    <img src={vactor1} alt="" />
                  </button>
                </div>
              </>
            ):
            
            ( <>
              {/* password container  */}
              <div>
                  <Input type={"password"} name={"password"} placeholder={"Password"}/>
              </div>
              <div>
                  <Input type={"password"} name={"confirm password"} placeholder={"Confirm Password"}/>
              </div>
              <div className="action-btn">
                  <button type="submit">
                    <span>Next</span>{" "}
                    <img className="img1" src={vactor} alt="" />
                    <img src={vactor1} alt="" />
                  </button>
                </div>

              </>)
          }

            <div>
              <fieldset className="other_container">
                <legend>or</legend>
                <p>
                  Already registered?
                  <br />
                  <Link to={"/auth/login"} className="login">
                    {" "}
                    Login{" "}
                  </Link>
                </p>
                <button>
                  {" "}
                  <span>contineu with</span>{" "}
                  <Icon className="google_logo" icon="logos:google-icon" />
                </button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
