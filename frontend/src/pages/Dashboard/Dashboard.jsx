import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LiaUserSolid } from "react-icons/lia";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { GrStatusGoodSmall } from "react-icons/gr";
import { TbPackages } from "react-icons/tb";
import { RiUserSettingsLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import SideBarItems from '../../components/Dashboard/SideBarItems';

const Dashboard = () => {
  const sideBarItems = [
    {
      href: '/dashboard',
      icon: <MdOutlineSpaceDashboard />,
      label: 'Dashboard',
    },
    {
      href: '/dashboard/users',
      icon: <LiaUserSolid />,
      label: 'Users',
    },
    {
      href: '/dashboard/events',
      icon: <MdOutlineEmojiEvents />,
      label: 'Events',
    },
    {
      href: '/dashboard/goods/',
      icon: <GrStatusGoodSmall />,
      label: 'Goods',
    },
    {
      href: '/dashboard/packages/',
      icon: <TbPackages />,
      label: 'Packages',
    },
    {
      href: '/dashboard/settings/',
      icon: <RiUserSettingsLine />,
      label: 'Profile Settings',
    },
  ];

  return (
    <div className='flex h-[100vh]'>
      <div className='flex flex-col justify-between w-[300px] bg-color py-[20px]'>
        <div className='flex flex-col text-main'>
          <img src={logo} alt="" className='w-[150px] m-auto' />
          {sideBarItems.map(sideBarItem => (
            <SideBarItems key={sideBarItem.href} {...sideBarItem} />
          ))}
        </div>
        <div className='text-main text-[16px]'>
          <Link to={'/'} className='flex items-center hover:bg-main hover:text-primary p-4 '><span className='pr-4'><CiLogout /></span>Logout</Link>
        </div>
      </div>
      <div className='flex-1'>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
