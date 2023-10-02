import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Data {
  url: string;
  title: string;
  explanation: string;
  date: string;
}

function Index() {
  const [data, setData] = useState<Data>({
    url: '',
    title: '',
    explanation: '',
    date: '',
  });

  useEffect(() => {
    const fetchAPOD = async () => {
      try {
        const response = await axios.get(
          'https://api.nasa.gov/planetary/apod?api_key=iVlRp3LwfMXz7Oi8BDfWac91Wdu9YRUpd0T8IEyN'
        );
        const fetchedData = response.data;
        setData(fetchedData);
        console.log('Fetched data:', fetchedData);
      } catch (error) {
        console.error('Error fetching APOD data:', error);
      }
    };

    fetchAPOD();
  }, []);

  return (
    <div className="flex flex-wrap flex-col items-center justify-center text-center">
      <h1
         className='text-[30px] font-semibold'
         
         >APOD</h1>
      {data ? (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Link href={data.url} target="_blank" >
              <Image
                src={data.url}
                alt="Apod Image"
                width={500}
                height={500}
                className="object-cover rounded-xl my-5"
              />
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className='text-[30px] font-semibold'
          >

            {data.title}
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className=' font-light'

          >
            {data.date}
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className='m-5 md:mx-20'
          >
            {data.explanation}
          </motion.h1>
        </>


      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Index;
