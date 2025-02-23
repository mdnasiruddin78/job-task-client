import { useQuery } from "@tanstack/react-query";
import UseAxiosPublick from "../Hooks/UseAxiosPublick";
import TodoCard from "./TodoCard";


const Lefttodo = () => {

    const axiosPublic = UseAxiosPublick()

    const { data: todos = [] } = useQuery({
        queryKey: ['todos'],
        queryFn: async () => {
            const res = await axiosPublic.get('/taskCategory/To-Do')
            return res.data
        }
    })

    return (
        <div>
            <h3 className="text-lg font-semibold text-black text-center"><u>To-Do
            </u></h3>
            <div className="grid grid-cols-1 gap-4">
                {
                    todos.map(todo => <TodoCard key={todo._id} todo={todo}></TodoCard>)
                }
            </div>
        </div>
    );
};

export default Lefttodo;