import { useContext } from "react";
import { authContext } from "../Provider/Authprovider";
import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";


const Navbar = () => {

    const { user } = useContext(authContext)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <div className="border-2 border-gray-500 bg-white p-2 rounded-md">
            <div className="flex justify-end space-x-3">
                <Button onClick={handleOpen} variant="gradient">
                    Add task
                </Button>
                <Dialog open={open} handler={handleOpen}>
                    <DialogHeader>Its a simple modal.</DialogHeader>
                    <DialogBody className="space-y-3">
                        <div class="w-full max-w-sm min-w-[200px]">
                            <div class="relative">
                                <input
                                    class="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray-500 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                />
                                <label class="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                                    Title...
                                </label>
                            </div>
                        </div>
                        <div class="w-full max-w-sm min-w-[200px]">
                            <div class="relative">
                                <input
                                    class="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray-500 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                />
                                <label class="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                                    Description...
                                </label>
                            </div>
                        </div>
                        <div className="w-72">
                            <Select label="Category">
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind React</Option>
                                <Option>Material Tailwind Vue</Option>
                                <Option>Material Tailwind Angular</Option>
                                <Option>Material Tailwind Svelte</Option>
                            </Select>
                        </div>
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            variant="text"
                            color="red"
                            onClick={handleOpen}
                            className="mr-1"
                        >
                            <span>Cancel</span>
                        </Button>
                        <Button variant="gradient" color="green" onClick={handleOpen}>
                            <span>Submit</span>
                        </Button>
                    </DialogFooter>
                </Dialog>
                <img className="h-12 w-12 rounded-full border-2 border-blue-500" src={user?.photoURL} alt="" />
            </div>
        </div>
    );
};

export default Navbar;