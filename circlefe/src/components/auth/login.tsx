import { useAppDispatch, useAppSelector } from "@/stores";
import { loginAsync, registerAsync } from "@/stores/auth/async";
import { loginSchema, LoginSchema } from "@/validations/loginSchema";
import { RegisterSchema, registerSchema } from "@/validations/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.auth);
  const { control, handleSubmit, reset } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    await dispatch(loginAsync(data));

    reset({
      username: "",
      password: "",
    });
  };
  const onError: SubmitErrorHandler<RegisterSchema> = () => {
    toast.error("Data not found");
  };

  return (
    <Box sx={{ p: 3, width: { xs: "100%", sm: "30rem" } }}>
      <Typography fontSize={`300%`} color="#04A51E">
        Circle
      </Typography>
      <Typography fontSize={`200%`}>Login Account Circle</Typography>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        style={{ width: "100%" }}
      >
        <Box display="flex" flexDirection="column" gap="10px">
          <Controller
            control={control}
            name="username"
            render={({ field, fieldState }) => (
              <TextField
                label="Username / Email"
                {...field}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field, fieldState }) => (
              <TextField
                label="Password"
                type="password"
                {...field}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              borderRadius: "5px",
              color: "white",
              backgroundColor: "#04A51E",
            }}
          >
            {loading ? "loading ... " : "Login"}
          </Button>
          <Typography>
            Does not have an account?
            <Link
              href={"/register"}
              sx={{
                color: "#04A51E",
                textDecoration: "none",
                paddingLeft: "5px",
              }}
            >
              Create
            </Link>
          </Typography>
        </Box>
      </form>
    </Box>
  );
};

export default LoginForm;
