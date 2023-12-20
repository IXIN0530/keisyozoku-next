"use client"

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <div className=" mx-4 text-center flex flex-col min-h-[100svh]  justify-evenly ">
      <motion.h1 className='text-xl font-bold text-center my-4 col-span-1'
        initial={{ y: 70, opacity: 0 }}
        animate={{ y: [70, -10, 0], opacity: 1 }}
        exit={{ y: 70, opacity: 0 }}
        transition={{ duration: 0.7 }}>系所属点数シュミレータ</motion.h1>
      <motion.p className="">
        本アプリは、東工大1年生の成績を管理し、系所属点を簡単に算出できるアプリです。<br />
        科目を選択・検索して点数を入力することで成績をわかりやすく管理することができます。
      </motion.p>
      <motion.div className=" border">
      </motion.div>
      <motion.div className=""
        initial={{ y: 90, opacity: 0 }}
        animate={{ y: [90, -10, 0], opacity: 1 }}
        exit={{ y: 90, opacity: 0 }}
        transition={{ duration: 0.9 }}>
        <Link className="bg-sky-400 rounded-2xl  w-3/5  p-4 h-full mx-auto flex text-white font-bold justify-center" href={"/simulate"}>
          成績の管理はこちら
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </Link>
      </motion.div>
    </div>
  );
}
