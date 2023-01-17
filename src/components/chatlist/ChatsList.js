import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SettingsIcon from "@mui/icons-material/Settings";
import ChatItem from "./ChatItem";
import NewMessage from "./NewMessage";
import ChatLisHeader from "./ChatLisHeader";
import { allRooms, deleteRoom } from "../../slicers/createRoomSlicer";
import DeleteButton from "./DeleteButton";
import { useNavigate, useParams } from "react-router-dom";
import { ChatListBox, CustomChatsList } from "./CustomComponents";

const ChatsList = ({ setValue }) => {
  const navigate = useNavigate();
  const [newMessageModal, setNewMessageModal] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const dispatch = useDispatch();
  const allChats = useSelector(allRooms);
  const { id } = useParams();

  const removeFromRoomsLists = (roomId) => {
    if (id === roomId) {
      navigate("/");
    }
    dispatch(deleteRoom(roomId));
  };
  const openNewMessageModal = () => {
    setNewMessageModal(true);
  };
  return (
    <ChatListBox bgcolor={"background.default"}>
      <ChatLisHeader openModal={openNewMessageModal} />
      <CustomChatsList>
        <Box>
          {!onEdit ? (
            <Button onClick={() => setOnEdit(!onEdit)}>Edit</Button>
          ) : (
            <Button onClick={() => setOnEdit(false)}>cancel</Button>
          )}
        </Box>
        {allChats.map((data) => {
          return (
            <Box key={data.id}>
              <ChatItem name={data.name} id={data.id}>
                {onEdit && (
                  <DeleteButton
                    id={data.id}
                    deleteItem={removeFromRoomsLists}
                  />
                )}
              </ChatItem>
            </Box>
          );
        })}
      </CustomChatsList>
      <NewMessage open={newMessageModal} setOpen={setNewMessageModal} />
      <Box sx={{ position: "fixed", bottom: 10 }}>
        <Button onClick={() => setValue(1)}>
          <SettingsIcon />
        </Button>
      </Box>
    </ChatListBox>
  );
};

export default ChatsList;
