import DateSelector from '@/components/DatePicker'
import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import rocket from '../styles/rocket.png'
import Image from 'next/image';
import { getCurrentLocation } from '@/libs/geolocation';
import { error } from 'console';

export interface Coordinates {
  latitude: number;
  longitude: number;
}

function Index() {
  const [location, setLocation] = useState({
    latitude: 65.00,
    longitude: 18.00
  })

  const constraintsRef = useRef(null);
  getCurrentLocation()
    .then((resp) => {
      if (resp) {
        const currentLocation =
        {
          latitude: resp.latitude,
          longitude: resp.longitude
        };
        setLocation(currentLocation)
      }

    }).catch(err => { console.error(err) });

  return (
    <div>index
      <DateSelector />
      <div className=' flex items-center justify-center'>
        <motion.div className="w-60 h-60 backdrop-blur-sm bg-white/30 rounded-md" ref={constraintsRef}>
          <motion.div className=" w-20 h-20 bg-gradient-to-r from-purple-400 via-pink-300 to-fuchsia-200 rounded-[50%]" drag dragConstraints={constraintsRef}>
          </motion.div>
        </motion.div>
      </div>
      <motion.div />
      <div>
        <h1>Longitude : {location.longitude}</h1>
        <h1>Latitude : {location.latitude}</h1>
      </div>

    </div>
  )
}

export default Index

function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}
