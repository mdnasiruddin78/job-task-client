import { useQuery } from "@tanstack/react-query";
import UseAxiosPublick from "../Hooks/UseAxiosPublick";


const Lefttodo = () => {

    const axiosPublic = UseAxiosPublick()

    const { data: allTasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosPublic.get('/addTask')
            refetch()
            return res.data
        }
    })
    console.log(allTasks)
    return (
        <div>
            <h3 className="text-lg font-semibold text-black text-center"><u>To-Do
            </u></h3>
            to do section
            to do section
            to do section
            to do section
            to do section
            to do section
            to do section
            to do section
            to do section
            to do section
            to do section
            to do section
            to do section
            to do section
            to do section
            to do section
            to do section
            to do section
        </div>
    );
};

export default Lefttodo;