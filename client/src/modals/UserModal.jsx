import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { publicRequest } from "../utils/axios";
import toast from "react-hot-toast";

const ModalContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 400px;
  background-color: white;
  border: 2px solid #000;
  box-shadow: 24px;
  border-radius: 10px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  margin-top: 8px;
`;

const StyledButton = styled(Button)`
  background-color: #1976d2;
  color: white;
  &:hover {
    background-color: #1565c0;
  }
`;

export default function UserModal({ user, setUsers }) {
  const [open, setOpen] = React.useState(false);
  const [updateUser, setupdateUser] = React.useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setupdateUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleUpdate = async (id) => {
    try {
      const response = await publicRequest.put(`/users/${id}`, updateUser);
      if (response.status === 200) {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === id ? { ...user, ...updateUser } : user
          )
        );
        setOpen(false);
        toast.success("User updated successfully");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    //Modal For Updating the User Details
    <div>
      <StyledButton onClick={handleOpen}>Update</StyledButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer p={4}>
          <Typography variant="h6" component="h2">
            Name:
          </Typography>
          <Input
            type="text"
            value={updateUser.name}
            name="name"
            onChange={handleChange}
          />
          <Typography sx={{ mt: 2 }}>Email:</Typography>
          <Input
            type="text"
            value={updateUser.email}
            name="email"
            onChange={handleChange}
          />
          <Typography sx={{ mt: 2 }}>Phone:</Typography>
          <Input
            type="text"
            value={updateUser.phone}
            name="phone"
            onChange={handleChange}
          />
          <StyledButton
            onClick={() => handleUpdate(user.id)}
            variant="contained"
            sx={{ mt: 2 }}
          >
            Update
          </StyledButton>
        </ModalContainer>
      </Modal>
    </div>
  );
}
