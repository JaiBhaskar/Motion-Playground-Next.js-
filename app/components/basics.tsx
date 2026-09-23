"use client"
import { motion } from "framer-motion"

export function Basics() {
    return (
        <motion.div 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  whileHover={{rotate:360}}
  transition={{duration: 2}}
  >
Hello Motion!</motion.div>
    );
}