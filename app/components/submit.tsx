"use client"
import {motion} from "framer-motion"

type SubmitProps = {
    children: React.ReactNode,
    stiffness?: number,
    damping?: number
}
    
export function Submit({ children, stiffness=400, damping=4 }: SubmitProps) {
    return (
        <motion.button
            className="px-4 py-2 bg-blue-900 text-white rounded-lg"
            whileHover={{ scale :1.2}}
            whileTap={{ scale :0.8}}
            transition={{type: "spring", stiffness, damping}}
        >
            {children}
        </motion.button>
    );
}