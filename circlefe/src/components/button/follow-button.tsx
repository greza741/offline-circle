// import { api } from "@/libs/api";
// import { Icon } from "@iconify/react";
// import { Button, Stack, Typography } from "@mui/material";
// import { set } from "date-fns";
// import { useEffect, useState } from "react";

// const FollowButton = ({ userId }: { userId: number }) => {
//   const [follow, setFollow] = useState(false);
//   const [followCount, setFollowCount] = useState(0);
//   const checkFollow = async () => {
//     const res = await api.get(`/follow/${userId}`);

//     console.log(res.data);
//     setFollow(res.data.isFollow);
//     setFollowCount(res.data.followCount);
//   };

//   const handleLike = async () => {
//     const res = await api.post(`/follow/`, {
//         userId,
//     });

//     console.log(res.data);
//     await checkFollow();
//   };

//   useEffect(() => {
//     checkFollow();
//   }, []);

//   return (
//     <Stack direction={"row"} sx={{ cursor: "pointer" }}>
//       <Button
//         onClick={handleLike}
//         icon={follow ? "line-md:heart-filled" : "line-md:heart"}
//         sx={{ fontSize: "1.5rem", color: "red" }}
//       />
//     </Stack>
//   );
// };

// export default FollowButton;
