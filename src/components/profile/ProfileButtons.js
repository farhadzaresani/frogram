import React, { useRef, useState } from "react";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EditNameModal from "./EditNameModal";
import { MyProfileButton, MyProfileContainer } from "./CustomComponents";

const ProfileButtons = ({ updateImage }) => {
  const ref = useRef();
  const [openEditnameModal, setOpenEditNameModal] = useState(false);

  return (
    <>
      <MyProfileContainer>
        <MyProfileButton
          onClick={() => ref.current.click()}
          sx={{ marginBottom: 2 }}
          variant='contained'
        >
          <AddAPhotoOutlinedIcon /> Change Profile Picture{" "}
          <KeyboardArrowRightIcon />
          <input
            onChange={updateImage}
            className='hidden'
            ref={ref}
            type='file'
            name='img'
            accept='.png, .jpg, .jpeg'
          />
        </MyProfileButton>

        <MyProfileButton
          variant='contained'
          onClick={() => setOpenEditNameModal(true)}
        >
          <EditIcon /> Change Name <KeyboardArrowRightIcon />
        </MyProfileButton>
      </MyProfileContainer>
      <EditNameModal setOpen={setOpenEditNameModal} open={openEditnameModal} />
    </>
  );
};

export default ProfileButtons;
