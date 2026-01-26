import { useEffect, useState } from "react"
import MouseTrackerDisplay from "./MouseTrackerDisplay"

const MouseTracker = () => {
        const [x, setX]=useState(0)
        const [y,setY]=useState(0)

    useEffect(() => {

        const handleMouseTracker=(e)=>{
            console.log("ClientY")
            setY(e.clientY)
            setX(e.clientX)
        }

        window.addEventListener("mousemove", handleMouseTracker)
        return()=>{
            window.removeEventListener("mousemove", handleMouseTracker)
        }

    }, [])

    return (
        <>

            <h1>Mouse Tracker</h1>
            <h2>Mouse moving</h2>
            <MouseTrackerDisplay y={y} x={x}/>
        </>
    )

}

export default MouseTracker