import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { publicRequest } from "../utils/axios";

const CreateUser = ({ user, setUser }) => {
  // State to hold the user details entered in the form
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Function to handle form submission
  const handleSubmit = async () => {
    try {
      // Making a POST request to create a new user
      const res = await publicRequest.post("/users", userDetails);

      // Updating the user array with the newly created user
      setUser([...user, res.data]);

      // Clearing form fields after successful user creation
      setUserDetails({ name: "", email: "", phone: "" });

      // Display success toast message
      toast.success("User created successfully");
    } catch (err) {
      // Display error toast message
      toast.error(err.message);
    }
  };

  return (
    <>
      {/* Toaster component for displaying toast messages */}
      <Toaster position="top-center" />

      <div className="container mx-auto py-12">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-8 rounded-lg shadow-xl">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Create User
          </h2>
          {/* Input fields for user details */}
          <input
            type="text"
            placeholder="Name"
            value={userDetails.name}
            onChange={(e) =>
              setUserDetails({ ...userDetails, name: e.target.value })
            }
            className="bg-white border font-roboto border-gray-300 rounded-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-700 mb-3"
          />
          {/* Other input fields for email and phone */}

          <input
            placeholder="Email"
            type="text"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            className="bg-white border border-gray-300 rounded-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-700 mb-6 resize-none"
            rows="4"
          />

          <input
            placeholder="Phone No."
            type="text"
            value={userDetails.phone}
            onChange={(e) =>
              setUserDetails({ ...userDetails, phone: e.target.value })
            }
            className="bg-white border border-gray-300 rounded-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-700 mb-6 resize-none"
            rows="4"
          />
          {/* Button to trigger form submission */}
          <button
            onClick={handleSubmit}
            className="bg-indigo-700 text-white py-3 px-6 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transform hover:scale-105 transition-transform"
          >
            Create User
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
