import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { RiUserSearchFill } from "react-icons/ri";

export const Search = () => {
  return (
    <Box>
      <Box
        bgcolor="brand.background" // Sesuaikan tema
        color="white"
        minHeight="100vh"
        borderRight="1px solid grey"
      >
        <Box height="20" display="flex" alignItems="center" padding="0px 20px">
          <TextField
            variant="outlined"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <RiUserSearchFill />
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                borderRadius: "20px",
                backgroundColor: "#3F3F3F",
                color: "white",
              },
            }}
            fullWidth
          />
        </Box>
        {/* <SearchResult result={result} /> */}
      </Box>
    </Box>
  );
};
