import { createSlice } from "@reduxjs/toolkit";

export const createRoomSLicer = createSlice({
  name: "rooms",
  initialState: { roomsId: [{ name: "Farhad", id: "23" }] },
  reducers: {
    createRoom: (state, action) => {
      state.roomsId.push({
        name: action.payload.name,
        id: action.payload.id,
      });
    },
    deleteRoom: (state, action) => {
      state.roomsId = state.roomsId.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { createRoom, deleteRoom } = createRoomSLicer.actions;
export const allRooms = (state) => state.rooms.roomsId;
export default createRoomSLicer.reducer;
