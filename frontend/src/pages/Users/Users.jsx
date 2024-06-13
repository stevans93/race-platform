import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import PageHeading from "../../components/PageHeading/PageHeading";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Table from "../../components/Table/Table";
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'

const Users = () => {
  const usersHeaders = {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      password: 'Password',
      phone: 'Phone Number',
      role: 'Role',
      createdAt: 'Created At',
      updateAt: 'Update At',
      actions: '',
  };

  const data = [
    {
      firstName: 'Stevan',
      lastName: 'Stevanovic',
      email: 'stevans93@gmail.com',
      password: '312392',
      phone: '062/50-52-70',
      role: 'user',
      createdAt: '2024-05-22T11:57:19.274+00:00',
      updateAt: '2024-05-22T11:57:19.274+00:00',
      actions: (
        <div className='flex gap-2'>
          <FiEdit className='h-5 w-5 cursor-pointer text-secondary'/>
          <RiDeleteBin6Line className='h-5 w-5 cursor-pointer text-secondary'/>
        </div>
      ),
    },
    {
      firstName: 'Stevan2',
      lastName: 'Stevanovic2',
      email: 'stevans932@gmail.com',
      password: '312392',
      phone: '062/50-52-70',
      role: 'user',
      createdAt: '2024-05-22T11:57:19.274+00:00',
      updateAt: '2024-05-22T11:57:19.274+00:00',
      actions: (
        <div className='flex gap-2'>
          <FiEdit className='h-5 w-5 cursor-pointer text-[#5d837b]'/>
          <RiDeleteBin6Line className='h-5 w-5 cursor-pointer text-[#5d837b]'/>
        </div>
      ),
    },
    {
      firstName: 'Stevan3',
      lastName: 'Stevanovic3',
      email: 'stevans933@gmail.com',
      password: '312392',
      phone: '062/50-52-70',
      role: 'user',
      createdAt: '2024-05-22T11:57:19.274+00:00',
      updateAt: '2024-05-22T11:57:19.274+00:00',
      actions: (
        <div className='flex gap-2'>
          <FiEdit className='h-5 w-5 cursor-pointer text-[#5d837b]'/>
          <RiDeleteBin6Line className='h-5 w-5 cursor-pointer text-[#5d837b]'/>
        </div>
      ),
    },
  ];

  return (
    <PageWrapper>
        <PageHeading />
        <ContentWrapper>
            <h1 className="text-[22px]">Users</h1>
            <hr className="border border-1"/>
            <Table headers={usersHeaders} data={data} />
        </ContentWrapper>
    </PageWrapper>
  )
}

export default Users;
