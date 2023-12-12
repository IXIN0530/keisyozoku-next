import { Data } from "@/types/data";
import { useEffect, useRef, useState } from "react";

const useSubjectAndPointList = () => {
    const [data, setData] = useState<Data>([]);

    const didMount = useRef(false);

    useEffect(() => {
        if (!didMount.current) {
            didMount.current = true;
            const json = localStorage.getItem("sub_and_point");
            if (json) {
                const array = JSON.parse(json);
                setData(array);
            }
        }
        else {
            if (data.length) {
                const json = JSON.stringify(data);
                localStorage.setItem("sub_and_point", json);
            }
            else {
                localStorage.removeItem("sub_and_point");
            }
        }
    }, [data]);

    return { data, setData };
}

export default useSubjectAndPointList;
