import { IoMailOutline } from 'react-icons/io5';
import Input from '../Input/Input';
import Button from '../Button/Button';

const ForgotPasswordForm = () => {
  return (
    <form className='flex flex-col gap-5'>
        <Input icon={<IoMailOutline className='h-6 w-6 pl-1 text-secondary' />} type='text' placeholder='Enter email address!' className='h-[50px]' />
            
        <Button type='submit' className='rounded-lx mt-4 bg-color font-semibold text-sm' label='Send' />
    </form>
  )
}

export default ForgotPasswordForm;
