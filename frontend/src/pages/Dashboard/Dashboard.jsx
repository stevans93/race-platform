import { Outlet, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LiaUserSolid } from "react-icons/lia";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { GrStatusGoodSmall } from "react-icons/gr";
import { TbPackages } from "react-icons/tb";
import { RiUserSettingsLine } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import SideBarItems from '../../components/Dashboard/SideBarItems';
import toast, { Toaster } from 'react-hot-toast';
import useUserStore from '../../store/userStore';
import useAuthStore from '../../store/authStore';

const Dashboard = () => {
  const { clearUser } = useUserStore();
  const { clearToken } = useAuthStore();
  const navigate = useNavigate();

  const sideBarItems = [
    {
      href: '/dashboard',
      icon: <MdOutlineSpaceDashboard className='text-3xl' />,
      label: 'Dashboard',
    },
    {
      href: '/dashboard/users',
      icon: <LiaUserSolid className='text-3xl' />,
      label: 'Users',
    },
    {
      href: '/dashboard/events',
      icon: <MdOutlineEmojiEvents className='text-3xl' />,
      label: 'Events',
    },
    {
      href: '/dashboard/goods/',
      icon: <GrStatusGoodSmall className='text-3xl' />,
      label: 'Goods',
    },
    {
      href: '/dashboard/packages/',
      icon: <TbPackages className='text-3xl' />,
      label: 'Packages',
    },
    {
      href: '/dashboard/settings/',
      icon: <RiUserSettingsLine className='text-3xl' />,
      label: 'Profile Settings',
    },
  ];

  const handleLogout = () => {
    clearUser();
    clearToken();
    toast.success('Logged out successfully!');
    
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

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
          <a className='flex items-center hover:bg-main hover:text-secondary p-4 font-semibold pl-[35px]' onClick={handleLogout}><span className='pr-4'><TbLogout2 className='text-3xl' /></span>Logout</a>
        </div>
      </div>
      <div className='flex-1'>
        <Outlet />
        <Toaster position="top-right"/>
      </div>
    </div>
  )
}

export default Dashboard
