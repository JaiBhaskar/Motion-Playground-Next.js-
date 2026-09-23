"use client"

import { motion } from "framer-motion"
export function Simple() {
    return (
        <motion.div
        initial={{ opacity: 0 , x: -50 }}
        animate={{ opacity: 1 , x: 0 }}
        transition={{ duration: 2 , ease: "easeIn" }}>
            Hello World!
        </motion.div>
    );
}