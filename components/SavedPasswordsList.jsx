import React from "react";

function SavedPasswordList() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold mb-8">Saved Passwords</h1>
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center max-w-md">
        <div className="flex items-center w-full mb-4">
          <input
            type="text"
            placeholder="Enter text here"
            className="border border-gray-400 rounded-lg p-2 w-full mr-2"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 mr-2">
            View
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 mr-2">
            Edit
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-blue-700">
            Delete
          </button>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center max-w-md">
        <div className="flex items-center w-full mb-4">
          <input
            type="text"
            placeholder="Enter text here"
            className="border border-gray-400 rounded-lg p-2 w-full mr-2"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 mr-2">
            View
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 mr-2">
            Edit
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-blue-700">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default SavedPasswordList;
