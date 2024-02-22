import { Grid, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProfileDetails from "../../../components/profileDetail/ProfileDetails";

interface props {
  searchTerm: string;
  inputRef: any;
  toggleModal: any;
}
const SearchDetails: FC<props> = ({ searchTerm, inputRef, toggleModal }) => {
  const [searchUsers, setSearchUsers] = useState([]);
  const users = useSelector((state: any) => {
    return state.user.allUsers;
  });
  useEffect(() => {
    const searchedUsers = users.filter((val: any) => {
      return searchTerm !== "" && val.username.includes(searchTerm);
    });
    setSearchUsers(searchedUsers);
  }, [searchTerm]);

  return (
    <Grid
      position="absolute"
      top={40}
      borderRadius={1.3}
      bgcolor={"white"}
      sx={{
        clipPath:
          " polygon(46% 10%, 54% 1%, 61% 10%, 100% 10%, 100% 100%, 0 100%, 0% 70%, 0 10%)",
      }}
      height={300}
      width={300}
      contentEditable="inherit"
      suppressContentEditableWarning={true}
      onBlur={() => {
        inputRef.current.value = "";
        toggleModal(false);
      }}
    >
      <Grid item margin={2} marginTop={5}>
        <Typography align="left">Recent</Typography>
        <Grid item width={"100%"} borderTop={"1px solid grey"}>
          {searchUsers.map((val: any) => {
            return (
              <ProfileDetails
                type="none"
                username={val.username}
                key={val._id}
                id={val._id}
              />
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchDetails;
