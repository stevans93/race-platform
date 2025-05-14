import Button from "../Button/Button";
import { FaRegSave } from 'react-icons/fa';

const SettingsSaveButton = () => {
  return (
    <>
        <div className='relative flex w-44 flex-row'>
        <Button type='submit' className='h-10 w-48 rounded-lg px-6 py-0 text-sm font-medium' label={<div className='flex flex-row items-center justify-center gap-2 text-sm font-semibold'>
              <FaRegSave className='h-5 w-6 text-white' />
              Save
            </div>}/>
        </div>
    </>
  )
}

export default SettingsSaveButton;
