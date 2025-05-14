import Button from "../Button/Button";
import { HiPlus } from 'react-icons/hi';

const AddEventButton = ({ onClick }) => {
  return (
    <>
        <div className='relative flex w-44 flex-row'>
            <Button onClick={ onClick } type='button' label={<div className='flex flex-row items-center justify-center font-semibold text-sm'><HiPlus className='left-3 h-5 w-5 justify-center text-white mr-1' />Add Event</div>} className='h-10 rounded-lg px-0 py-0 text-sm' />
        </div>
    </>
  )
}

export default AddEventButton;
