import Input from "../Input/Input";
import { CgRename } from "react-icons/cg";
import { CiCalendarDate } from "react-icons/ci";
import { IoIosPricetag } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import { FaRegSave } from 'react-icons/fa';
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddEventForm = ({ onSave }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    onSave(data);
    toast.success('Event created successfully!');
    reset();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex h-full min-w-[400px] flex-col justify-between gap-20'>
        <div className='flex flex-col gap-4 px-5'>
            <Input icon={<CgRename  className='h-auto w-6 text-secondary' />} placeholder='Name' type='text' showError={errors.name?.message} {...register('name', { required: 'Name is required!' })} />
            <Input icon={<CiCalendarDate  className='h-auto w-6 text-secondary' />} placeholder='Date' type='date' showError={errors.date?.message} {...register('date', { required: 'Date is required!' })} />
            <Input icon={<IoIosPricetag  className='h-auto w-6 text-secondary' />} placeholder='Price' type='number' showError={errors.price?.message} {...register('price', { required: 'Name is required!' })} />
            <Input icon={<CiCircleInfo  className='h-auto w-6 text-secondary' />} placeholder='Info' type='text' showError={errors.info?.message} {...register('info', { required: 'Info is required!' })} />
            <div className='flex flex-row justify-center gap-4'>
                <Button type='submit' className='h-12 w-48 rounded-lg px-6 py-0 text-sm font-medium' label={<div className='flex flex-row items-center justify-center gap-2'>
                <FaRegSave className='h-auto w-6 text-white' />
                Save
            </div>}/>
          </div>
        </div>
    </form>
  )
}

export default AddEventForm;
