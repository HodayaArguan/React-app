import { useState } from "react"

const useSetStateWithLogging  = (initialValue="") =>{
    const [value, setValue]=useState(initialValue)
    
    const setVal=(v)=>{
        setValue(v)
        console.log("state change..."+v)
    }

    return {value , setVal}


}

export default useSetStateWithLogging