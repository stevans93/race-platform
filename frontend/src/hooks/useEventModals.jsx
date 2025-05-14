import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { format, isValid } from "date-fns";
import { useState } from "react";
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiEye } from "react-icons/fi";
import EventsService from "../services/EventsService";

const useEventModals = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [selectedEvent, setSelectedEvent] = useState(null);
    const queryClient = useQueryClient();

    const eventsHeaders = {
        name: 'Name',
        date: 'Date',
        price: 'Price',
        createdAt: 'Created At',
        updateAt: 'Update At',
        actions: '',
    };

    const { data, isLoading, isError, error } = useQuery({ queryKey: ['events'], queryFn: EventsService.get });

    const createEventMutation = useMutation({
        mutationFn: EventsService.create,
        onSuccess: () => {
            queryClient.invalidateQueries(['events']);
            setIsOpen(false);
        }
    });

    const deleteEventMutation = useMutation({
        mutationFn: EventsService.delete,
        onSuccess: () => {
            queryClient.invalidateQueries(['events']);
            setIsOpen(false);
        }
    });

    const editEventMutation = useMutation({
        mutationFn: (updateEvent) => EventsService.update(updateEvent._id, updateEvent),
        onSuccess: () => {
            queryClient.invalidateQueries(['events']);
            setIsOpen(false);
        }
    });

    const eventsData = Array.isArray(data?.data.events) ? data.data.events.map(event => ({
        ...event,
        date: isValid(new Date(event.date)) ? format(new Date(event.date), 'dd MMMM yyyy HH:mm') : 'N/A',
        createdAt: isValid(new Date(event.createdAt)) ? format(new Date(event.createdAt), 'dd MMMM yyyy HH:mm') : 'N/A',
        updatedAt: isValid(new Date(event.updatedAt)) ? format(new Date(event.updatedAt), 'dd MMMM yyyy HH:mm') : 'N/A',
        actions: (
          <div className='flex gap-2'>
            <FiEdit className='h-5 w-5 cursor-pointer text-secondary' onClick={() => { setIsOpen(true); setModalTitle('Edit Event'); setSelectedEvent(event) }}/>
            <RiDeleteBin6Line className='h-5 w-5 cursor-pointer text-secondary' onClick={() => { setIsOpen(true); setModalTitle('Delete Event'); setSelectedEvent(event) }}/>
            <FiEye className='h-5 w-5 cursor-pointer text-secondary' onClick={() => { setIsOpen(true); setModalTitle('View Event'); setSelectedEvent(event) }}/>
          </div>
        )
    })) : [];
    
    const handleAddEventClick = () => {
        setIsOpen(true);
        setModalTitle('Add Event');
        setSelectedEvent(null);
    };

    const handleCreateEvent = (newEvent) => {
        createEventMutation.mutate(newEvent);
    }

    const handleDeleteEvent = () => {
        if(selectedEvent) {
            deleteEventMutation.mutate(selectedEvent._id);
        }
    }

    const handleEditEvent = (updatedEvent) => {
        if(selectedEvent) {
            editEventMutation.mutate(updatedEvent);
        }
    }

    return {
        isOpen,
        setIsOpen,
        modalTitle, 
        selectedEvent, 
        eventsHeaders,
        isLoading,
        isError,
        error,
        eventsData,
        handleAddEventClick,
        handleCreateEvent,
        handleDeleteEvent,
        handleEditEvent,
    }
}

export default useEventModals;
