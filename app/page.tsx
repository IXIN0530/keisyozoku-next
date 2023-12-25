"use client"

import Link from "next/link";
import { motion, easeOut } from "framer-motion";
import Logo from "./Logo/logo";

export default function Home() {

  return (
    <div className=" mx-4 text-center flex flex-col min-h-[100svh]  justify-evenly ">
      <motion.h1 className='text-xl font-bold text-center my-4 col-span-1 flex justify-center gap-4 select-none'
        initial={{ y: 70, opacity: 0 }}
        animate={{ y: [70, -10, 0], opacity: 1 }}
        exit={{ y: 70, opacity: 0 }}
        transition={{ duration: 0.7 }}>系所属点数シュミレータ
        <Logo />
      </motion.h1>
      <motion.p className=""
        initial={{ y: 90, opacity: 0 }}
        animate={{ y: [90, -10, 0], opacity: 1 }}
        exit={{ y: 90, opacity: 0 }}
        transition={{ duration: 0.9 }}>
        本アプリは、東工大1年生の成績を管理し、系所属点を簡単に算出できるアプリです。<br />
        科目を選択・検索して点数を入力することで成績をわかりやすく管理することができます。
      </motion.p>
      <motion.div className="flex justify-center gap-2"
        initial={{ y: 110, opacity: 0 }}
        animate={{ y: [110, -10, 0], opacity: 1 }}
        exit={{ y: 110, opacity: 0 }}
        transition={{ duration: 1.1 }}>
        <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSfwYZ2nTnmgGw5AaKrM_YNk1R6HqKfTSzTG9KZ3ZFyuwi93Mw/viewform?usp=sf_link"}>お問い合わせはこちら</Link>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </motion.div>
      <motion.div className=" border">
      </motion.div>
      <motion.div className=""
        initial={{ y: 130, opacity: 0 }}
        animate={{ y: [130, -10, 0], opacity: 1 }}
        exit={{ y: 130, opacity: 0 }}
        transition={{ duration: 1.3 }}>
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
