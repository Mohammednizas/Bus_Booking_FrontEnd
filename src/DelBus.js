import React from 'react'

const DelBus = ({delBus,popUp,setPopUp,role}) => {
  return (
    <div className='book'>
        {role==="ROLE_ADMIN" ?(
            <>
           <form onSubmit={(e)=>{
            e.preventDefault();
            const data = new FormData(e.target);
            delBus(data.get("num"));
           }}>
            <input type="number" required name="num" placeholder='enter bus no'/>
            <button type="submit">delete</button>
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
           <div>
            you dont have an access to this page..
            </div>
        )
    }
    </div>
  )
}

export default DelBus;