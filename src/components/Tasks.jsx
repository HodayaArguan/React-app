import React, { useEffect, useState } from 'react'
import { deleteTask, getAllTasks, insertTask, updateTask } from '../services/tasks'

const Tasks = () => {
    const [tasksList, setTasksList] = useState([])

    useEffect(() => {
        fetchingData()
    }, [])

    const fetchingData = async () => {
        try {
            const tasks = await getAllTasks()
            setTasksList(tasks)
        } catch (error) {
            console.log("error occured at fetching data", error.message)
        }

    }

    const handleInsertStudent = async () =>{
       const studentDetails = {id:4, title: "java",completed:"false"}
        try {
            const newTask = await insertTask(tasksList)
            setTasksList(prev => [...prev, newTask])
        } catch (error) {
            console.log("error occured at create task", error.message)
        } 
    }

    const handleEditStudent = async (id) =>{
               const taskDetails = {id:4, title:"node.js"}
        try {
            const upodatedTask =  await updateTask(id, taskDetails)
            setTasksList(prev => prev.map(t => t.id === id ? upodatedTask : t))
        } catch (error) {
            console.log("error occured at updsate task", error.message)
        }
    }
    
    const handleDelete  = async (id=4) => {

        try {
            await deleteTask(id)

            setTasksList(prev => prev.filter(t => t.id !== id ))
        } catch (error) {
            console.log("error occured at delete task", error.message)
        }
    }

    return (

        <>
            <h2>hello, </h2>
            <button onClick={handleInsertStudent}>Add Task</button>
            {
                tasksList.map(t => (
                    <div key={t.id}>
                        <h4>title: {t.title}</h4>
                        <h5>completed: {t.completed}</h5>
                        <div>
                            <button onClick={ () => handleEditStudent(t.id)}>Edit</button>
                            <button onClick={ () => handleDelete(t.id)}>Delete</button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Tasks