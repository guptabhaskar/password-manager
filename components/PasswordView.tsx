import { useState } from "react";

function PasswordView() {
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
        className="bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded"
        onClick={handleOpenForm}
      >
        Add Password
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center ${
          isFormOpen ? "" : "hidden"
        }`}
        onClick={handleCloseForm}
      >
        <form
          className="bg-white p-8 rounded-lg shadow-md"
          style={{
            maxWidth: "600px",
            maxHeight: "500px",
            width: "90%",
            height: "52%",
          }}
          onClick={(e) => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}
        >
          <h2 className="text-lg font-semibold mb-4 text-center">
            Add Password
          </h2>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Website</label>
            <input
              className="border border-gray-400 p-2 w-full rounded"
              type="text"
              id="websiteField"
              name="websiteField"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Username</label>
            <input
              className="border border-gray-400 p-2 w-full rounded"
              type="text"
              id="usernameField"
              name="usernameField"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Password</label>
            <input
              className="border border-gray-400 p-2 w-full rounded"
              type="password"
              id="passwordField"
              name="passwordField"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PasswordView;
