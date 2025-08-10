import React from 'react'

const AddBus = ({addBus,role,popUp,setPopUp}) => {
  return (
    <div className='book'>
        {role==="ROLE_ADMIN" ? (
            <>
        <form onSubmit={(e)=>{
        
            e.preventDefault();
            const data = new FormData(e.target);
            const obj={
                bus:data.get("busname"),
                driverName:data.get("driver"),
                seatCapacity:data.get("seatcap"),
                startPlace:data.get("start"),
                endPlace:data.get("end")
            }
            console.log(data.get("driver"));
            addBus(obj)
        }}>
             <input type="text" name="busname" required placeholder="enter bus name"/>
             <input type="text" name="driver" required placeholder="enter driver name"/>
             <input type="number" name="seatcap" required placeholder='enter seat capacity'/>
             <input type="text" name="start" required placeholder="start place"/>
             <input type="text" name="end" required placeholder='end place'/>
             <button type="submit">add</button>
        </form>
        {popUp && (
        <div className="pop">
          <div className="pop-but">
            <button onClick={() => setPopUp("")}>Close</button>
          </div>
          <p>{popUp}</p>
        </div>
      )}
        </>
        )
        :
        (
          <div className='pop'>
            <div>
                you dont have an access to visit this page
            </div>
            </div>
        )
    }
        </div>
  )
}

export default AddBus