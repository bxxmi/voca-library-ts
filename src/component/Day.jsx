import React from "react";
// url에 포함된 값을 얻을 때 useParams 사용
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word from "./Word";

const Day = () => {
  const { day } = useParams();
  // 숫자와 문자를 비교해서 값이 안나왔기 때문에 day 변수에 담긴 값을 숫자로 변경한 다음 비교한다.
  // const wordList = data.words.filter((word) => word.day === Number(day));
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>...loading</span>}
      <table>
        <tbody>
          {words.map((word) => {
            return <Word word={word} key={word.id} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default Day;
