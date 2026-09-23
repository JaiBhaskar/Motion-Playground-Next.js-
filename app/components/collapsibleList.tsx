"use client";
import {motion} from "framer-motion";
import {useState} from "react";


export function CollapsibleList() {
    const [expanded, setExpanded] =useState<number | null>(null);
    const items: number[] = [1,2,3]
    return (
        <div className="border-2 border-black rounded-md p-4 w-full max-w-md bg-gray-700">
            {items.map((id)=>(
                <motion.div
                key={id}
                layout
                onClick={() => setExpanded((prev)=> (prev===id? null : id))}
                className="border-2 border-black rounded-md p-4 mb-2 cursor-pointer bg-pink-500 shadow-md"
                >
                <h3>Item {id}</h3>
                {expanded === id && (
                    <motion.p layout>
                        This section expands and contracts with a layout
                    </motion.p>
                )}
                </motion.div>))
}
        </div>
    );
}