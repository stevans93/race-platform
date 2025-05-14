import { FaUserCircle } from "react-icons/fa";
import useUserStore from "../../store/userStore";

const ProfileInfo = () => {
  const user = useUserStore((state) => state.user);

  if (!user) {
    return null;
  }
  
  return (
    <div>
        <div className='flex cursor-pointer flex-row items-center gap-2'>
            {user.image ? (<img src={user.image} alt={user.name} />) : (<FaUserCircle className="text-primary text-5xl"/>)}

            <p>{user.firstName} {user.lastName}</p>
        </div>
    </div>
  )
}

export default ProfileInfo;
