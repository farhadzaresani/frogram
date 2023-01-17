import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { CustomListItem } from "./CustomComponents";

export default function ChatItem({ name, id, children }) {
  return (
    <>
      <CustomListItem component={Link} to={`/chat/${id}`}>
        <ListItemAvatar>
          <Avatar alt={name} />
        </ListItemAvatar>
        <ListItemText primary={name} />
        {children}
      </CustomListItem>
    </>
  );
}
