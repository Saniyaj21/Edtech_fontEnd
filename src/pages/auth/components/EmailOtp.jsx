import React from 'react'
import Input from '../../componentStore/input/Input'
import vactor from "../register/vector.svg"
import vactor1 from "../register/Vector1.svg"

import "./emailotp.scss"

function EmailOtp() {
  return (
    <>
    <div>

    <h2>OTP Verification</h2>
</div>

<div>
    <Input name={"otp"} type={"number"} placeholder={"OTP"} />
</div>

<div className="action-btn" id='action_otp'>
            <button type="submit">
            <img className="img1" src={vactor} alt="" /><img src={vactor1} alt="" /><span>Previus</span> 
            </button>
            <button type="submit">
             <span>Next</span>  <img className="img1" src={vactor} alt="" /><img src={vactor1} alt="" />
            </button>
          </div>
    </>
  )
}

export default EmailOtp