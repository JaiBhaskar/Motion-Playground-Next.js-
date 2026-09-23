"use client";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 }, 
    visible: {opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 5 } }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
}

export function FeaturesList() {
    interface Features {
        name: string;
    }
    const features: Features[] = [
        { name: "Feature 1" },
        { name: "Feature 2" },
        { name: "Feature 3" },
        { name: "Feature 4" }
    ];
    return (
         <motion.ul className="list-disc" variants={container} initial="hidden" animate="visible">
            {features.map((feature, index) => (
                <motion.li variants={item} key={index}>
                    {feature.name}
                </motion.li>
            ))}
        </motion.ul>
    );
}