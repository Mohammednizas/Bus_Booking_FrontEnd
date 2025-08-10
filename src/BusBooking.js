import React from 'react'
import { useParams } from 'react-router-dom';

const BusBooking = ({booking,popUp,setPopUp,userName,setUserName,phno,setPhno,userAddr,setUserAddr,bookedSeat,setBookedSeat,date,setDate,confirmBooking,navigate})=>{
    const {id} = useParams();
  
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(!userName ){
         setPopUp("username should not be empty");
      }
      if(!userAddr){
         setPopUp("username should not be empty");
      }
      if(!(/^\d+$/).test(phno)){
         setPopUp("phno should contains only digits");
      }
      if(phno.length<10 || phno.length>10){
         setPopUp("phno should contain only 10 digits");
      }
      if(Number(id)<=0){
         setPopUp("invalid busno");
      }
      if(new Date().toISOString().split('T')[0]>date){
        setPopUp("enter valid date");
      }
     
             
      const obj = {
              userName,userAddr,phno,busNo:Number(id),bookedSeat,date

                 }
             booking(obj);
             }
    
  return ( 
              <div className='book'>

                <form onSubmit={(e)=>handleSubmit(e)}>
                    <input type="text" required value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                    <label>userName</label>
                     <input type="text" required value={userAddr} onChange={(e)=>setUserAddr(e.target.value)}/>
                    <label>address</label>
                    <input type="text" required value={phno} onChange={(e)=>setPhno(e.target.value)}/>
                    <label>phno</label>
                    <input type="number" required value={Number(id)} readOnly/>
                    <label>bus no</label>
                    <input type="number" required value={bookedSeat} onChange={(e)=>setBookedSeat(e.target.value)}/>
                    <label>no of seats</label>
                    <input type="date" required value={date} onChange={(e)=>setDate(e.target.value)}/>
                    <label>date</label>
                    <button type="submit">book</button>
                </form>
                {typeof popUp !='object' && popUp!=="" &&
                <div className='pop'>
                    <div className='pop-but'>
                        <button onClick={()=>setPopUp("")}>close</button>
                    </div>
                          <p>{popUp}</p>
                        { popUp==="your seats are available"&& <button className='pop-confirm' onClick={()=>{
                             const obj = {
                                          userName,userAddr,phno,busNo:Number(id),bookedSeat,date
                                        }
                            confirmBooking(obj)
                          }}>confirm</button>}
                    </div>
}
                  {
                    typeof popUp === 'object' && 
                    <div className='pop'>
                    <div className='pop-but'>
                        <button onClick={()=>{setPopUp("");navigate('/')}}>close</button>
                    </div>
                    
                          <p>welcome {popUp.userName} your {popUp.bookedSeat} seats are booked and your booking id is {popUp.sno}</p>
                    </div>
                  }
               </div>
  )
}
export default BusBooking;