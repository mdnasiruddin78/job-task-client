import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <motion.div
                className="w-16 h-16 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            ></motion.div>
        </div>
    );
};

export default Loading;