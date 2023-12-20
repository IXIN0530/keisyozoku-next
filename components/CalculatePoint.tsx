import useCalculate from "@/hooks/useCalculate";
import { Data, SetData } from "@/types/data";

type Props = {
  data: Data;
  setData: SetData;
}

const CalculatePoint = ({ data, setData }: Props) => {
  const { sumPoint, handleClick } = useCalculate(data, setData);

  return (
    <div className=" rounded-xl py-4 bg-yellow-200 flex justify-center gap-8">
      <p className="w-[100px] p-3 text-center text-4xl border border-black bg-white">{sumPoint}</p>
      <button className="font-bold text-lg text-white bg-orange-400 px-4 rounded shadow shadow-gray-800 hover:scale-105 duration-300" onClick={handleClick}>系所属点を計算</button>
    </div>
  );
}

export default CalculatePoint;