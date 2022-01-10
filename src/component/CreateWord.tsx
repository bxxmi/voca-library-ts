import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { IDay } from "./DayList";

const CreateWord = () => {
  const [isLoading, setIsLoading] = useState(false);
  const days: IDay[] = useFetch(`http://localhost:3001/days`);
  const navigate = useNavigate();

  const engRef = useRef<HTMLInputElement>(null);
  const korRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!isLoading && dayRef.current && engRef.current && korRef.current) {
      setIsLoading(true);

      const day = dayRef.current.value;
      const eng = dayRef.current.value;
      const kor = dayRef.current.value;

      fetch(`http://localhost:3001/words/`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          day,
          eng,
          kor,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("생성 완료!");
          navigate(`/day/${day}`);
          setIsLoading(false);
        }
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input_area">
        <label>ENG</label>
        <input type="text" placeholder="ex) computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label>KOR</label>
        <input type="text" placeholder="ex) 컴퓨터" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => {
            return (
              <option key={day.id} value={day.day}>
                {day.day}
              </option>
            );
          })}
        </select>
      </div>
      <button
        style={{
          opacity: isLoading ? 0.3 : 1,
        }}
      >
        {isLoading ? "저장 중" : "저장"}
      </button>
    </form>
  );
};

export default CreateWord;
