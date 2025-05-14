import Input from "../Input/Input";
import { FaUser } from 'react-icons/fa';
import { BsEnvelope } from 'react-icons/bs';
import { ImPhone } from 'react-icons/im';
import { HiOutlineLockClosed } from 'react-icons/hi';

const UserSettingsForm = () => {
  return (
    <form className='flex h-full min-w-[300px] flex-col justify-between gap-20'>
        <div className='flex flex-col gap-4 px-5'>
          <p className='text-lg text-secondary font-semibold'>User Settings</p>
          <Input icon={<FaUser className='h-auto w-6 text-secondary' />} placeholder='First Name' type='text'/>
          <Input icon={<FaUser className='h-auto w-6 text-secondary' />} placeholder='Last Name' type='text'/>
          <Input icon={<BsEnvelope className='h-auto w-6 text-secondary' />} placeholder='Email' type='email'/>
          <Input icon={<ImPhone className='h-auto w-6 text-secondary' />} placeholder='Phone' type='tel'/>
          <div className='flex flex-row gap-4'>
            <Input placeholder='Password' type='password' icon={<HiOutlineLockClosed className='h-auto w-6 text-secondary' />} />
            <Input placeholder='Confirm Password' type='password' icon={<HiOutlineLockClosed className='h-auto w-6 text-secondary' />} />
          </div>
        </div>
    </form>
  )
}

export default UserSettingsForm;
