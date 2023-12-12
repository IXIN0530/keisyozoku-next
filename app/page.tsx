"use client"

import CalculatePoint from "@/components/CalculatePoint";
import DisplayScores from "@/components/DisplayScores";
import MakeSubject from "@/components/MakeSubject";
import useSubjectAndPointList from "@/hooks/useSubjectAndPointList";

export default function Home() {
  const { data, setData } = useSubjectAndPointList();

  return (
    <div className="">
      <h1 className='text-xl font-bold text-center my-4'>系所属点数シュミレータ</h1>
      <MakeSubject data={data} setData={setData} />
      <DisplayScores data={data} setData={setData} />
      <CalculatePoint data={data} setData={setData} />
    </div>
  );
}
