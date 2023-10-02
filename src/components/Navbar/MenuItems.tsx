import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = (props: { title: string; link: string; }) => {
  const { title, link } = props;

  const style = { border: `2px solid ${colors[1]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="list-none mb-10 flex items-center cursor-pointer"
    >
      {
        title !== '' ?
          <>
            <Link href={link} >
              <div className=" w-10 h-10 rounded-full flex-shrink-0 mr-7" style={style} />
              <div className="rounded-md w-48 h-5 flex-1 text-[#D309E1] " >{title}</div>
            </Link>
          </>
          :
          <>
           <Link href={link} >
      <div className=" w-10 h-10 rounded-full flex-shrink-0 mr-7" style={style} />
      <div className="rounded-md w-48 h-5 flex-1 text-[#D309E1] " style={style} ></div>
      </Link></>
      }

    </motion.li>
  );
};
