import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import UsersService from "../services/UsersService";
import { format, isValid } from 'date-fns';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiEye } from "react-icons/fi";

const useUserModals = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const queryClient = useQueryClient();

    const usersHeaders = {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phone: 'Phone Number',
        role: 'Role',
        createdAt: 'Created At',
        updateAt: 'Update At',
        actions: '',
    };

    const { data, isLoading, isError, error } = useQuery({ queryKey: ['users'], queryFn: UsersService.get });

    const deleteUserMutation = useMutation({
        mutationFn: UsersService.delete,
        onSuccess: () => {
        queryClient.invalidateQueries(['users']);
        setIsOpen(false);
        },
    });

    const editUserMutation = useMutation({
        mutationFn: (updateUser) => UsersService.update(updateUser._id, updateUser),
        onSuccess: () => {
            queryClient.invalidateQueries(['users']);
            setIsOpen(false);
        }
    });

    const createUserMutation = useMutation({
        mutationFn: UsersService.create,
        onSuccess: () => {
            queryClient.invalidateQueries(['users']);
            setIsOpen(false);
        }
    });

    const usersData = Array.isArray(data?.data.users) ? data.data.users.map(user => ({
        ...user,
        role: user.role.charAt(0).toUpperCase() + user.role.slice(1),
        createdAt: isValid(new Date(user.createdAt)) ? format(new Date(user.createdAt), 'dd MMMM yyyy HH:mm') : 'N/A',
        updatedAt: isValid(new Date(user.updatedAt)) ? format(new Date(user.updatedAt), 'dd MMMM yyyy HH:mm') : 'N/A', 
        actions: (
            <div className='flex gap-2'>
                <FiEdit className='h-5 w-5 cursor-pointer text-secondary' onClick={() => { setIsOpen(true); setModalTitle('Edit User'); setSelectedUser(user) }}/>
                <RiDeleteBin6Line className='h-5 w-5 cursor-pointer text-secondary' onClick={() => { setIsOpen(true); setModalTitle('Delete User'); setSelectedUser(user) }}/>
                <FiEye className='h-5 w-5 cursor-pointer text-secondary' onClick={() => { setIsOpen(true); setModalTitle('View User'); setSelectedUser(user) }}/>
            </div>
        )
    })) : [];

    const handleAddUserClick = () => {
        setIsOpen(true);
        setModalTitle('Add User');
        setSelectedUser(null);
    };

    const handleDeleteUser = () => {
        if (selectedUser) {
            deleteUserMutation.mutate(selectedUser._id);
        }
    };

    const handleEditUser = (updatedUser) => {
        if(selectedUser) {
            editUserMutation.mutate(updatedUser);
        }
    }

    const handleCreateUser = (newUser) => {
        createUserMutation.mutate(newUser);
    }

    return {
        isOpen,
        setIsOpen,
        modalTitle,
        setModalTitle,
        selectedUser,
        setSelectedUser,
        usersData,
        usersHeaders,
        isLoading,
        isError,
        error,
        handleAddUserClick,
        handleDeleteUser,
        handleEditUser,
        handleCreateUser,
    };
};

export default useUserModals;