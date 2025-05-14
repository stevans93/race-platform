import { FaUser } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { MdOutlineLock } from 'react-icons/md';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Input from '../Input/Input';
import { useState } from 'react';
import Button from '../Button/Button';

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <form className='flex flex-col gap-5'>
      <Input icon={<FaUser className='h-6 w-6 pl-1 text-secondary' />} type='text' placeholder='First Name' className='h-[50px]' />

      <Input icon={<FaUser className='h-6 w-6 pl-1 text-secondary' />} type='text' placeholder='Last Name' className='h-[50px]' />

      <Input icon={<IoMailOutline className='h-6 w-6 pl-1 text-secondary' />} type='text' placeholder='Enter email address!' className='h-[50px]' />
      
      <Input icon={<MdOutlineLock className='h-6 w-6 pl-1 text-secondary' />} iconView={showPassword ? ( <AiOutlineEyeInvisible className='h-6 w-6 cursor-pointer pl-1 text-secondary' onClick={() => setShowPassword(false)} />) : (<AiOutlineEye className='h-6 w-6 cursor-pointer pl-1 text-secondary' onClick={() => setShowPassword(true)} /> )} type={showPassword ? 'text' : 'password'} placeholder='Enter password!' className='h-[50px]' />
      
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <input aria-label='Remember' type='checkbox' className='mr-2 h-5 w-5' />
          <span className='text-secondary text-sm'>Accept the terms of use!</span>
        </div>
      </div>

      <Button type='submit' className='rounded-lx mt-4 bg-color font-semibold text-sm' label='Sign up' />
    </form>
  )
}

export default RegisterForm;
