import axios from "axios";
const BASE_URL= "http://localhost:3000/api"
const getAllEvents = async () => {

    try {
        const res = await axios.get(BASE_URL)
        return res.data
    }
    catch (error) {
        throw error;

    }

}
const createEvent = async (eventData) => {

    try {
        const res = await axios.post(BASE_URL, eventData)
        return res.data
    }
    catch (error) {
        throw error;

    }

}
const updateEvent = async (id, eventData) => {

    try {
        const res = await axios.put(`${BASE_URL}/${id}`, eventData);
        return res.data
    }
    catch (error) {
        throw error;

    }

}
const deleteEvent = async (id) => {

    try {
        const res = await axios.delete(`${BASE_URL}/delete/${id}`);
        return res.data
    }
    catch (error) {
        throw error;

    }

}
export {getAllEvents, createEvent, updateEvent, deleteEvent}