import { FaUserCircle } from "react-icons/fa";

const ViewUserProfile = ({ user }) => {
  return (
    <div className="w-[500px] p-4 bg-white rounded-lg">
        <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-3">
                {user.image ? (<img src={user.image} alt='' className="h-20 w-20 object-cover rounded-full" />) : (<FaUserCircle className="text-primary text-7xl"/>)}
                <span className="text-[15px] text-secondary">{user.email}</span>
            </div>

            <hr className="border-t border-gray-100 w-full"/>

            <div className="flex justify-between items-center w-full">
                <span className="text-gray-600">Name:</span>
                <div className="flex gap-2">
                    <span className="rounded-lg border-2 border-primary bg-[#FAFBFE] px-4 py-2 w-[145px]">{user.firstName ? (user.firstName) : ('Enter Your Firtst Name!')}</span>
                    <span className="rounded-lg border-2 border-primary bg-[#FAFBFE] px-4 py-2 w-[145px]">{user.lastName ? (user.lastName) : ('Enter Your Last Name!')}</span>
                </div>
            </div>

            <hr className="border-t border-gray-100 w-full"/>

            <div className="flex justify-between items-center w-full">
                <span className="text-gray-600">Email:</span>
                <span className="rounded-lg border-2 border-primary bg-[#FAFBFE] px-4 py-2 w-[300px]">{user.email ? (user.email) : ('Enter Your Email!')}</span>
            </div>

            <hr className="border-t border-gray-100 w-full"/>

            <div className="flex justify-between items-center w-full">
                <span className="text-gray-600">Phone:</span>
                <span className="rounded-lg border-2 border-primary bg-[#FAFBFE] px-4 py-2 w-[300px]">{user.phone ? (user.phone) : ('Enter Your Phone!')}</span>
            </div>

            <hr className="border-t border-gray-100 w-full"/>

            <div className="flex justify-between items-center w-full">
                <span className="text-gray-600">Role:</span>
                <span className="rounded-lg border-2 border-primary bg-[#FAFBFE] px-4 py-2 w-[300px]">{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</span>
            </div>

            <hr className="border-t border-gray-100 w-full"/>

            <div className="flex items-center w-full">
                <span className="text-gray-600 mr-[50px]">User QR Code:</span>
                {user.image ? (<img src={user.image} alt={user.image} />) : (<div className="w-40 h-40 bg-gray-200 flex items-center justify-center rounded-lg"></div>)}
            </div>
        </div>
    </div>
  )
}

export default ViewUserProfile;
