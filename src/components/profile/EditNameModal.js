import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Input,
  Slide,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myData, updateName } from "../../slicers/myDataSlicer";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const EditNameModal = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const oldName = useSelector(myData);
  const [newName, setNewName] = useState(oldName.name);
  const changeNameHandler = () => {
    dispatch(updateName(newName));
    setOpen(false);
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
        <DialogTitle>{"Enter New Name:"}</DialogTitle>
        <DialogContent>
          <Input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={changeNameHandler}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditNameModal;
