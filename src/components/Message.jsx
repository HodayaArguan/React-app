import useSetStateWithLogging from "../hook/useSetStateWithLogging "

const Message  = () =>{

    const {value, setVal} = useSetStateWithLogging("")

    return(
        <>
        <h1 >{value}</h1>
        <input type="text" onChange={(e)=>setVal(e.target.value)} />
        </>
    )
}
export default Message  