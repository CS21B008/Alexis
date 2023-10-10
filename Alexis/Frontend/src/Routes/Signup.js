import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate,Link} from 'react-router-dom'
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
  
 


const handleSignup=async (event)=>{

  event.preventDefault()

    if (!name.trim()||!email.trim()||!password.trim()||!address.trim()||!UserId.trim()||!Age.trim()||!Gender.trim()) 
     {   
        alert("Please Fill All The Details")
          return;
      }

      
        
      navigate('/login');

    try{
     
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
  const SignupData = {
    name,
    email,
    password,
    address,
    UserId,Age,
    Gender
  };
      const { data }=await axios.post(
        'http://localhost:5000/api/user/Signup ',SignupData,config);
        if (data.status === 200) {
        
        localStorage.setItem('userinfo',JSON.stringify(data));
        alert("work");
        console.log(data);
       
        navigate('/');
        }
        else{
          console.log('Unexpected status code:', data.status);
          alert('Failed to sign up. Please try again.');
        }
    }
    catch(error){
      console.log(error)
    
    
    }
 }

 
  return (
    <div className='box1'>
    
          
              <div className='position'>SIGN UP</div>
           
      
          <div className='second'>
            
            
            <div className='input1'>
                <input type="name" onChange={(e) => setName(e.target.value)} placeholder='Name' />
              </div>
            
              <div className='input1'>
                <input type="UserId" onChange={(e) => setUserId(e.target.value)} placeholder='UserId' />
              </div>
              <div className='input1'>
              <input type="Gender" onChange={(e) => setGender(e.target.value)} placeholder='Gender' />
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
                <input type="Age" onChange={(e) => setAge(e.target.value)} placeholder='age' />
              </div>
              <div className='button1'>
              <input type="submit" value="Sign Up" onClick={handleSignup} />
              </div>
        </div>
        <div className="text-white custom_class">
        Already have an account? <Link to='/login'>login</Link>
        </div>
        </div>
    )

}

export default Signup