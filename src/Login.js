
import { Link } from "react-router-dom";


const Login = ({loginName,setLoginName,loginPassword,setLoginPassword,retypePassword,setRetypePassword,logining,popUp,setPopUp}) => {
    const valid = ()=>{
         if(!loginPassword || !retypePassword){
             return "enter password first";
         }
         else
         {
          if(loginPassword===retypePassword){
           
            return "password matching";
          }
          else
          {
            
            return "password not matching";
          }

         }

      
    }
  return (
    <div className="login">
        <form onSubmit={(e)=>{
           e.preventDefault();
           const obj ={userName:loginName,password:loginPassword,role:"USER"};
           logining(obj);
                            }
          }>
            <input placeholder="enter name" type = "text" required value={loginName} onChange={(e)=>setLoginName(e.target.value)} />
            <input placeholder='enter password' type = "password" required value={loginPassword} minLength={5} maxLength={10} onChange={(e)=>setLoginPassword(e.target.value)} />
            <input placeholder='retype password' type = "password" required value={retypePassword} minLength={5} maxLength={10} onChange={(e)=>setRetypePassword(e.target.value)}/>
            <span style={{color:(valid()==="pasword mathing"||valid()==="enter password first") ? "white" : "red"}}>{valid()}</span>
            <button type="submit">submit</button>
            <input type="text" value='click down to login' style={{textAlign:"center",textTransform:"uppercase"}}readOnly/>
            <Link className="link" style={{color:"white",textTransform:"uppercase",width:"100%",textAlign:"center"}} to="/sign">login</Link>
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

export default Login;