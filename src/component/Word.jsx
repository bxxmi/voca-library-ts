import React from "react";
import { useState } from "react";

const Word = ({ word }) => {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function handleToggle() {
    setIsShow(!isShow);
  }

  function handleDone() {
    setIsDone(!isDone);
  }

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={handleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={handleToggle}>뜻 {isShow ? "숨기기" : "보기"}</button>
      </td>
      <td>
        <button className="btn_del">삭제</button>
      </td>
    </tr>
  );
};

export default Word;
