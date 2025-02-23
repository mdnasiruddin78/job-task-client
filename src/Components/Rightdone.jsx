import { useQuery } from "@tanstack/react-query";
import UseAxiosPublick from "../Hooks/UseAxiosPublick";
import DoneCard from "./DoneCard";


const Rightdone = () => {

    const axiosPublic = UseAxiosPublick()

    const { data: dones = [] } = useQuery({
        queryKey: ['dones'],
        queryFn: async () => {
            const res = await axiosPublic.get('/taskCategory/Done')
            return res.data
        }
    })

    return (
        <div>
            <h3 className="text-lg font-semibold text-black text-center"><u>Done
            </u></h3>
            <div className="grid grid-cols-1 gap-4">
                {
                    dones.map(done => <DoneCard key={done._id} done={done}></DoneCard>)
                }
            </div>
        </div>
    );
};

export default Rightdone;