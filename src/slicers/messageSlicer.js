import { createSlice } from "@reduxjs/toolkit";

const time = new Date().toLocaleTimeString("IR", {
  hour: "2-digit",
  minute: "2-digit",
});

export const messageSlicer = createSlice({
  name: "messages",
  initialState: {
    messageByRoom: [
      {
        roomId: "23",
        message: [
          {
            text: "hi",
            from: "SomeOne",
            textId: "23",
            sentAt: "11:41 PM",
          },
        ],
      },
    ],
  },
  reducers: {
    submitMessage: (state, action) => {
      if (
        state.messageByRoom.some((item) => item.roomId === action.payload.id)
      ) {
        state.messageByRoom
          .find((item) => item.roomId === action.payload.id)
          .message.push({
            text: action.payload.text,
            from: action.payload.from,
            textId: String(Math.random()).slice(2, 10),
            sentAt: time,
          });
      } else {
        state.messageByRoom.push({
          roomId: action.payload.id,
          message: [
            {
              text: action.payload.text,
              from: action.payload.from,
              textId: String(Math.random()).slice(2, 10),
              sentAt: time,
            },
          ],
        });
      }
    },
    deleteMessage: (state, action) => {
      state.messageByRoom.filter((item) => item.id !== action.payload);
    },
  },
});

export const { submitMessage } = messageSlicer.actions;
export const allmessages = (state) => state.messages.messageByRoom;
export default messageSlicer.reducer;
