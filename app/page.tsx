"use client"

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <div className="">
      <div className="mx-4 text-center">
        <motion.h1 className='text-xl font-bold text-center my-4'
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: [70, -10, 0], opacity: 1 }}
          exit={{ y: 70, opacity: 0 }}
          transition={{ duration: 0.7 }}>系所属点数シュミレータ</motion.h1>
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: [90, -10, 0], opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.9 }}>
          <Link className="" href={"/simulate"}>成績の管理はこちら</Link>
        </motion.div>
      </div>
    </div>
  );
}
