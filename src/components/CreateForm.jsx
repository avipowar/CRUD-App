import React from "react";
import { useState } from "react";

const CreateForm = () => {
  const [user, setUser] = useState({});

  const getUserData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //   stop the page reloading
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-4 rounded mx-auto w-6/12 mt-6 h-full shadow"
    >
      <h1 className="font-bold text-center text-xl mb-5">Fill The Form</h1>

      <div className="mb-4">
        <label className="block mb-1 text-center font-semibold  text-orange-400">
          Name:
        </label>
        <input
          type="text"
          name="name"
          onChange={getUserData}
          className="w-full  p-2 border border-gray-300 rounded outline-none"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-center font-semibold text-orange-400">
          Email:
        </label>
        <input
          type="email"
          name="email"
          onChange={getUserData}
          className="w-full  p-2 border border-gray-300 rounded outline-none"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-center font-semibold text-orange-400">
          Age:
        </label>
        <input
          type="number"
          name="age"
          onChange={getUserData}
          className="w-full  p-2 border border-gray-300 rounded outline-none"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-center font-semibold text-orange-400">
          Gender:
        </label>
        <select
          type="text"
          name="gender"
          onChange={getUserData}
          className="w-full  p-2 border border-gray-300 rounded outline-none"
        >
          <option value="" hidden>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="text-center mt-6">
        <button
          type="submit"
          className="bg-orange-400 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default CreateForm;
