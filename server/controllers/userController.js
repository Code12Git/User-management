import axios from "axios";

// Getting User Details
export const getUserDetails = async (req, res) => {
  try {
    const user = await axios.get("https://jsonplaceholder.typicode.com/users");
    res.status(200).json(user.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Creating a new user
export const createUserDetails = async (req, res) => {
  try {
    const newUser = req.body;

    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newUser
    );

    if (response.status === 201) {
      res.status(201).json(response.data);
    } else {
      res.status(400).json({ error: "Failed to create user" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

//Update User Details
export const updateUserDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = req.body;

    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updatedUser
    );

    if (response.status === 200) {
      res.status(200).json(response.data);
    } else {
      res.status(400).json({ error: "Failed to update user" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

//Deleting User Details

export const deleteUserDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (response.status === 200) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(400).json({ error: "Failed to delete user" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
