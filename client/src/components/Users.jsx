import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { publicRequest } from "../utils/axios";
import User from "./User";

import CreateUser from "./CreateUser";
const Users = () => {
  // State to store user data and loading status
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Fetch user data
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch user data
  const fetchData = async () => {
    try {
      const res = await publicRequest.get("/users");
      setUser(res.data);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching user data:", err);
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        {/* Title and animation using Framer motion */}
        <motion.div
          className="text-3xl md:text-4xl lg:text-5xl text-indigo-600 font-extrabold mb-8 mt-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.0,
            delay: 0.3,
            ease: [0.175, 0.885, 0.32, 1.275],
          }}
        >
          <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-green-500 bg-clip-text text-transparent">
            {" "}
            User Management System
          </span>{" "}
        </motion.div>
        {/* Creating user form */}
        <CreateUser user={user} setUser={setUser} />
        {/* User cards */}
        <div className="container px-5 py-10 mx-auto">
          {isLoading ? (
            // Loading spinner
            <div className="flex justify-center items-center h-48">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-indigo-500"></div>
            </div>
          ) : (
            // Rendering user cards
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
              {user.map((item) => (
                <User user={item} setUsers={setUser} key={item.id} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Users;
