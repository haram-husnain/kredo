"use client"

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

interface RevealProps {
    children: React.ReactNode;
    delay?: number;
}

const yOffset = typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : 40;

export default function Reveal({ children, delay=0 }: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: false, margin: "-50px"});

    return(
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={ isInView ? { opacity: 1, y: yOffset } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
        >
        
            {children}
        </motion.div>
    );
}