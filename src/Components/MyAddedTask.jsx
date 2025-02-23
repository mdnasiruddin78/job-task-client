import React, { useContext } from 'react';
import { authContext } from '../Provider/Authprovider';
import { useQuery } from '@tanstack/react-query';
import UseAxiosPublick from '../Hooks/UseAxiosPublick';
import { Card, Typography } from "@material-tailwind/react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Swal from 'sweetalert2';


const TABLE_HEAD = ["No", "Title", "Category", "Description", "Delete"];

const MyAddedTask = () => {

    const { user } = useContext(authContext)
    const axiosPublic = UseAxiosPublick()

    const { data: userDatas = [], refetch } = useQuery({
        queryKey: ['userDatas'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/taskEmail/${user?.email}`)
            return res.data
        }
    })

    const handleDelete = (userData) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You want to delete ${userData?.title}!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/tasks/${userData?._id}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: `${userData?.title} has been deleted.`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <h3 className="text-lg font-semibold text-black">All Task : </h3>
            <div>
                <Card className="h-full w-full overflow-scroll">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {userDatas.map((userData, index) => {
                                const isLast = index === userDatas.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={userData._id}>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {index + 1}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {userData?.title}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                <span className='bg-yellow-500 rounded-md px-2 py-1'>{userData?.category}</span>
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {userData?.description.substring(1, 20)}<span className='text-blue-500 font-bold'>...more</span>
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                className="font-medium"
                                            >
                                                <button onClick={() => handleDelete(userData)} className='btn btn-xs'><RiDeleteBin2Fill className='text-red-600 text-2xl' /></button>
                                            </Typography>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </Card>
            </div>
        </div>
    );
};

export default MyAddedTask;