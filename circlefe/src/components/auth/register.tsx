import { useAppDispatch, useAppSelector } from "@/stores";
import { registerAsync } from "@/stores/auth/async";
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

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading } = useAppSelector((state) => state.auth);
  const { control, handleSubmit, reset } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "all",
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<RegisterSchema> = async (data) => {
    const res = await dispatch(registerAsync(data));

    if (registerAsync.fulfilled.match(res)) {
      reset({
        fullname: "",
        email: "",
        password: "",
      });
      navigate("/login");
    }
  };

  const onError: SubmitErrorHandler<RegisterSchema> = () => {
    toast.error("Register Failed");
  };

  return (
    <Box sx={{ p: 3, width: { xs: "100%", sm: "30rem" } }}>
      <Typography fontSize={`300%`} color="#04A51E">
        Circle
      </Typography>
      <Typography fontSize={`200%`}>Register Account Circle</Typography>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        style={{ width: "100%" }}
      >
        <Box display="flex" flexDirection="column" gap="10px">
          <Controller
            control={control}
            name="fullname"
            render={({ field, fieldState }) => (
              <TextField
                label="Fullname"
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
            name="email"
            render={({ field, fieldState }) => (
              <TextField
                label="Email"
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
            {loading ? "loading ... " : "Create"}
          </Button>
          <Typography>
            Already Have a Account ?
            <Link
              href={"/login"}
              sx={{
                color: "#04A51E",
                textDecoration: "none",
                paddingLeft: "5px",
              }}
            >
              Login
            </Link>
          </Typography>
        </Box>
      </form>
    </Box>
  );
};

export default RegisterForm;
