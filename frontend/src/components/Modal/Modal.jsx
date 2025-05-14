import CS from "../../utils/mergeClasses";
import { IoCloseCircleOutline } from "react-icons/io5";


const Modal = ({ isOpen, title, children, className, onClose }) => {
    if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-5'>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        
        <div className={CS('relative z-10 max-h-[100%] overflow-y-auto rounded-lg bg-white px-3 pb-4', className)}>

            {title !== '' ? (
            <div className='sticky top-0 z-20 my-4 flex h-14 w-full items-center justify-center justify-between bg-white'>
                <h2 className='text-nowrap pl-6 text-lg text-secondary font-semibold'>{title}</h2>
                <IoCloseCircleOutline size={34} className='text-secondary left-full z-20 cursor-pointer text-sm' onClick={onClose} />
             </div>
            ) : null}
            
            <div>{children}</div>
        
        </div>
    </div>
  )
}

export default Modal;
