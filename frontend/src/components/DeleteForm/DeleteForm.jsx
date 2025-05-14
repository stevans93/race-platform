import Button from "../Button/Button";
import { IoClose } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';
import DeleteImage from '../../assets/DeleteImage.svg';

const DeleteForm = ({ closeModal, title, info, deleteFn }) => {
  return (
    <div className='flex w-[500px] flex-col gap-2'>
        <img src={DeleteImage} alt='delete-img' className='mx-auto mt-8 w-[150px]' />
        <h1 className='text-center text-xl font-semibold'>Do you want to delete a {title}?</h1>
        <p className='text-center text-lg font-semibold text-secondary'>This action cannot be undone. {info} will be permanently removed.</p>

        <div className='flex w-full justify-between px-5 pb-8 pt-10'>
            <Button label={ <div className='flex items-center gap-2 font-semibold'><IoClose className='h-auto w-6' /><p>Cancel</p></div> } className='w-fit rounded-lg border-2 border-primary bg-white px-8 font-semibold text-primary' onClick={closeModal} />
            <Button className='w-fit rounded-lg px-14' onClick={deleteFn} label={ <div className='flex items-center gap-2 font-semibold'><RiDeleteBin6Line className='h-5 w-5 justify-center text-white' /><p>Delete</p></div> } />
        </div>
    </div>
  )
}

export default DeleteForm;
