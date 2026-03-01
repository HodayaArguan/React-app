import React, { useEffect, useState } from 'react'
import { getAllEvents, createEvent, updateEvent, deleteEvent } from '../services/apiClient'

const PurimEventsManager = () => {


    const [allEvents, setAllEvents] = useState([])
    const [newEvent, setNewEvent] = useState({
        eventName: "",
        eventDate: "",
        eventCost: ""
    })
    useEffect(() => {
        fetchingData()
    }, [])

    const fetchingData = async () => {
        try {
            const allEvents = await getAllEvents()
            setAllEvents(allEvents)
        }
        catch (error) {
            console.log("error occured at fetching data", error.message)
        }
    }
    const handleDelete = async (id) => {
        await deleteEvent(id)
        fetchingData()
    }
    const handleCreate = async () => {
        await createEvent(newEvent)
        setNewEvent({ eventName: "", eventDate: "", eventCost: "" })
        fetchingData()
    }
    const handleUpdate = async (event) => {
        const updatedEvent = {
            ...event,
            eventCost: Number(event.eventCost) + 10
        }
        await updateEvent(event.id, updatedEvent)
        fetchingData()
    }

    return (
        <>
            <p>ברוכים הבאים למערך ניהול אירועי הפורים</p>
            <h1>כל האירועים:</h1>
            <button onClick={fetchingData}></button>
            <div>
                <input
                    placeholder="Event Name"
                    value={newEvent.eventName}
                    onChange={(e) => setNewEvent({ ...newEvent, eventName: e.target.value })}
                />
                <input
                    placeholder="Event Date"
                    value={newEvent.eventDate}
                    onChange={(e) => setNewEvent({ ...newEvent, eventDate: e.target.value })}
                />
                <input
                    placeholder="Event Cost"
                    value={newEvent.eventCost}
                    onChange={(e) => setNewEvent({ ...newEvent, eventCost: e.target.value })}
                />
                <button onClick={handleCreate}>Create Event</button>
            </div>

            {
                allEvents.map(e => (
                    <div key={e.id}>
                        <h2>Name: {e.eventName}</h2>
                        <h3>Date: {e.eventDate}</h3>
                        <h3>Cost: {e.eventCost}</h3>

                        <button onClick={() => handleUpdate(e)}>
                            Increase Cost
                        </button>

                        <button onClick={() => handleDelete(e.id)}>
                            Delete
                        </button>
                    </div>
                ))

            }

        </>
    )
}

export default PurimEventsManager