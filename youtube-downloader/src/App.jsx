import { useState } from "react";


const App = () => {
  return (
    <div>
      <h1 className="text-center mt-5 text-3xl font-bold underline mb-5 text-red-500">
        Donwload mp4
      </h1>
      <div className="flex justify-center items-center w-[100%]">
        <form
          action="/download"
          method="post"
          className="flex justify-center sm:flex-col items-center  w-[80%] "
        >
          <input
            className="bg-gray-200 w-full flex-1  sm:flex-none sm:mb-5   appearance-none mx-5 h-16 rounded px-5"
            name="url"
            placeholder="Video url e.g https://youtube.com/watch?v=azfze"
          />
          <button type="submit" className="bg-indigo-200  sm:w-full rounded p-5">
            Download now!!
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
