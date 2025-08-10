import React from 'react'
import { Link } from 'react-router-dom';

const Signin = ({signName,setSignName,signPassword,setSignPassword,signin,popUp,setPopUp}) => {
  return (
    <div className='login'>
        <form onSubmit={(e)=>{e.preventDefault(); const obj={userName:signName,password:signPassword,role:"USER"}; signin(obj)}}>
            <input placeholder='enter valid name' type="text" required value={signName} onChange={(e)=>setSignName(e.target.value)}/>
            <input placeholder="enter valid password" type='password' required value={signPassword} onChange={(e)=>setSignPassword(e.target.value)}/>
            <button type="submit">submit</button>
             <input type="text" value='dont have account? click down' style={{textAlign:"center",textTransform:"uppercase"}} readOnly/>
            <Link className="link" style={{width:"100%",color:"white",textTransform:"uppercase",textAlign:"center"}} to="/login">sign in</Link>
        </form>
        {popUp && (
        <div className="pop">
          <div className="pop-but">
            <button onClick={() => setPopUp("")}>Close</button>
          </div>
          <p>{popUp}</p>
        </div>
      )}
    </div>
  )
}

export default Signin;