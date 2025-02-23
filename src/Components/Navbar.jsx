import { useContext, useState } from "react";
import { authContext } from "../Provider/Authprovider";
import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import UseAxiosPublick from "../Hooks/UseAxiosPublick";


const Navbar = () => {

    const { user } = useContext(authContext)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
    const { register, handleSubmit } = useForm();
    const [categorys, setCategorys] = useState('')
    const axiosPublic = UseAxiosPublick()

    const onSubmit = data => {
        // console.log(data)
        const addTask = {
            title: data.title,
            category: categorys,
            description: data.description,
            time: Date(),
        }
        // console.log(addTask)
        axiosPublic.post('/addTask', addTask)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    toast.success('Task Added Successfully!')
                }
            })
    }

    return (
        <div className="">
            <div className="flex justify-end space-x-3">
                <Button onClick={handleOpen} variant="gradient">
                    Add task
                </Button>
                <Dialog open={open} handler={handleOpen}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <DialogHeader>Fill All The Input.</DialogHeader>
                        <DialogBody className="space-y-3">
                            <div className="w-full max-w-sm min-w-[200px]">
                                <div className="relative">
                                    <input
                                        {...register('title', { required: true })}
                                        type="text"
                                        className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray-500 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                    />
                                    <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                                        Title...
                                    </label>
                                </div>
                            </div>
                            <div className="w-full max-w-sm min-w-[200px]">
                                <div className="relative">
                                    <input
                                        {...register('description', { required: true })}
                                        type="text"
                                        className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray-500 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                    />
                                    <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                                        Description...
                                    </label>
                                </div>
                            </div>
                            <select
                                type="text"
                                value={categorys}
                                onChange={e => setCategorys(e.target.value)}
                                className="select select-bordered w-full max-w-xs">
                                <option value=''>Category</option>
                                <option value='To-Do'>To-Do</option>
                                <option value='In-Progress'>In-Progress</option>
                                <option value='Done'>Done</option>
                            </select>
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
                            <button className="btn bg-green-500 text-white" onClick={handleOpen}>
                                <span>Submit</span>
                            </button>
                        </DialogFooter>
                    </form>
                </Dialog>
                <img className="h-12 w-12 rounded-full border-2 border-blue-500" src={user?.photoURL} alt="" />
            </div>
        </div>
    );
};

export default Navbar;