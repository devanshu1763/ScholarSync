import React ,{useState} from 'react'
import Home from './Home'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import img1 from '../images/img1.png'
import Forget from './Forget';
const Teacherlogin = () => {
  const nav=useNavigate();
  const[email,setEmail]=useState('')
   const[password,setPassword]=useState('')
   const loginUser = async(e)=>{

    e.preventDefault()
     const res=await fetch('/tsign',{
       method : 'POST',
       headers: {
         "Content-type": "application/json"
       },
       body: JSON.stringify({
          email: email,
         password: password
       })
     }) 
     const data=res.json();
     if(res.status === 400 ){
       window.alert("invalid credentials");
     }
 else {
   window.alert("login suceesfull");
   nav('/Teacherhome')
 
 }
}
  return (
    <div style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
       <h1 className='loginp'>
         Teacher Login
    </h1>
     <form method='POST'>
  <div className="form-grou">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email'  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
  
  </div>
  <div className="form-grou">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
  </div>
  <NavLink type="submit" className="btn-btn-primar"   to="/Forget" >Forgot password?</NavLink>
  <br></br>
  <NavLink type="submit" className="login-button" onClick={loginUser}  to="/Teacherhome">Login</NavLink>

  <br></br>
  <p className='ORSEPRATOR'>--------------------- OR ---------------------</p>
        <NavLink type="submit" className="signup-button" to="/Teacherreg">  Dont have an account? Sign up </NavLink>
      
 
 

 
      
</form>
    </div>
  )
}

export default Teacherlogin
