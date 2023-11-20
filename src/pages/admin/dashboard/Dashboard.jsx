import React from 'react'
import './Dashbord.scss'
import SideBar from '../components/SideBar'
function Dashbord() {
  return (
    <div className='dashboard'>
    <div className='dash-sidebar'>
      <SideBar />
    </div>
    <div className='dash-right'>
      <div className='dash-head'>
        <h2>Dashboard</h2>
        <b>Total Amount : 3000</b>
      </div>

      <div className='circle-container'>
        <div>
          <div>12</div>
          <p>Products</p>
        </div>
        <div>
          <div>12</div>
          <p>Orders</p>
        </div>
        <div>
          <div>13</div>
          <p>Users</p>
        </div>
      </div>
      
    </div>
  </div>
  )
}

export default Dashbord