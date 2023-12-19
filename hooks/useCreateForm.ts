import { Data, SetData } from "@/types/data";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import subjectdata from "@/app/subjectdata";

const useCreateForm = (data: Data, setData: SetData) => {
    /**
     * 選択科目
     */

    const [isRequired, setIsRequired] = useState(false);
    const { electiveSubjects, requiredSubjects } = subjectdata();
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

    const changeSubjectCollectly = (r: boolean) => {

        if (r != isRequired) {
            setSubject(r ? "英語第一" : "化学実験第一(2)");
            setIsRequired(r);
        }

    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const _score = Number(score);
        if (!isNaN(_score) && _score >= 0 && _score <= 100) {
            //同じ科目を入れないための処理
            let counter = true;
            data.forEach((item) => {
                if (item.subject === subject) counter = false;
            });
            if (counter) {
                setData([...data, { isRequired, subject, score: _score }]);
            }
            else {
                alert("すでにこの科目は登録されています。");
            }

        }
        setScore("");
    }
    //以下、必修選択を選んだときのバグを治すために移行してきた。
    const [inputValue, setInputValue] = useState("");
    const [useExpect, setUseExpect] = useState<string[]>([]);
    const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    useEffect(() => {
        let _expect = <string[]>[];
        if (isRequired) {
            requiredSubjects.forEach((item) => (item.includes(inputValue) && inputValue != ""
                ? _expect.push(item) : false));
        }
        else {
            electiveSubjects.forEach((item) => (item.includes(inputValue) && inputValue != ""
                ? _expect.push(item) : false));
        }
        setUseExpect(_expect);
        console.log(_expect);
    }, [inputValue, isRequired]);
    return {
        isRequired,
        setIsRequired,
        nowSubject,
        score,
        subject,
        handleSubjectChange,
        handleScoreChange,
        handleSubmit,
        electiveSubjects,
        requiredSubjects,
        changeSubjectCollectly,
        changeInputValue,
        useExpect,
    }
}

export default useCreateForm;