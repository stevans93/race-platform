import Button from "../Button/Button";
import Input from "../Input/Input";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { IoMailOutline } from 'react-icons/io5';
import { MdOutlineLock } from 'react-icons/md';
import useLoginModals from "../../hooks/useLoginModals";


const LoginForm = () => {
  const {
    showPassword,
    setShowPassword,
    register,
    handleSubmit,
    errors,
    onSubmit,
  } = useLoginModals();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
      <Input icon={<IoMailOutline className='h-6 w-6 pl-1 text-secondary' />} type='email' placeholder='Enter email address!' className='h-[50px]' showError={errors.email?.message} {...register('email', {required: 'Email is required!'})} />
      
      <Input icon={<MdOutlineLock className='h-6 w-6 pl-1 text-secondary' />} iconView={showPassword ? ( <AiOutlineEyeInvisible className='h-6 w-6 cursor-pointer pl-1 text-secondary' onClick={() => setShowPassword(false)} />) : (<AiOutlineEye className='h-6 w-6 cursor-pointer pl-1 text-secondary' onClick={() => setShowPassword(true)} /> )} type={showPassword ? 'text' : 'password'} placeholder='Enter password!' className='h-[50px]' showError={errors.password?.message} {...register('password', {required: 'Password is required!'})} />
      
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <input aria-label='Remember' type='checkbox' className='mr-2 h-5 w-5' />
          <span className='text-secondary text-sm'>Remember me</span>
        </div>

        <a href='/forgot-password' className='font-semibold text-secondary text-sm'>Forgot your password?</a>
      </div>

      <Button type='submit' className='rounded-lx mt-4 bg-color font-semibold text-sm' label='Sign in' />
    </form>
  )
}

export default LoginForm;
