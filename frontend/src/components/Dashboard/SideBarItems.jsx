import { Link } from 'react-router-dom';

const SideBarItems = (sideBarItemProps) => {
  return (
    <div>
        <Link to={sideBarItemProps.href} className='flex items-center hover:bg-main hover:text-secondary p-4 font-semibold pl-[35px]'><span className='pr-4'>{sideBarItemProps.icon}</span> {sideBarItemProps.label}</Link>
    </div>
  )
}

export default SideBarItems;
