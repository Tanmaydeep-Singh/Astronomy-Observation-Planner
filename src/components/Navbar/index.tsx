import { motion, useCycle } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { useDimensions } from './use-Dimension';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';


const sidebar = {

    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 260px 40px )`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(24px at 260px 40px)",
        transition: {
            delay: 0.25,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};


function Navbar() {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);

    const { height } = useDimensions(containerRef);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}>
            <div className="navbar bg-base-100" >
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">AOP</a>
                </div>
                <div className="flex-3 absolute top-0 right-0 bottom-0">
                    <motion.nav
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                        custom={height}
                        ref={containerRef}
                    >
                        <motion.div className=" absolute top-0 bottom-0 right-0 bg-white w-[300px] z-10" variants={sidebar} />
                        <Navigation />

                        <MenuToggle toggle={() => toggleOpen()} />
                    </motion.nav>

                </div>
            </div>

        </motion.div>

    )
}

export default Navbar
