import React from "react";
import { useLocation } from "react-router-dom";

const Question = () => {
  const { state } = useLocation();

  return (
    <div className="p-4 ">
      <div className="flex gap-3 m-2 p-3">
        <div className="p-4 text-lg">Question: </div>
        <div>{state?.ques?.title}</div>
      </div>
      <div className="mx-2 px-3">
        <div className="px-4">
            <video src={''} controls className="w-[700px] h-[500px] border rounded"></video>
        </div>
        <div>
            <p>{state?.ques?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Question;
