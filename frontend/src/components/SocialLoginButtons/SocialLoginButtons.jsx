import Button from "../Button/Button";
import { FaFacebook } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

const SocialLoginButtons = () => {
  return (
    <div className='flex w-full flex-col gap-2'>
      <Button type='button' className='text- flex h-[50px] items-center justify-center gap-2 rounded-xl border-2 border-borderColor bg-white text-sm' label={<><FcGoogle className='h-6 w-6' /><p>Sign in with Google!</p></>}></Button>
      
      <Button type='button' className='text- flex h-[50px] items-center justify-center gap-2 rounded-xl border-2 bg-[#0262E0] !text-white text-sm' label={<><FaFacebook className='h-6 w-6' /><p>Sign in with Facebook!</p></>}></Button>
    </div>
  )
}

export default SocialLoginButtons;
