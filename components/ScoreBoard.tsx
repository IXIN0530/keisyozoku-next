import getScoreColor from "@/functions/getScoreColor";
import { SubjectAndScore } from "@/types/data";

type Props = {
  subjectAndPoint: SubjectAndScore;
  deleteMe: () => void;
}

const ScoreBoard = ({ subjectAndPoint, deleteMe }: Props) => {
  const { isRequired, subject, score } = subjectAndPoint;
  const backgroundColor = isRequired ? "rgb(255, 153, 153)" : "rgb(183, 214, 255)";
  const scoreColor = getScoreColor(score);

  return (
    <div className="flex [&>*]:py-4 border-b border-black last:border-none">
      <p className="flex-grow border-r border-black text-center" style={{ backgroundColor: backgroundColor }}>{subject}:</p>
      <p className="w-[100px] border-r border-black text-center" style={{ backgroundColor: scoreColor }}>{score}</p>
      <button className="w-[150px] bg-[#FF0000] text-white text-lg font-bold" onClick={deleteMe}>削除</button>
    </div>
  );
}

export default ScoreBoard;