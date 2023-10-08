import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import '../Styles/Signup.css'
function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [Age, setAge] = useState('')
  const [Gender, setGender] = useState('')
  const [password, setPassword] = useState('')
  const [address,setaddress]=useState('')
  const [UserId, setUserId] = useState('')
  const navigate=useNavigate()
  
 


  async function Signup(e){
    if (!name||!email||!password||!address||!UserId||!Age||!Gender) {
          alert("Please Fill All The Details")
          return;
        }


    e.preventDefault()
    const SignupData = {
      name,
      email,
      password,
      address,
      UserId,Age,
      Gender
      
      
    }
   
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try{
      const { data }=await axios.post(
        'http://localhost:3000/api/user/Signup',SignupData,config)
        .catch((error)=>{
          console.log(error);
        });
        console.log(data);
        localStorage.setItem('userInfo',JSON.stringify(data));
        navigate('/');
    }
    catch(e){
      console.log(e)
    }
}

  // const handleSignUp = async ()=> {
  
    
  //   if (!name||!email||!password||!address||!UserId) {
  //     alert("Please Fill All The Details");
  //     return;
  //   }
  

  // }
 
  return (
    <div className='box1'>
    
          
              <div className='position'>SIGN UP</div>
           
      
          <div className='second'>
            
            
            <div className='input1'>
                <input type="name" onChange={(e) => setName(e.target.value)} placeholder='Name' />
              </div>
            
              <div className='input1'>
                <input type="Age" onChange={(e) => setAge(e.target.value)} placeholder='UserId' />
              </div>
              <div className='input1'>
              <input type="Gender" onChange={(e) => setAge(e.target.value)} placeholder='Gender' />
              </div>
              <div className='input1'>
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email ID' />
              </div>
              <div className='input1'>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
              </div>
              <div className='input1'>
                <input type="address" onChange={(e) => setaddress(e.target.value)} placeholder='address' />
              </div>
              <div className='input1'>
                <input type="UserId" onChange={(e) => setUserId(e.target.value)} placeholder='UserId' />
              </div>
              <div className='button1'>
              <input type="submit" value="Sign Up" onClick={Signup} />
              </div>
        </div>
        </div>
        
  )

}

export default Signup