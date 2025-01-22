import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  CircularProgress,
  Typography,
} from "@mui/material";
import { RiUserSearchFill } from "react-icons/ri";
import { useState, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/stores";
import { debounce } from "lodash";
import { searchUsersAsync } from "@/stores/user/async";

export const Search = () => {
  const dispatch = useAppDispatch();
  const { users, loading } = useAppSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");

  // Debounced search handler to avoid too many API calls
  const debouncedSearch = useCallback(
    debounce((query) => {
      dispatch(searchUsersAsync(query));
    }, 300),
    []
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchTerm(query);
    if (query) debouncedSearch(query);
  };

  return (
    <Box>
      <Box
        bgcolor="brand.background"
        color="white"
        minHeight="100vh"
        borderRight="1px solid grey"
      >
        <Box height="20" display="flex" alignItems="center" padding="0px 20px">
          <TextField
            variant="outlined"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
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

        {/* Show loading spinner if searching */}
        {loading && (
          <Box display="flex" justifyContent="center" mt={2}>
            <CircularProgress color="inherit" size={24} />
          </Box>
        )}

        {/* Display search results */}
        <Box mt={2}>
          {users.map((user) => (
            <Box key={user.id} p={2} borderBottom="1px solid grey">
              <Typography>{user.username}</Typography>
              <Typography>{user.profile.fullname}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
