"use client";
import {motion} from "framer-motion";

export function LiveBadge() {
    return (
        <motion.div className="bg-purple-500 rounded-2xl w-20 h-10 flex items-center justify-center text-white font-bold mt-7"
        animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, repeatType: "reverse", repeatDelay: 0.5 }}>
            <motion.span>
                LIVE
            </motion.span>
        </motion.div>
    );
}