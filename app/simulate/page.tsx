"use client"

import CalculatePoint from "@/components/CalculatePoint";
import DisplayScores from "@/components/DisplayScores";
import MakeSubject from "@/components/MakeSubject";
import useSubjectAndPointList from "@/hooks/useSubjectAndPointList";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const { data, setData } = useSubjectAndPointList();

  return (
    <motion.div className="max-w-lg mx-auto px-4"
      initial={{ opacity: 0 }}
      animate={{ y: [70, -10, 0], opacity: 1 }}
      transition={{ duration: 0.7 }}>
      <h1 className='text-xl font-bold text-center my-4'>系所属点数シュミレータ</h1>
      <Link href={"/"} className=" flex my-8 text-center mx-auto w-2/5 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        トップページに戻る
      </Link>
      <p className="text-center my-4">*入力していただいた点数情報はローカルに保存されます</p>
      <MakeSubject data={data} setData={setData} />
      <DisplayScores data={data} setData={setData} />
      <CalculatePoint data={data} setData={setData} />
    </motion.div>
  );
}
