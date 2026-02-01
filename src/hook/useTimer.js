import {useEffect, useState } from "react"

const useTimer = (count=0,milliseconds=1000) =>{

    const [counter, setCounter] =useState(count)

        useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prev => prev + count)
        },milliseconds)

        return () => {
            clearInterval(interval)
        }
    },[count, milliseconds])

 


    return {counter}


}

export default useTimer