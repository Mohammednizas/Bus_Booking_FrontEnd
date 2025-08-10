import React from 'react'
import { Link } from 'react-router-dom';

const Booking = ({buses,signName}) => {
  return (
    <div className='booking'>
        <div className="Booking-head">
            <h4>welcome to green bus booking site <span style={{fontSize:"20px",color:"green",textTransform:"uppercase",letterSpacing:"1px" }}>{signName ? signName : "user"}</span></h4>
            <Link to={`/bus/cancelTicket`}><button>cancel ticket</button></Link>
        </div>
        {buses.length>1 ? (
        <div className='booking-site'>
            {
                
                buses.map(item =>{
                    return(
                       
                        <div key={item.busNo}>
                            <h3>Green Bus</h3>
                            <p>bus no = {item.busNo}</p>
                            <p>bus name = {item.bus}</p>
                            <p>driver name = {item.driverName}</p>
                            <p>seat capacity = {item.seatCapacity}</p>
                            <p>start from = {item.startPlace}</p>
                            <p>destiny = {item.endPlace}</p>
                            <p><i>happy journey!..</i></p>
                            <Link className='link' to={`/bus/booking/${item.busNo}`}>
                <button>Book</button>
              </Link>
                        </div>
                    

                    );
                })
            }
            
        </div>)
:
(
    
        <div className="pop">
          <p>there is no buses to display</p>
        </div>
    
)
}
    </div>
  )
}

export default Booking;