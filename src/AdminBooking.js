import React from 'react'

const AdminBooking = ({bookings,role}) => {
  
       
  return (
    <div className='adminbooking'>
        {bookings.length>0 ? (
      <table>
        <thead>
        <tr>
          <th>sno</th>
          <th>user name</th>
          <th>user address</th>
          <th>phno</th>
          <th>busno</th>
          <th>booking seat</th>
          <th>date</th>
        </tr>
        </thead>
        <tbody>
      {
        bookings.map((item,index) =>{
          return(
            <tr key={index}>
              <td>{item.sno}</td>
              <td>{item.userName}</td>
              <td>{item.userAddr}</td>
              <td>{item.phno}</td>
              <td>{item.busNo}</td>
              <td>{item.bookedSeat}</td>
              <td>{item.date}</td>
            </tr>
            
          )
        })
      }
    

      </tbody>
      </table>
  )
      :(
        <div className='pop'>
      <div> no bookings to display</div>
      </div>
    )
        }
        </div>
      )
}

export default AdminBooking;