import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function DeleteButton({ id, deleteItem }) {
  return (
    <Tooltip title='Delete'>
      <IconButton onClick={() => deleteItem(id)}>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}
