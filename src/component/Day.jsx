import data from "../database/data.json";
import React from "react";
// url에 포함된 값을 얻을 때 useParams 사용
import { useParams } from "react-router-dom";
import Word from "./Word";

const Day = () => {
  const { day } = useParams();
  // 숫자와 문자를 비교해서 값이 안나왔기 때문에 day 변수에 담긴 값을 숫자로 변경한 다음 비교한다.
  const wordList = data.words.filter((word) => word.day === Number(day));

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => {
            return <Word word={word} key={word.id} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default Day;
