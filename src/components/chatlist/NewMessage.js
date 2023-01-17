import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Input } from "@mui/material";
import { useDispatch } from "react-redux";
import { createRoom } from "../../slicers/createRoomSlicer";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function NewMessage({ open, setOpen }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [roomName, setRoomName] = useState("");
  const uid = String(Math.random()).slice(2, 10);

  const createRoomHandler = () => {
    if (roomName.length > 0) {
      dispatch(createRoom({ name: roomName, id: uid }));
      navigate(`/chat/${uid}`);
      setRoomName("");
      setOpen(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle>{"Enter Name:"}</DialogTitle>
        <DialogContent>
          <Input
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={createRoomHandler}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
