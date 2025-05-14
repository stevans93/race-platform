import Input from "../Input/Input";
import { FaUser, FaRegSave } from 'react-icons/fa';
import { BsEnvelope } from 'react-icons/bs';
import { ImPhone } from 'react-icons/im';
import Button from "../Button/Button";
import { useForm } from 'react-hook-form';
import toast from "react-hot-toast";

const EditUserForm = ({ user, onSave }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
    }
  });

  const onSubmit = (data) => {
    onSave({...user, ...data});
    toast.success('User saved successfully!');
    reset({ firstName: '', lastName: '', email: '', phone: '' });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex h-full min-w-[400px] flex-col justify-between gap-20'>
        <div className='flex flex-col gap-4 px-5'>
            <Input icon={<FaUser className='h-auto w-6 text-secondary' />} placeholder='First Name' type='text' showError={errors.firstName?.message} {...register('firstName', {required: 'First Name is required!'})} />
            <Input icon={<FaUser className='h-auto w-6 text-secondary' />} placeholder='Last Name' type='text' showError={errors.lastName?.message} {...register('lastName', {required: 'Laste Name is required!'})} />
            <Input icon={<BsEnvelope className='h-auto w-6 text-secondary' />} placeholder='Email' type='email' showError={errors.email?.message} {...register('email', {required: 'Email is required!'})} />
            <Input icon={<ImPhone className='h-auto w-6 text-secondary' />} placeholder='Phone' type='tel' showError={errors.phone?.message} {...register('phone', {required: 'Phone is required!'})} />
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

export default EditUserForm;
