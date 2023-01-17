import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  myData,
  updateName,
  updateProilePicture,
} from "../../slicers/myDataSlicer";
import MyInfo from "./MyInfo";
import ProfileButtons from "./ProfileButtons";
import { MyProfileHeader } from "./CustomComponents";

const imageMimeType = /image\/(png|jpg|jpeg)/i;

const Profile = ({ setValue }) => {
  const dispatch = useDispatch();
  const me = useSelector(myData);
  const [file, setFile] = useState(null);

  const changeName = (e) => {
    dispatch(updateName(e));
  };

  const changeProfilePicture = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  };
  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          dispatch(updateProilePicture(result));
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file, dispatch]);

  return (
    <Box
      bgcolor={"background.default"}
      sx={{ overflow: "hidden", maxHeight: "100vh", minHeight: "100vh" }}
    >
      <MyProfileHeader>
        <Button
          onClick={() => {
            setValue(0);
          }}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <ArrowBackIosIcon />
        </Button>
        <Typography sx={{ fontWeight: "bold", margin: 2, color: "white" }}>
          Profile
        </Typography>
      </MyProfileHeader>
      <MyInfo data={me} />
      <ProfileButtons
        updateImage={changeProfilePicture}
        updateName={changeName}
      />
    </Box>
  );
};

export default Profile;
