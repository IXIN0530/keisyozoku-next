import useCreateForm from "@/hooks/useCreateForm";
import SubjectTypeSelectBtn from "./SubjectTypeSelectBtn";
import { Data, SetData } from "@/types/data";

type Props = {
  data: Data;
  setData: SetData;
}

const MakeSubject = ({ data, setData }: Props) => {
  const {
    isRequired,
    setIsRequired,
    nowSubject,
    score,
    subject,
    handleSubjectChange,
    handleScoreChange,
    handleSubmit,
  } = useCreateForm(data, setData);

  return (
    <>
      <p className="text-center my-4">科目選択と点数登録</p>
      <div className="bg-gray-200 w-4/5 mx-auto p-4 border border-gray-500 rounded-3xl shadow-gray-700 shadow flex flex-col gap-4">
        <div className="flex gap-4 justify-center">
          <SubjectTypeSelectBtn
            className="bg-blue-200 px-2 rounded"
            isSelected={!isRequired}
            onClick={() => setIsRequired(false)}
            text="選択"
          />
          <SubjectTypeSelectBtn
            className="bg-red-300 px-2 rounded"
            isSelected={isRequired}
            onClick={() => setIsRequired(true)}
            text="必修"
          />
        </div>
        <select onChange={handleSubjectChange} value={subject} className="block mx-auto border border-black">
          {nowSubject.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
        <form onSubmit={handleSubmit} className="flex gap-4 justify-center">
          <input
            onChange={handleScoreChange}
            className="text-3xl leading-9 py-2 text-center rounded-xl shadow-md shadow-gray-500"
            required
            value={score}
            type="number"
            max={100}
            min={0}
            placeholder="入力"
          />
          <button className="leading-9 px-4 py-2 bg-[#00dcb6] rounded-xl text-white font-bold text-lg">登録</button>
        </form>
      </div>
    </>
  );
}

export default MakeSubject;