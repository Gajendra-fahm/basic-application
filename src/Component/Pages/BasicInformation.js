import React from 'react';

const BasicInformation = () => {
  return (
    <div className="w-full shadow-custom border rounded-md p-4 bg-gradient-to-r from-purple-600 to-blue-500">
      <h2 className="font-semibold text-white text-lg mb-4">Basic Information</h2>

      <div className="grid gap-2">
        <div className="flex">
          <span className="w-24 font-bold text-white">Mobile:</span>
          <span className="text-white">8871247387</span>
        </div>
        <div className="flex">
          <span className="w-24 font-bold text-white">Address:</span>
          <span className="text-white">Gokul Dham Socity, Vejalpur, Ahmedabad</span>
        </div>
        <div className="flex">
          <span className="w-24 font-bold text-white">Rating:</span>
          <span className="text-white">☆ ☆ ☆ ☆</span>
        </div>
        <div className="flex">
          <span className="w-24 font-bold text-white">Email:</span>
          <span className="text-white">gajendra@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;
