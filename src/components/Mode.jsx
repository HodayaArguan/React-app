import useToggle from "../hook/useToggle "

const Mode = () =>{

    const {mode, changeMode}=useToggle(true)


    return(
        <>
        <h1>{mode?"on":"off"}</h1>
        <button onClick={changeMode}>click me</button>
        </>
    )
}

export default Mode