import Centerinprogress from "../Components/Centerinprogress";
import Lefttodo from "../Components/Lefttodo";
import Navbar from "../Components/Navbar";
import Rightdone from "../Components/Rightdone";


const Home = () => {

    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className="grid lg:grid-cols-9 grid-cols-1 gap-4 mt-4">
                <aside className='left lg:col-span-3 md:col-span-3 border-2 border-gray-500 bg-white p-2 rounded-md'>
                    <Lefttodo></Lefttodo>
                </aside>
                <section className='lg:col-span-3 md:col-span-3 border-2 border-gray-500 bg-white p-2 rounded-md'>
                    <Centerinprogress></Centerinprogress>
                </section>
                <aside className='right lg:col-span-3 md:col-span-3 border-2 border-gray-500 bg-white p-2 rounded-md'>
                    <Rightdone></Rightdone>
                </aside>
            </main>
        </div>
    );
};

export default Home;