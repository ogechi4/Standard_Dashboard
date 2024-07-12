import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import logo from '../data/R logo (orange).png'
import { Link, useNavigate } from 'react-router-dom'
import {RotatingLines} from "react-loader-spinner"
// import {motion} from "framer-motion"
import { BsArrowRight } from 'react-icons/bs'

function Register() {
  const navigate = useNavigate()
  // firebase auth
  const auth = getAuth();

  // state for Register
  const [clientName, setClientName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")
  
 
// state for error
  const [errclientName, setErrClientName] = useState("")
  const [errEmail, setErrEmail] = useState("")
  const [errPassword, setErrPassword] = useState("")
  const [errCPassword, setErrCPassword] = useState("")

  // firebase error
  const [firebaseErr, setFirebaseErr] = useState("")

  // loader
  const [loading, setLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState("")

const handleName = (e) =>{
  setClientName(e.target.value)
  setErrClientName("")
}

 const handleEmail = (e)=>{
  setEmail(e.target.value)
  setErrEmail("")
 }

  const handlePassword = (e) => {
    setPassword(e.target.value)
    setErrPassword("")
  }

  const handleConfirmPassword = (e) => {
    setCPassword(e.target.value)
    setErrCPassword("")
  }

// Submit function
const handleRegistration =(e)=>{
  e.preventDefault()
  if (!clientName){
    setErrClientName("Enter Username")
  }
  if (!email){
    setErrEmail("Enter Email")
    setFirebaseErr("")

  }else{
    if(!emailValidation(email)){
      setErrEmail("Enter a valid email")
      
    }
  }
  if (!password){
    setErrPassword("Enter Password")
  }else{
    if(password.length <  6){
      setErrPassword("Password must be at least 6 characters")
    }
  }
  if (!cPassword){
    setErrCPassword("Confirm Password")
  }else{
    if (cPassword!==password){
      setErrCPassword("Password not matched")
    }
  }

  if(clientName && email && emailValidation(email) &&
   password && password.length >=6 && cPassword && cPassword===password){
    console.log(clientName, email, password, cPassword)

// firebase authentication
   setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    updateProfile(auth.currentUser,{
      displayName:clientName
      
    })
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    setLoading(false)
    setSuccessMsg("Account Created Successfully")
    // then navigate to the signin
    setTimeout(() =>{
    navigate("/")
    }, 3000)
  })
  .catch((error) => {
    setLoading(false)
    const errorCode = error.code;
    
    if(errorCode.includes("auth/email-already-in-use")){
      setFirebaseErr("Email Already in use, Try another one")
      setClientName(clientName)
      setPassword(password)
      setCPassword(cPassword)
    }
    console.log(errorCode)
  });

    setClientName("")
    setEmail("")
    setPassword("")
    setCPassword("")
    setFirebaseErr("")
   }
}

// Email validation
  const emailValidation = (email)=>{
    return String(email).toLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)
  }
  


  return (
    <div className='w-full'>
      <div className='w-full bg-gray-100 pb-10'>
        <form className='w-[450px] mx-auto flex flex-col items-center'>
          <img className=''src={logo} alt="" width={32} />
          <div className='w-full border border-zinc-200 p-6'>
             <h2 className='font-arial text-3xl font-medium mb-4'>
               Create Account
             </h2>
             <div className='flex flex-col gap-3'>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Your name</p>
                <input 
                name='username'
                value={clientName}
                onChange={handleName}
                type="text" 
               className='w-full py-1 border border-zinc-400 px-2 text-base outline-none
                  rounded-sm focus-within:border-[#e77600] focus-within:shadow-sm'
                />
                {
                  errclientName && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
                      {errclientName}
                    </p>
                  )
                }
              </div>

              <div className='flex flex-col gap-2'>
              <p className='text-sm font-medium'>Email</p>
                <input 
                value={email}
                name='email'
                onChange={handleEmail}
                type="email" 
               className='w-full py-1 border border-zinc-400 px-2 text-base outline-none
                  rounded-sm focus-within:border-[#e77600] focus-within:shadow-sm'
                />
                {
                  errEmail && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
                      {errEmail}
                    </p>
                  )
                }
                 {
                  firebaseErr && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
                      {firebaseErr}
                    </p>
                  )
                }
              </div>

              <div className='flex flex-col gap-2'>
              <p className='text-sm font-medium'>Password</p>
                <input 
                value={password}
                name='password'
                type="password" 
                 onChange={handlePassword}
               className='w-full py-1 border border-zinc-400 px-2 text-base outline-none
                  rounded-sm focus-within:border-[#e77600] focus-within:shadow-sm'
                />
                {
                  errPassword && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
                      {errPassword}
                    </p>
                  )
                }
              </div>

              <div className='flex flex-col gap-2'>
              <p className='text-sm font-medium'>Re-enter Password</p>
                <input 
                name='re_password'
                value={cPassword}
                onChange={handleConfirmPassword}
                type="password" 
               className='w-full py-1 border border-zinc-400 px-2 text-base outline-none
                  rounded-sm focus-within:border-[#e77600] focus-within:shadow-sm'
                />
                {
                  errCPassword ? (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
                      {errCPassword}
                    </p>
                  ):(<p className='text-xm text-gray-600'>Passwords must be at least 6 characters</p>)
                }
                
              </div>

              <button onClick={handleRegistration}  className='w-full bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b]  py-1.5 border border-zinc-400 
          rounded-sm hover:bg-gradient-to-b active:border-yellow-800'>
          Continue
         </button>

         {
         loading &&(
         <div className='flex justify-center'>
            <RotatingLines
              visible={true}
              height="50"
              width="96"
              color="grey"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
              />
         </div>
         )}
         {
           successMsg && (
             <div>
             <p className='text-lg text-green-500 font-bold'>{successMsg}</p>
             </div>
           )
         }

             </div>
             <p className='text-sm text-black leading-4 mt-4'>By continuing, you agree to Rolantek's <span className='text-blue-600'>Conditions of the Use{" "}</span>and
          <span className='text-blue-600'> Privacy Notice</span>
          </p>
           <div>
            <p className='text-sm text-black'>Already have an account? 
           <Link to='/'>
           <span className='text-sm text-blue-600 hover:text-orange-600
            hover:underline underline-offset-1 cursor-pointer duration-100 '>Sign in {" "}
            </span>
           </Link>
            </p>

            <p className='text-xs text-black mt-2'>Buyng for work? <span className='mt-2 text-blue-600  hover:text-orange-600
            hover:underline underline-offset-1 cursor-pointer duration-100'>Create a free business account</span></p>
           </div>

          </div>
        </form>

      </div>

      <div className='w-full bg-gradient-to-t from-white via-white to-zinc-400 flex flex-col gap-4
    justify-center items-center py-10'>
      <div className='flex items-center gap-6'>
       <p className=' text-xs  mt-4 cursor-pointer
  text-blue-600 hover:text-orange-600' >Conditions of Use</p>
        <p className=' text-xs text-blue-600 mt-4 cursor-pointer
    hover:text-orange-600 group-hover:text-orange-600' >Privacy Notice</p>
          <p className=' text-xs text-blue-600 mt-4 cursor-pointer
    hover:text-orange-600 group-hover:text-orange-600' >Conditions of Use</p>
      </div>
      <p className='text-xs text-gray-600'>08124783577, Prince.com, Inc. or its affilliates</p>
    </div>

    </div>
  )
}

export default Register
