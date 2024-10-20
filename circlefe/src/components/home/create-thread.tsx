import { useAppDispatch, useAppSelector } from "@/stores";
import { createThread, getFeed } from "@/stores/thread/async";
import {
  CreateThreadDTO,
  createThreadSchema,
} from "@/validations/threadSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar, Box, Button, Input, InputAdornment } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { LuImagePlus } from "react-icons/lu";

const CreateThread = () => {
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state) => state.auth);
  const { loading } = useAppSelector((state) => state.thread);
  const { control, handleSubmit, reset, watch } = useForm<CreateThreadDTO>({
    resolver: zodResolver(createThreadSchema),
    defaultValues: {
      content: "",
      userId: authState.user!.id,
    },
  });

  const onSubmit: SubmitHandler<CreateThreadDTO> = async (data) => {
    await dispatch(createThread(data));
    await dispatch(getFeed(10));
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, (err) => console.log(err))}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            bgcolor: "",
            margin: "20px",
            paddingBottom: "50px",
          }}
        >
          <Avatar
            src={authState.user?.profile?.avatar}
            alt="Profile Picture"
            sx={{
              width: "60px",
              height: "60px",
              objectFit: "cover",
            }}
          />
          <Controller
            control={control}
            name="content"
            render={({ field }) => (
              <>
                <Input
                  id="input-with-icon-adornment"
                  placeholder="What do you feels ?"
                  sx={{ width: "100%" }}
                  {...field}
                  startAdornment={
                    <InputAdornment position="start"></InputAdornment>
                  }
                />
              </>
            )}
          />
          <Controller
            control={control}
            name="images"
            render={({ field }) => (
              <>
                <label
                  style={{ fontSize: "1.5rem", paddingRight: "10px" }}
                  htmlFor="file-upload"
                >
                  <LuImagePlus color="green" />
                </label>
                <input
                  id="file-upload"
                  type="file"
                  hidden
                  multiple
                  onChange={(e) => {
                    console.log(e.target.files);
                    field.onChange(e.target.files);
                  }}
                />
              </>
            )}
          />
          <Button
            type="submit"
            disabled={loading}
            sx={{
              textDecoration: "none",
              color: "black",
              border: "1px solid",
              bgcolor: "green",
              borderRadius: "15px",
            }}
          >
            POST
          </Button>
        </Box>
        {watch("images") &&
          Array.from(watch("images")).map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image as Blob)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          ))}
      </form>
    </>
  );
};

export default CreateThread;
