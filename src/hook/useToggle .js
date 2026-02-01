import { useState } from "react"

const useToggle = (initialValue=true) =>{
 
    const [mode, setMode]= useState(initialValue)

    const changeMode=()=>{
        console.log("change mode...");
        setMode(!mode)
    }
    return  {mode, changeMode}

}

export default useToggle 