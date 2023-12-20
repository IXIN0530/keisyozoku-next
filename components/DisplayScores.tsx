import React from 'react'
import ScoreBoard from './ScoreBoard';
import useCreateDeleteMe from '@/hooks/useCreateDeleteMe';
import { Data, SetData } from '@/types/data';

type Props = {
  data: Data;
  setData: SetData;
}

const DisplayScores = ({ data, setData }: Props) => {
  const createDeleteMe = useCreateDeleteMe(data, setData);

  return (
    <div className='border border-black  mx-auto my-4 '>
      {data.length ? (
        data.map((item, index) =>
          <ScoreBoard
            // TODO: 同じ教科を複数登録させないようにする。
            key={item.subject + String(index)}
            subjectAndPoint={item}
            deleteMe={createDeleteMe(index)}
          />
        )
      ) : (
        <p className='py-4 text-center bg-bg1'>まだ点数が保存されていません</p>
      )}
    </div>
  );
}

export default DisplayScores;