import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';

function Nav() {
    let hamberNavClick = document.getElementById('links-open-button');
    let links = document.getElementById('links');
    let nav=document.getElementById('nav')
    function showLinks(){
         
       if(hamberNavClick.innerText === "⭐")
       {
           nav.style.overflow='visible'
           links.style.height='80vh'
           links.style.zIndex =1
          // close.style.display='inline'
           hamberNavClick.innerText='❌'
       }
       else{

        links.style.height='1px'
        nav.style.overflow='hidden'
       
         hamberNavClick.innerText="⭐"
       }

    }
    

  return (
    <div >
         <nav id="nav">
        <div className="logo-container">

         <div className="logo"><b>LOGOS</b></div>
         <div className="hamberNav" onClick={showLinks}  id="links-open-button">
         ⭐
        </div>
          
        </div>
        <div className="links" id="links">
            <a href="http://">🏠 <b className="link-contain"> HOME</b> </a>
            <a href="http://">🙅 <b className="link-contain">ABOUT </b> </a>
            <a href="http://">💻 <b className="link-contain">SERVICE </b> </a>
            <a href="http://">📞 <b className="link-contain"> CONTACT</b> </a>
            <a href="http://">⭐ <b className="link-contain"> REATING</b> </a>
            <Link to={'/home'}> <button className="link-contain"> Home </button> </Link>
            <Link to={'/course'}> <button> Course </button> </Link>
            <Link to={'/register'}> <button> Register </button> </Link>
            <Link to={'/auth/login'}> <button> Log in </button> </Link>
            <Link to={'/auth/login'}> <button> Log in </button> </Link>
        </div>
       
    </nav>
    </div>
  )
}

export default Nav