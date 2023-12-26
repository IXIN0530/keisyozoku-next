"use client"
import useCreateForm from "@/hooks/useCreateForm";
import SubjectTypeSelectBtn from "./SubjectTypeSelectBtn";
import { Data, SetData } from "@/types/data";
import subjectdata from "@/app/subjectdata";

type Props = {
  data: Data;
  setData: SetData;
}

const MakeSubject = ({ data, setData }: Props) => {
  const {
    isRequired,
    score,
    handleSubjectChange,
    handleScoreChange,
    handleSubmit,
    changeSubjectCollectly,
    changeInputValue,
    useExpect,
    isSelected,
    setIsSelected,
  } = useCreateForm(data, setData);

  const { electiveSubjects, requiredSubjects } = subjectdata();

  let selectedSubject = [""]
  data.forEach((item) => {
    selectedSubject.push(item.subject);
  });
  // const SerchButtonPush=(num:number)=>{
  //   if(isSelected){
  //     setIsSelected(1);
  //   }
  //   else{
  //     var obj=document.getElementById("SelectBox");
  //     obj.selectedIndex=-1;
  //   }
  // }

  return (
    <>
      <div className="bg-gray-200  mx-auto p-4 border border-gray-500 rounded-3xl shadow-gray-700 shadow flex flex-col gap-4">
        <div className="flex gap-4 justify-center">
          <SubjectTypeSelectBtn
            className="bg-blue-200 px-2 rounded"
            isSelected={!isRequired}
            onClick={() => changeSubjectCollectly(false)}
            text="選択"
          />
          <SubjectTypeSelectBtn
            className="bg-red-300 px-2 rounded"
            isSelected={isRequired}
            onClick={() => changeSubjectCollectly(true)}
            text="必修"
          />

          <button onClick={isSelected ? () => (setIsSelected(0)) : () => (setIsSelected(1))} className="flex bg-sky-400 p-1 rounded-xl duration-500 ease-out" style={isSelected ? { boxShadow: "none", backgroundColor: "#058eff" } : { boxShadow: "0 2px 2px gray" }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
            {isSelected ? <p>検索を止める</p> : <p>検索をする</p>}
          </button>
        </div>
        <select id="SelectBox" onChange={handleSubjectChange} className="block mx-auto border border-black">
          {!isSelected ? (isRequired ? requiredSubjects.map(item => <option key={item} value={item}>{item}</option>) : electiveSubjects.map(item => <option key={item} value={item}>{item}</option>))
            : useExpect.map(item => <option style={selectedSubject.includes(item) ? { color: "red" } : {}} key={item} value={item}>{item}</option>)}
        </select>
        <form onSubmit={handleSubmit} className="flex gap-4 justify-center">
          <input
            onChange={handleScoreChange}
            className="text-3xl leading-9 py-2 px-4 text-center rounded-xl shadow-md shadow-gray-500"
            required
            value={score}
            type="number"
            max={100}
            min={0}
            placeholder="入力"
          />
          <button className=" px-4 py-2 bg-[#00dcb6] rounded-xl text-white font-bold text-lg shadow-lg hover:scale-105 duration-300">登録</button>
        </form>
        {isSelected ? <p className="mt-4 text-center">検索して下さい</p> : false}
        {isSelected ? <input className=" w-4/5 rounded-xl p-2 text-center shadow-lg mx-auto" onChange={changeInputValue} /> : <span></span>}
      </div>
    </>
  );
}

export default MakeSubject;