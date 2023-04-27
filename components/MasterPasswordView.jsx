import { useState } from "react";

function MasterPasswordView() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
        onClick={handleOpenForm}
      >
        Open Form
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center ${
          isFormOpen ? "" : "hidden"
        }`}
      >
        <form
          className="bg-white p-8 rounded-lg shadow-md"
          style={{
            maxWidth: "600px",
            maxHeight: "500px",
            width: "90%",
            height: "30%",
          }}
        >
          <h2 className="text-lg font-semibold mb-4 text-center">
            Enter Master Password to View
          </h2>
          <div className="mb-4">
            <label className="block font-semibold mb-2" htmlFor="email">
              Master Password
            </label>
            <input
              className="border border-gray-400 p-2 w-full rounded"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
            >
              View
            </button>
          </div>
        </form>
        <button
          className="absolute top-0 right-0 m-4 text-xl"
          onClick={handleCloseForm}
        >
          &times;
        </button>
      </div>
    </>
  );
}

export default MasterPasswordView;
