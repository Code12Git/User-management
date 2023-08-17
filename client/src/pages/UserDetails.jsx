import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useRef } from "react";
import { motion } from "framer-motion";

const UserDetails = () => {
  const location = useLocation();
  const constraintsRef = useRef(null);

  const user = location.state.user;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    // Complete User Details
    <div className="flex flex-col items-center justify-center min-h-screen">
      <NavLink to="/">
        <button className="bg-purple-500 px-4 py-2  rounded-lg text-white mb-2  hover:bg-purple-600">
          Home
        </button>
      </NavLink>
      <motion.div
        ref={constraintsRef}
        className="flex justify-center items-center "
      >
        {isLoading ? (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-52 w-52 border-t-2 border-indigo-500"></div>
          </div>
        ) : (
          <motion.div
            drag
            dragConstraints={constraintsRef}
            className="max-w-md w-full animate-p bg-gradient-to-r from-cyan-500 via-amber-400 to-red-400 p-6 shadow-lg rounded-lg"
          >
            <div className="mt-4">
              <h1 className="text-3xl font-semibold text-gray-900 mb-2">
                {user.name}
              </h1>
              <p className="text-xl text-red-600 mb-2">Email: {user.email}</p>
              <p className="text-xl text-blue-600 mb-2">Phone: {user.phone}</p>
              <p className="text-xl text-purple-600 mb-2">
                Username: {user.username}
              </p>
              <p className="text-xl text-pink-600 mb-2">
                Website: {user.website}
              </p>
              <div className="border-t border-gray-300 pt-4">
                <p className="text-xl text-rose-600 mb-2">
                  Address: {user.address.street}, {user.address.suite},{" "}
                  {user.address.city}, {user.address.zipcode}
                </p>
                <p className="text-xl text-emerald-800 mb-2">
                  Geo: Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
                </p>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <p className="text-xl text-slate-800 mb-2">
                  Company: {user.company.name}
                </p>
                <p className="text-xl text-green-800 mb-2">
                  Catch Phrase: {user.company.catchPhrase}
                </p>
                <p className="text-xl text-cyan-800 mb-2">
                  Business: {user.company.bs}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default UserDetails;
