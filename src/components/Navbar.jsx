import React, {useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart} from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'

import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import avatar from '../data/avatar.jpg'
import prince from '../data/prince.jpg'
import  {Cart, Chat, Notification, UserProfile} from '.'
import { useStateContext } from '../contexts/ContextProvider'
import { useSelector } from 'react-redux'
import { Link} from 'react-router-dom';

// function for our navigation button
 const NavButton = ({ title, customfunc, icon, color, dotColor}) => (
     <TooltipComponent content={title} position='BottomCenter'>
      <button type='button' onClick={customfunc} style={{color}}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
        
        <span style={{background: dotColor}}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />
          {icon}
      </button>

     </TooltipComponent>
 )

function Navbar() {
  // react redux
  const userInfo = useSelector((state) => state.dashboardReducer.userInfo)

  const { activeMenu, setactiveMenu, isClicked, setisClicked, handleClick,
    screenSize, setScreenSize,currentColor} = useStateContext()

    // we call our useEffect, this is for the tracking of the screensize
    useEffect(() => {
       const handleResize = () => setScreenSize
       (window.innerWidth)

       window.addEventListener('resize', handleResize)
       handleResize()

       return () =>window.removeEventListener('resize', handleResize)
    }, [])

    // what do we use the tracking of the screensize for?

    useEffect(() => {
     if (screenSize <= 900){
      setactiveMenu(false)
     }else {
      setactiveMenu(true)
     }
    },[screenSize])
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title='Menu' customfunc={() =>
         setactiveMenu((prevactiveMenu) => !prevactiveMenu)}
         color={currentColor} icon={<AiOutlineMenu />}
         />
   {/* this is for another button on the navbar */}
         <div className='flex'>
         <NavButton
          title='Cart' 
          customfunc={() => handleClick('cart')}
         color={currentColor}
         icon={<FiShoppingCart />}
         />

       
         <NavButton
          title='Chat' 
          dotColor='#03c90'
          customfunc={() => handleClick('chat')}
         color={currentColor}
         icon={<BsChatLeft />}
         />

         <NavButton
          title='Notifications' 
          dotColor='#03c90'
          customfunc={() => handleClick('notifications')}
         color={currentColor}
         icon={<RiNotification3Line />}
         />
         
       <TooltipComponent
       content='Profile'
       position='BottomCenter'>
          
          <div className='flex items-center gap-2 cursor-pointer p-1
          hover:bg-light-gray rounded-lg' >
            <img
            className='rounded-full w-7 h-7'
            src={prince}
            />

            {
              userInfo?(
                <p className='text-gray-400 text-i4 font-bold ml-1'>{userInfo.userName}</p>
                )
                :(<p>
                <span className='text-gray-400 text-i4'>Hi,</span>{' '}
                <span className='text-gray-400 font-bold ml-1 text-14'>Princewill</span>
              </p>)
            }
            <Link to='/login'>
            <p className='text-gray-400 font-bold ml-1 text-14'>SignIn</p>
            <MdKeyboardArrowDown className='text-gray-400 text-i4' />
            </Link>
          
          </div>

       </TooltipComponent>

       {isClicked.cart && <Cart/>}
       {isClicked.chat && <Chat/>}
       {isClicked.notification && <Notification/>}
       {isClicked.userProfile && <UserProfile/>}


         </div>
      
    </div>
  )
}

export default Navbar
