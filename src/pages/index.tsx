import DateSelector from '@/components/DatePicker'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import rocket from '../styles/rocket.png'
import Image from 'next/image';


function Index() {
  const constraintsRef = useRef(null);


  return (
    <div>index
    <DateSelector/>
    <div className=' flex items-center justify-center'> 
    <motion.div className="w-60 h-60 backdrop-blur-sm bg-white/30 rounded-md" ref={constraintsRef}>
      <motion.div className=" w-20 h-20 bg-gradient-to-r from-purple-400 via-pink-300 to-fuchsia-200 rounded-[50%]" drag dragConstraints={constraintsRef}>
      </motion.div>
    </motion.div>
    </div>
    <motion.div    />

    </div>
  )
}

export default Index