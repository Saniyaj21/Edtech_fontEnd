import React from 'react'
import Input from '../../../comonComponents/input/Input'

function Password() {
  return (
    <>
    <div>
        <h2>
            Set your Password
        </h2>

    </div>
    <div>
        <Input type={"password"} name={"password"} placeholder={"Password"}/>
    </div>
    <div>
        <Input type={"password"} name={"confirm password"} placeholder={"Confirm Password"}/>
    </div>
    </>
  )
}

export default Password