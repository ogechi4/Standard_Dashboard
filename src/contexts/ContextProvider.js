import React, { createContext, useContext,
    useState, useEffect} from 'react'

  const StateContext = createContext()  

//   define our initial state
const initialState = {
    cart: false,
    chat: false,
    notification: false,
    userProfile: false,
}

export const ContextProvider = ({ children }) => {
  const [activeMenu, setactiveMenu] = useState(true)
  const [themeSettings, setThemeSettings] = useState(false);
  const [currentColor, setColor] = useState('#03C9D7');
  const [currentMode, setMode] = useState('Light');

  const setModeHandler = (e) =>{
    setMode(e.target.value);
    localStorage.setItem('themeMode',e.target.vale)
     setThemeSettings(false)
  }
  const setColorHandler = (color) =>{
    setColor(color)
    localStorage.setItem('colorMode', color)
    setThemeSettings(false)
  } 

 

//   making the icons on the navabar clickable
   const [isClicked, setisClicked] = useState(initialState)

   const [screenSize, setScreenSize] = useState(undefined)

   const handleClick = (clicked) => {
    setisClicked({ ...initialState, [clicked]: true})
   }

    return(

       <StateContext.Provider 
       value={{ activeMenu, 
            setactiveMenu, 
            isClicked,
            setisClicked,
            handleClick,
            screenSize, 
            setScreenSize,
            themeSettings,
           setThemeSettings,
           currentColor,
           setColor: setColorHandler,
           currentMode,
           setMode: setModeHandler,
          
            }}>

           {children}
       </StateContext.Provider>

    )
}

export const useStateContext = () => useContext(StateContext)