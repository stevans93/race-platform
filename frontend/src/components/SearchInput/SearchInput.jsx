import Input from "../Input/Input";
import { BiSearch } from 'react-icons/bi';

const SearchInput = () => {
  return (
    <div>
        <Input type='text' placeholder='Search...' layout='h-full' className='h-11 w-80 border-2 border-borderColor bg-[#FAFBFE] py-1 pl-2 placeholder:font-light placeholder:text-gray-400' icon={<BiSearch className='h-6 w-6 text-primary' />} iconClassName='right-3 left-auto' inputWrapperClass='h-full' />
    </div>
  )
}

export default SearchInput;