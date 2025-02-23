import { useQuery } from "@tanstack/react-query";
import UseAxiosPublick from "../Hooks/UseAxiosPublick";
import CenterCard from "./CenterCard";


const Centerinprogress = () => {

    const axiosPublic = UseAxiosPublick()

    const { data: inProgresss = [] } = useQuery({
        queryKey: ['inProgresss'],
        queryFn: async () => {
            const res = await axiosPublic.get('/taskCategory/In-Progress')
            return res.data
        }
    })
    
    return (
        <div>
            <h3 className="text-lg font-semibold text-black text-center"><u>In Progress
            </u></h3>
            <div className="grid grid-cols-1 gap-4 p-3">
                {
                    inProgresss.map(inProgress => <CenterCard key={inProgress._id} inProgress={inProgress}></CenterCard>)
                }
            </div>
        </div>
    );
};

export default Centerinprogress;