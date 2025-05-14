import { useState } from "react";
import useUserStore from '../store/userStore';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import AuthService from "../services/AuthService";
import toast from "react-hot-toast";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";

const useLoginModals = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { setUser } = useUserStore();
    const { setToken } = useAuthStore();
    const navigate = useNavigate();
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const loginMutation = useMutation({
      mutationFn: AuthService.login,
      onSuccess: (data) => {
        console.log(data);
        setUser(data.data.user);
        setToken(data.data.token);
        toast.success('Login successful');
        reset();
        
        setTimeout(() => {
          navigate('/dashboard');
        }, 3000);
      },
      onError: (error) => {
        toast.error(error.response?.data?.message || 'Login failed');
      }
    });

    const onSubmit = async (data) => {
      console.log(data);
      await loginMutation.mutateAsync(data);
    }
  return {
    showPassword,
    setShowPassword,
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
}

export default useLoginModals;
