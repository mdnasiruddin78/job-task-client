import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { authContext } from "../Provider/Authprovider";
import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { toast } from "react-toastify";


const Mainlayout = () => {

    const { logoutUser } = useContext(authContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logoutUser()
            .then(result => {
                // console.log(result.user)
                navigate("/login")
                toast.error('Logout Successfull')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="lg:flex md:flex">
            {/* dashboard side bar */}
            <div className="lg:w-64 md:w-64 lg:min-h-screen md:min-h-screen bg-green-300">
                <div className="flex justify-center mt-4">
                    <h3 className="text-xl font-bold">JOB FLOW</h3>
                </div>
                <ul className="menu text-black">
                    <li><NavLink to="myprofile"><CgProfile />My Profile</NavLink></li>
                    <li><Link to="/"><FaHome></FaHome>Home</Link></li>
                    <li><button className="font-bold flex items-center" onClick={handleLogout}><FiLogOut />Logout</button></li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 lg:p-8 p-5 bg-base-300">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Mainlayout;