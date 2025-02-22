import { useContext } from "react";
import { authContext } from "../Provider/Authprovider";
import { Button } from "@material-tailwind/react";


const Navbar = () => {

    const { user } = useContext(authContext)

    return (
        <div className="border-2 border-gray-500 bg-white p-2 rounded-md">
            <div className="flex justify-end space-x-3">
                <Button>Add task</Button>
                <img className="h-12 w-12 rounded-full border-2 border-blue-500" src={user?.photoURL} alt="" />
            </div>
        </div>
    );
};

export default Navbar;