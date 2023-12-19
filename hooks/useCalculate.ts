import { Data, SetData } from "@/types/data";
import { useState } from "react";

const useCalculate = (data: Data, setData: SetData) => {
    const [sumPoint, setSumPoint] = useState(0);

    const sortData = () => {
        const _data = [...data];
        const sortedData = _data.sort((item1, item2) => ((item1.score) > (item2.score)) ? 1 : -1);
        const sortedData2 = sortedData.sort((item1, item2) => (item1.isRequired < item2.isRequired) ? 1 : -1);
        setData(sortedData2);
    }

    const calculateScoreAndCredits = () => {
        //系所属点数の算出
        let sum = 0;
        let requiredCredits = 0;
        let electiveCredits = 0;
        data.forEach(item => {
            /**
             * 科目当たりの単位数
             */
            let credits = 1;
            if (!item.isRequired) {
                //選択科目の場合
                if (item.subject.includes("(2)")) {
                    credits = 2;
                }
                if (electiveCredits + credits <= 14) {
                    electiveCredits += credits;
                    sum += item.score * credits;
                }
            }
            else {
                if (item.subject.includes("(2)")) {
                    credits = 2;
                }
                if (requiredCredits + credits <= 17) {
                    requiredCredits += credits;
                    sum += item.score * credits;
                }
            }
        });
        setSumPoint(sum);
    }

    const handleClick = () => {
        sortData();
        calculateScoreAndCredits();
    }

    return { sumPoint, handleClick }
}

export default useCalculate;
