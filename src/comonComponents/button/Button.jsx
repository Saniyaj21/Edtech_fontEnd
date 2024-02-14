import React from 'react'

function Button({type , name , onButtonChange }) {

  return (
    <>
         <button type={type} onClick={onButtonChange(e)}>
            {name}
         </button>
    </>
  )
}

export default Button