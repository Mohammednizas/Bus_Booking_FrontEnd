import Navigation from "./Navigation";
import Content from "./Content";
import Login from "./Login";
import Signin from "./Signin";
import BusBooking from "./BusBooking";
import CancelTicket from "./CancelTicket";
import Admin from "./Admin";
import AdminBooking from "./AdminBooking";
import AdminUsers from "./AdminUsers";
import AddBus from "./AddBus";
import DelBus from "./DelBus";
import { Route, Routes, useNavigate } from "react-router-dom";

import { useState,useEffect } from "react";
import Booking from "./Booking";
function App() {
  const [loginName,setLoginName] = useState("");
  const [loginPassword,setLoginPassword] = useState();
  const [retypePassword,setRetypePassword] = useState();
  const [signName,setSignName] = useState("");
  const [signPassword,setSignPassword] = useState();
  const [buses,setBuses] = useState([{}]);
  const [popUp,setPopUp] = useState("");
  const [userAddr,setUserAddr] = useState("");
  const [phno,setPhno]= useState("");
  const [bookedSeat,setBookedSeat] = useState();
  const [date,setDate] = useState('');
  const [userName,setUserName] = useState("");
  const [bookings,setBookings] = useState([{}]);
  const [users,setUsers] = useState([{}]);
  const [role,setRole] = useState(" ");

  const navigate = useNavigate();
  

  const URL = "http://localhost:8080/";
  const signedOrNot = async()=>{
      try{
        const req = await fetch(`${URL}signedOrNot`,{
          method:"GET",
          credentials:"include"
        });
        
          const text = await req.json()
          if(text!=null){
          setSignName(text.username);
          setRole(text.role);
        
          }
      
  console.log(role);
      }
      catch(err){
        console.log(err);
      }
    }
  useEffect(() => {
    
  signedOrNot();
   
  }, [])
  
  const getAllBus = async()=>{
    try{
   const req = await fetch(`${URL}bus`,{
    method:"GET",
    credentials:"include"
   });
   if(req.ok){
      const data = await req.json();
      setBuses(data);
   }

  }
  catch(err){
    console.log(err);
  }
  }
  useEffect(() => {

  (async()=>getAllBus())();
   
  }, [])

  const booking = async(obj)=>
  {

    try{
    const req = await fetch(`${URL}bookings/availability`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      credentials:"include",
      body:JSON.stringify(obj),
    });
    const str =await req.text();
    setPopUp(str);
  
   }
   catch(er){
    console.log(er);
   }
  }
  const confirmBooking = async(obj)=>
    
    {
      try{
    const req = await fetch(`${URL}bookings/post`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      credentials:"include",
      body:JSON.stringify(obj),
    });
    if(req.ok){
      setUserName("");
      setUserAddr("");
      setPhno("");
      setBookedSeat("");
      setDate("");
     const item = await  req.json();
     setPopUp({...item});
    }

    
  
   }
   catch(er){
    console.log(er);
   }
  }
  const deleteBooking = async(can)=>{
         try{
          let val = Number(can);
               const req = await fetch(`${URL}bookings/delete/${val}`,{
                method:"DELETE",
                headers:
                {
                  "Content-Type":"application/json",
                },
                credentials:"include",
                body : JSON.stringify({userName,userAddr,phno,busNo:0,bookedSeat,date})
               });
               console.log(typeof can);
               const str = await req.text();
               setPopUp(str);
         }
         catch(err){
             console.log(err);
         }
  }

  const logining = async(obj) => {
  try{
  const res = await fetch(`${URL}login`,
    {
      method:"POST",
      headers:
      {
       "Content-Type":"application/json",
      },
      credentials:"include",
      body:JSON.stringify(obj)
    }
  )
  const ans = await res.text();
  setLoginName("");
  setLoginPassword("");
  setRetypePassword("");
  console.log(ans);
  setPopUp(ans);
  }
  catch(err){

  }
  }
  const signin = async(obj) => {
  try{
  const res = await fetch(`${URL}signin`,
    {
      method:"POST",
      headers:
      {
       "Content-Type":"application/json",
      },
      credentials:"include",
      body:JSON.stringify(obj)
    }
  )
  setSignName("");
  setSignPassword("");
  if(res.ok){
  const ans = await res.json();
  getAllBookings();
  signedOrNot();
  getUsers();
  if(ans.userName){
   setPopUp(`welcome ${ans.userName} you are successfully signed in..`);
  setSignName(ans.userName);
    getAllBus();

  }
}
  else{
    setPopUp("your credentials are wrong");
    
  }
  
   
    
  }
  catch(err){
 console.log(err);
 setPopUp("")
  }
  }
  const getAllBookings = async()=>{
    try{
      const req = await fetch(`${URL}admin/bookings`,{
        method:"GET",
        credentials:"include",
      })
      const obj = await req.json();
      setBookings(obj);
      console.log(bookings);
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect( ()=>{
  getAllBookings();
  },[])
  const getUsers = async()=>{
    try{
      const req = await fetch(`${URL}admin/users`,{
        method:"GET",
        credentials:"include",
      })
      const obj = await req.json();
      setUsers(obj);
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect( ()=>{
  getUsers();
  },[])
  const addBus = async(obj)=>{
    try{
      const req = fetch(`${URL}admin/bus/post`,{
        method:"POST",
        credentials:"include",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(obj)
      })
      const ans = (await req).text();
      setPopUp(ans);
      getAllBus();
    }
    catch(err){
      console.log(err);
    }
  }
  const delBus = async(id)=>{
    try{
  const req = fetch(`${URL}admin/bus/delete/${id}`,
    {
    method:"DELETE",
    credentials:"include",
    }
  )
  const ans = (await req).text();
  setPopUp(ans);
  getAllBus();
    }
    catch(err){
      console.log(err);
    }
  }
  const deleteAllBookings = async()=>{
    try{
  const req = fetch(`${URL}admin/bookings/delete/all`,
    {
    method:"DELETE",
    credentials:"include",
    }
  )
  const ans = (await req).text();
  setPopUp(ans);
  getAllBookings();
    }
    catch(err){
      console.log(err);
    }
  }

 
  const delAllBus = async()=>{
    try{
  const req = fetch(`${URL}admin/bus/deleteAll`,
    {
    method:"DELETE",
    credentials:"include",
    }
  )
  const ans = (await req).text();
  setPopUp(ans);
  getAllBus();
    }
    catch(err){
      console.log(err);
    }
  }


  

  return (
    
    <div className="Bus_App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Content/>}/>
        <Route path="/login" element={<Login loginName={loginName}  setLoginName={setLoginName} 
                                            loginPassword={loginPassword} setLoginPassword={setLoginPassword}
                                            retypePassword={retypePassword} setRetypePassword={setRetypePassword} logining={logining} popUp={popUp} setPopUp={setPopUp}/>}/>
        <Route path="/sign" element={<Signin signName={signName} setSignName={setSignName} 
                                            signPassword={signPassword} setSignPassword={setSignPassword} signin={signin} popUp={popUp} setPopUp={setPopUp}/>}/>
        <Route path="/bus/booking" element={<Booking buses={buses} signName={signName}/>}/>
        <Route path="/bus/booking/:id" element={<BusBooking  booking={booking} popUp={popUp} setPopUp={setPopUp} userName={userName} setUserName={setUserName}
                                                            phno={phno} setPhno={setPhno} userAddr={userAddr} setUserAddr={setUserAddr}
                                                            bookedSeat={bookedSeat} setBookedSeat={setBookedSeat}
                                                            date={date} setDate={setDate} confirmBooking={confirmBooking} navigate={navigate}/>}/>
        <Route path="/bus/cancelTicket" element={<CancelTicket deleteBooking={deleteBooking} popUp={popUp} setPopUp={setPopUp}/>}/>
        <Route path="/admin" element={<Admin deleteAllBookings={deleteAllBookings} popUp={popUp} setPopUp={setPopUp} role={role} delAllBus={delAllBus}/>}>
          <Route path="bookings" element={<AdminBooking bookings={bookings} role={role}/>}/> 
          <Route path="users" element={<AdminUsers users={users} role={role}/>}/>
          <Route path="addbus" element={<AddBus addBus={addBus} role={role} popUp={popUp} setPopUp={setPopUp}/>}/>
          <Route path="delbus" element={<DelBus delBus={delBus} popUp={popUp} setPopUp={setPopUp} role={role}/>}/>
        </Route>
          
          
          
        
      </Routes>
    </div>
  );
}

export default App;
