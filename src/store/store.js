import { configureStore } from "@reduxjs/toolkit";
import createRoomSLicer from "../slicers/createRoomSlicer";
import messageSlicer from "../slicers/messageSlicer";
import myDataSlicer from "../slicers/myDataSlicer";

export const store = configureStore({
  reducer: {
    rooms: createRoomSLicer,
    messages: messageSlicer,
    me: myDataSlicer,
  },
});
