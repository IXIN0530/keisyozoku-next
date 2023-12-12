import { Data, SetData } from "@/types/data";

const useCreateDeleteMe = (data: Data, setData: SetData) => {
    const createDeleteMe = (index: number) => {
        return () => {
            const _data = [...data];
            _data.splice(index, 1);
            setData(_data);
        }
    }

    return createDeleteMe;
}

export default useCreateDeleteMe;
