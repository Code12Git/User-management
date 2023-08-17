import React from "react";
import UserModal from "../modals/UserModal";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../utils/axios";
import toast from "react-hot-toast";

const User = ({ user, setUsers }) => {
  // Initializing navigation using useNavigate hook
  const navigate = useNavigate();

  // Function to navigate to user details
  const ViewChangeHandler = () => {
    navigate("userdetails", { state: { user } });
  };

  // Function to handle user deletion
  const handleDelete = async (id) => {
    try {
      // Sending delete request to the Backend API
      const response = await publicRequest.delete(`/users/${id}`);

      // Check the response status and deleting
      if (response.status === 200) {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
        toast.success("User deleted successfully");
      } else {
        toast.error("Failed to delete user");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <div className="my-3 relative">
        {/* Display user name */}
        <span
          className="absolute top-0 right-0 transform -translate-x-1/2 -translate-y-1/2 px-2 py-1 text-xs font-medium text-white bg-red-600 rounded-full"
          style={{ zIndex: "10" }}
        >
          Name: {user?.name}
        </span>
        {/* User card */}
        <div className="bg-white  shadow-xl rounded-lg overflow-hidden transition duration-300 transform hover:scale-105">
          <div className="p-4">
            {/* Display user email */}
            <h5 className="text-xl font-semibold text-gray-900 mb-2">
              Email: {user.email}
            </h5>
            {/* Display user phone number */}
            <p className="text-sm text-gray-600 mb-3">Phone No: {user.phone}</p>
            {/* Buttons for view profile, edit, and delete */}
            <div className="flex justify-between gap-2">
              <div className="flex ">
                {/* Button to view user profile */}
                <button
                  onClick={ViewChangeHandler}
                  className="bg-purple-500 text-white px-4 py-1 rounded-md hover:bg-purple-600 focus:outline-none focus:ring focus:ring-red-300"
                >
                  View Profile
                </button>
              </div>
              <div className="flex justify-between gap-2">
                {/* Button to open user modal */}
                <button>
                  <UserModal user={user} setUsers={setUsers} />
                </button>
                {/* Button to delete user */}
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
