import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const TopQues = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <div className=" min-h-screen relative bg-transparent scrollbar-hide">
      <div className="p-4 font-bold tracking-widest"></div>
      <div className="flex p-4 flex-col items-start justify-start">
        <div className="p-4 font-bold tracking-widest">Frequently asked</div>
        {isLoading ? (
          <div className=" text-lg">Loading....</div>
        ) : (
          <section onClick={() => navigate('/question', {state: {ques: "question"}})} className="py-4 w-[800px] px-10 my-4 mx-16 gap-4 flex flex-col rounded-md bg-transparent">
            <div className="flex flex-col gap-5 justify-start p-4 border rounded bg-white cursor-pointer">
              <div className="flex gap-5 justify-start">
                <p className="w-32 text-left">This that this that</p>
                <p></p>
              </div>
              <div className="flex gap-5 justify-start">
                <p className="w-32 text-left">uihfiuwefuiewif</p>
                <p></p>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button className="bg-blue-300 p-3 m-2 rounded">
                Load More
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default TopQues;
