// import { api } from "@/libs/api";
// import { Icon } from "@iconify/react";
// import { Button, Stack, Typography } from "@mui/material";
// import { set } from "date-fns";
// import { useEffect, useState } from "react";

// const FollowButton = ({ followingId }: { followingId: number }) => {
//   const [follow, setFollow] = useState(false);
//   const [ButtonText, setButtonText] = useState<string>("Follow");
//   const checkFollow = async () => {
//     const res = await api.get(`/follow/${followingId}`);

//     console.log(res.data);
//     setFollow(res.data.isFollowing);
//     setButtonText(res.data.isFollowing ? "Following" : "Follow");
//   };

//   const handleFollow = async () => {
//     const res = await api.post(`/follow/`, {
//       followingId,
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
//         onClick={handleFollow}
//         icon={follow ? "Follow" : "Following"}
//         sx={{ fontSize: "1.5rem", color: "red" }}
//       />
//     </Stack>
//   );
// };

// export default FollowButton;
