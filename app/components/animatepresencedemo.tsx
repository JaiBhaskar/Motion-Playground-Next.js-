"use client"
import {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';

export function AnimatePresenceDemo(){
    const [show, setShow] = useState(true);

    return (
        <>
        <button onClick={()=> setShow(!show)}>Toggle</button>

        <AnimatePresence mode="wait">
            {show && (
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            >Hello Bro!</motion.div>)}
        </AnimatePresence>
        </>
    )
}