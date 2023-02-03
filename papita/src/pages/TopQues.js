import React, { useState } from "react";

const TopQues = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className=" min-h-screen relative bg-transparent scrollbar-hide">
      <div className="p-4  font-bold tracking-widest">Block Number: </div>
      <div className="flex flex-col items-start justify-start">
        <div className="p-4  font-bold tracking-widest">Transactions</div>
        {isLoading ? (
          <div className=" text-lg">Loading....</div>
        ) : (
          <section className="py-4 w-[800px] px-10 my-4 mx-16 gap-4 flex flex-col rounded-md bg-transparent">
            <div className="flex flex-col gap-5 justify-start p-4 border rounded bg-white cursor-pointer">
              <div className="flex gap-5 justify-start">
                <p className="w-32 text-left">Hash</p>
                <p></p>
              </div>
              <div className="flex gap-5 justify-start">
                <p className="w-32 text-left">Transaction Index</p>
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
