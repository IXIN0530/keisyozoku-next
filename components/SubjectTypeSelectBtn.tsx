import React from 'react'

type Props = {
  className: string;
  isSelected: boolean;
  onClick: () => void;
  text: string;
}

const SubjectTypeSelectBtn = ({ className, isSelected, onClick, text }: Props) => {
  return (
    <button
      className={className}
      style={{
        borderBottom: isSelected ? "rgb(0, 185, 0)  solid" : "none",
        transition: "ease-in-out 0.3s"
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default SubjectTypeSelectBtn;