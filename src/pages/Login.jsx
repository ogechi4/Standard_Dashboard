import React, { useState } from 'react'
import logo from '../data/R logo (orange).png'
import { getAuth, signInWithEmailAndPassword,updateProfile } from "firebase/auth"
import { Link, useNavigate } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import {RotatingLines} from "react-loader-spinner"
import {useDispatch} from 'react-redux'
import { setUserInfo } from '../redux/dashboardSlice'


function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = getAuth()
  // state for email and password
 const [Email, setEmail]= useState("")
 const [Password, setPassword]= useState("")

//  state for error message
 const [errEmail, setErrEmail]= useState("")
 const [errPassword, setErrPassword]= useState("")

 const [loading, setLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState("")

  const [userEmailErr, setUserEmailErr] = useState("")
  const [userPassErr, setUserPassErr] = useState("")

  const handleEmail = (e) =>{
    setEmail(e.target.value)
    setErrEmail("")
    
  }

  const handlePassword = (e) =>{
    setPassword(e.target.value)
    setErrPassword("")
    
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (!Email){
      setErrEmail("Enter your email")
    }
    if (!Password){
      setErrPassword("Enter your password")
    }
    if (Email && Password){
     setLoading(true) 
    signInWithEmailAndPassword(auth, Email, Password)
  .then((userCredential) => {

    const user = userCredential.user
    // dispatch the info upon login into react-redux 
    dispatch(setUserInfo({
      _id: user.uid,
      userName:user.displayName,
      email: user.email,
      image: user.photoURL

    }))
    setLoading(false)
    setSuccessMsg("Logged in Successfull! Welcome you back!")
    setTimeout(() => {
      navigate("/ecommerce")
    }, 3000)
  })
  
    .catch((error) => {
      setLoading(false)
      const errorCode = error.code
      console.log(errorCode)
      
      
      if(errorCode.includes("auth/invalid-email")){
        setUserEmailErr("Invalid Email")
        
      }
       if (errorCode.includes("auth/wrong-password")){
        setUserPassErr("Wrong password! try again")
        
      }
        console.log("something went wrong, try with correct credential!")

       
    })
  
  setEmail("")
  setPassword("")

    }
  }

  return (
    <div className='w-full'>
    <div className='w-full bg-gray-100 pb-10'>
   {
    successMsg ? (<div>
      {successMsg}
    </div>):
    ( <form className='w-[500px] mx-auto flex flex-col items-center'>
    <img className='mt-4' src={logo} width={32} alt='' />
    

    <div className='w-full border border-zinc-200 p-6'>
       <h2 className='font-titlefont text-3xl font-medium mb-4'>Sign In</h2>
    
    {/* details */}
    <div className='flex flex-col gap-3'>
     <div className='flex flex-col gap-2'>
      <p className='text-sm font-medum'>Email or mobile phone number</p>
      <input 
      className='w-full  py-1 border border-zinc-400 px-2 text-base outline-none
       rounded-sm focus-within:border-[rgb(231,118,0)] focus-within:shadow-sm' 
       type='email'
       value={Email}
       onChange={handleEmail}
       />

       {
        errEmail && (
          <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
              {errEmail} </p>  
        )
       }
        {
        userEmailErr && (
          <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
              {userEmailErr} </p>  
        )
       }
     </div>

     <div className='flex flex-col gap-2'>
      <p className='text-sm font-medum'>Password</p>
      <input 
      className='w-full py-1 border border-zinc-400 px-2 text-base outline-none
       rounded-sm focus-within:border-[#e77600] focus-within:shadow-sm'
        type='password'
        value={Password}
        onChange={handlePassword}
        />
        {
          errPassword && (
            <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
            {errPassword}
          </p>
          )}
         {
        userPassErr && (
          <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
              {userPassErr} </p>  
        )}
     </div>
     <button
      onClick={handleSubmit}  
      className='w-full bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b]  py-1.5 border border-zinc-400 
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
       </div>
       <p className='text-sm text-black leading-4 mt-4'>By continuing, you agree to Rolantek's <span className='text-blue-600'>Conditions of the Use{" "}</span>and
        <span className='text-blue-600'>Privacy Notice</span></p>
      <p className='text-xs text-gray-600 mt-4 cursor-pointer group flex '><BsArrowRight />
      <span className='text-blue-600 group-hover:text-orange-600 pl-[2px]'>Need help?</span></p>

     
    </div>
    <p className='w-full text-xs text-gray-600 mt-4 flex items-center'>
     <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>   
     <span className='w-1/3 text-center '>New to Rolantek?</span> 
     <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span> 
      
    </p>
    <Link to='/register' className='w-full'>
    <button className='w-full py-1.5 mt-4 font-normal rounded-sm bg-gradient-to-t 
    from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-orange-800
    '>Create Your Rolantek account</button>
    </Link>
  </form>)
   }
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

export default Login

