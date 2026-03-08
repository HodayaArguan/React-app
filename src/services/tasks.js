import apiClient from "./apiClient"

const getAllTasks = async () => {

    try {
        const result = await apiClient.get("/tasks")
        return result.data
    }
    catch (error) {
        throw error
    }

}

const insertTask = async (newTask) => {
    try {
        const result = await apiClient.post("/tasks", newTask)
        return result.data
    } catch (error) {
        throw error
    }
}

const updateTask = async (id, taskDetails) => {
    try {
        const result = await apiClient.put(`/tasks/${id}`, taskDetails)
        return result.data
    } catch (error) {
        throw error
    }
}

const deleteTask = async (id) => {
    try {
        const result = await apiClient.delete(`/tasks/${id}`)
        return result.data
    }
    catch (error) {
        throw error
    }
}
export { getAllTasks, insertTask, updateTask, deleteTask}