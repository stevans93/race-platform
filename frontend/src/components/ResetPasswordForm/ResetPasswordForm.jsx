import Input from '../Input/Input';
import Button from '../Button/Button';
import { MdOutlineLock } from 'react-icons/md';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';

const ResetPasswordForm = () => {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <form className='flex flex-col gap-5'>
        <Input icon={<MdOutlineLock className='h-6 w-6 pl-1 text-secondary' />} iconView={showPassword ? ( <AiOutlineEyeInvisible className='h-6 w-6 cursor-pointer pl-1 text-secondary' onClick={() => setShowPassword(false)} />) : (<AiOutlineEye className='h-6 w-6 cursor-pointer pl-1 text-secondary' onClick={() => setShowPassword(true)} /> )} type={showPassword ? 'text' : 'password'} placeholder='Enter password!' className='h-[50px]' />

        <Input icon={<MdOutlineLock className='h-6 w-6 pl-1 text-secondary' />} iconView={showPassword ? ( <AiOutlineEyeInvisible className='h-6 w-6 cursor-pointer pl-1 text-secondary' onClick={() => setShowPassword(false)} />) : (<AiOutlineEye className='h-6 w-6 cursor-pointer pl-1 text-secondary' onClick={() => setShowPassword(true)} /> )} type={showPassword ? 'text' : 'password'} placeholder='Confirm password!' className='h-[50px]' />

        <Button type='submit' className='rounded-lx mt-4 bg-color font-semibold text-sm' label='Send' />
    </form>
  )
}

export default ResetPasswordForm
