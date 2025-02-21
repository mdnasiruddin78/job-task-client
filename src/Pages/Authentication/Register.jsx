import { Link } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin";


const Register = () => {
    return (
        <div className='flex justify-center items-center bg-base-300 p-4'>
            <div className='flex w-full max-w-lg mx-auto overflow-hidden bg-white rounded-lg my-10'>
                <div className='w-full px-6 py-8 md:px-8 '>
                    <p className='mt-3 text-xl text-center font-semibold text-gray-600 '>
                        Register Now!
                    </p>
                    <SocialLogin></SocialLogin>
                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/login'
                            className='text-xs text-black font-semibold uppercase  hover:underline'
                        >
                            or sign in
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;