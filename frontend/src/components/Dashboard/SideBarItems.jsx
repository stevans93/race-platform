import { Link } from 'react-router-dom';

const SideBarItems = (sideBarItemProps) => {
  return (
    <div>
        <Link to={sideBarItemProps.href} className='flex items-center hover:bg-main hover:text-[#27A28A] p-4'><span className='pr-4'>{sideBarItemProps.icon}</span> {sideBarItemProps.label}</Link>
    </div>
  )
}

export default SideBarItems;
