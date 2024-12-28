import React from "react";

const PostYourResume = () => {
  return (
    <div className="w-full shadow-custom border rounded-md p-2 ml-3 ">
      <h2 className="font-semibold ">Post Your Resume</h2>

      <div className="flex justify-around gap-3">
        <input
          type="text"
          placeholder="name"
          className="w-full border rounded-xl  p-1 items-center"
        />
        <input
          type="email"
          placeholder="email"
          className="w-full border rounded-xl  p-1 items-center"
        />
        <input
          type="number"
          placeholder="mobile"
          className="w-full border rounded-xl  p-1 items-center"
        />
      </div>
      <div className="w-full mt-3">
        <input
          type="file"
          placeholder="resume"
          className="w-full border rounded-xl  p-1 items-center"
        />
      </div>
      <div className="w-full  border rounded-xl text-center mt-3">
        <button className=" text-sm text-slate-500">Upload Your Resume</button>
      </div>
    </div>
  );
};

export default PostYourResume;
