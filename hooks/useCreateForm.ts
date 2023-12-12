import { Data, SetData } from "@/types/data";
import { ChangeEvent, FormEvent, useState } from "react";

const useCreateForm = (data: Data, setData: SetData) => {
    /**
     * 選択科目
     */
    const electiveSubjects = [
        "化学実験第一(2)",
        "化学実験第二(2)",
        "物理学実験第一",
        "物理学実験第二",
        "物理学演習第一",
        "物理学演習第二",
        "生命科学基礎3Q",
        "生命科学基礎4Q",
        "生命科学基礎実験",
        "情報リテラシ第一",
        "情報リテラシ第二",
        "コンピュータサイエンス第一",
        "コンピュータサイエンス第二",
        "基礎データサイエンスAI",
        "学院別専門科目1Q",
        "学院別専門科目2Q",
        "学院別専門科目3Q",
        "学院別専門科目4Q",
        "その他学院別専門科目",
        "宇宙地球科学A(2)",
        "宇宙地球科学B(2)",
        "環境安全論",
        "ウェルネス実習",
        "生涯ウェルネス実習",
        "科学技術の最前線",
        "英語選択科目1Q",
        "英語選択科目2Q",
        "英語選択科目3Q",
        "英語選択科目4Q",
        "図学製図",
        "図学デザイン第一(2)",
        "図学デザイン第二(2)",
        "図形科学とCG",
        "宇宙地球科学ラボ(2)",
        "線形代数第二(2)",
        "線形代数演習第二",
        "微分積分学第二(2)",
        "微分積分演習第二",
        "グローバル理工人入門(2)",
    ];
    /**
     * 必修科目
     */
    const requiredSubjects = [
        "英語第一",
        "英語第二",
        "英語第三",
        "英語第四",
        "線形代数第一(2)",
        "微分積分学第一(2)",
        "力学基礎第一",
        "力学基礎第二",
        "電磁気学基礎第一",
        "電磁気学基礎第二",
        "無機化学基礎",
        "有機化学基礎",
        "量子化学基礎",
        "化学熱力学基礎",
        "文系教養2Q",
        "文系教養3Q",
        "文系教養4Q",
        "生命科学基礎1Q",
        "生命科学基礎2Q",
    ];

    const [isRequired, setIsRequired] = useState(false);

    const nowSubject = isRequired ? requiredSubjects : electiveSubjects;

    //登録ボタンが押された時の処理
    const [score, setScore] = useState("");
    const [subject, setSubject] = useState("化学実験第一(2)"); //今選択されている科目

    const handleSubjectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log();
        setSubject(e.target.value);
    }

    const handleScoreChange = (e: ChangeEvent<HTMLInputElement>) => {
        setScore(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const _score = Number(score);
        if (!isNaN(_score) && _score >= 0 && _score <= 100) {
            setData([...data, { isRequired, subject, score: _score }]);
        }
        setScore("");
    }

    return {
        isRequired,
        setIsRequired,
        nowSubject,
        score,
        subject,
        handleSubjectChange,
        handleScoreChange,
        handleSubmit,
    }
}

export default useCreateForm;