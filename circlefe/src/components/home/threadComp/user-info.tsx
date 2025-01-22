import { Stack, Typography } from "@mui/material";
import { formatDistanceToNow } from "date-fns";

interface Props {
  username: string;
  fullname: string;
  createdAt: string;
}

const UserInformation: React.FC<Props> = ({
  username,
  fullname,
  createdAt,
}) => {
  return (
    <Stack direction={"row"} spacing={1}>
      <Typography fontWeight={"1000"}>{fullname}</Typography>
      <Typography fontWeight={"1"}>@{username}</Typography>
      <Typography>•</Typography>
      <Typography>
        {createdAt && formatDistanceToNow(new Date(createdAt))}
      </Typography>
    </Stack>
  );
};

export default UserInformation;
