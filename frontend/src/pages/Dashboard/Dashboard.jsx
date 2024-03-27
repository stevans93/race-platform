import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LiaUserSolid } from "react-icons/lia";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { GrStatusGoodSmall } from "react-icons/gr";
import { TbPackages } from "react-icons/tb";
import { RiUserSettingsLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";

const Dashboard = () => {
  return (
    <div>
      <div>
        <div className='flex flex-col justify-between w-[300px] h-[100vh] bg-color py-[20px]'>
            <div className='flex flex-col text-main text-[24px]'>
                <img src={logo} alt="" className='w-[150px] m-auto' />
                <Link to={'/'} className='flex items-center hover:bg-primary px-[10px]'><MdOutlineSpaceDashboard className='mr-[10px]' /> Dashboard</Link>
                <Link to={'/'} className='flex items-center hover:bg-primary px-[10px]'><LiaUserSolid className='mr-[10px]' /> Users</Link>
                <Link to={'/'} className='flex items-center hover:bg-primary px-[10px]'><MdOutlineEmojiEvents className='mr-[10px]' /> Events</Link>
                <Link to={'/'} className='flex items-center hover:bg-primary px-[10px]'><GrStatusGoodSmall className='mr-[10px]' /> Goodies</Link>
                <Link to={'/'} className='flex items-center hover:bg-primary px-[10px]'><TbPackages className='mr-[10px]' /> Packages</Link>
                <Link to={'/'} className='flex items-center hover:bg-primary px-[10px]'><RiUserSettingsLine className='mr-[10px]' /> Profile Settings</Link>
            </div>
            <div className='px-[10px] text-main text-[24px]'>
                <Link to={'/'} className='flex items-center hover:bg-primary px-[10px]'><CiLogout className='mr-[10px]' />Logout</Link>
            </div>
        </div>

        <div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard
