import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Admin = ({deleteAllBookings,popUp,setPopUp,role,delAllBus}) => {
  return (
    <div className='admin'>
      {role === "ROLE_ADMIN" ? (
       
        
        <nav>
            <li><Link to="/admin/bookings">booking</Link></li>
            <li><Link to="/admin/users">users</Link></li>
            <li><Link to="/admin/addbus">add bus</Link></li>
            <li><Link to="/admin/delbus">delete bus</Link></li>
            <li><Link to="/" > home</Link></li>
            <li><button onClick={()=>deleteAllBookings()}>delete all booking</button></li>
            <li><button onClick={()=>delAllBus()}>delete all bus</button></li>
        </nav>
        
        

      )
      :
      (
        <div className="pop">
        <div> you dont have access to this page</div>
        </div>
      )
    }
        <Outlet/>
    </div>
  )
}

export default Admin;