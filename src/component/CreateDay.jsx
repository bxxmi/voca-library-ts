import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const CreateDay = () => {
  const days = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();

  function handleAddDay(event) {
    event.preventDefault();

    fetch(`http://localhost:3001/days/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성 완료!");
        navigate("/");
      }
    });
  }

  return (
    <div>
      <h3>현재 일수 {days.length}</h3>
      <button onClick={handleAddDay}>Day 추가</button>
    </div>
  );
};

export default CreateDay;
