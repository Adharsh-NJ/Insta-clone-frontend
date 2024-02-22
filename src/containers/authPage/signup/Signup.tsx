import { Button, TextField } from "@mui/material";
import classes from "../auth-page.module.css";
import { useForm } from "react-hook-form";
import registerCredentials from "../../../interfaces/registerCredentials";
import { useDispatch } from "react-redux";
import { getRegisterFetch } from "../../../core/features/login/loginSlice";
import { FC } from "react";

interface props {
  formChange: React.Dispatch<React.SetStateAction<boolean>>;
}
const Signup: FC<props> = ({ formChange }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState } = useForm<registerCredentials>({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const registerUser = (data: registerCredentials) => {
    dispatch(getRegisterFetch(data));
    formChange(false);
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit(registerUser)}>
      <TextField
        fullWidth
        size="small"
        {...register("email", {
          required: "email is required",
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "Enter valid email",
          },
        })}
        variant="filled"
        label="Mobile number or email address"
        InputProps={{ disableUnderline: true, className: classes.input }}
        error={Boolean(formState.errors.email)}
        helperText={formState.errors?.email?.message}
      />
      <TextField
        fullWidth
        size="small"
        {...register("name", { required: "name is required" })}
        variant="filled"
        label="Full Name"
        InputProps={{ disableUnderline: true, className: classes.input }}
        error={Boolean(formState.errors.name)}
        helperText={formState.errors?.name?.message}
      />
      <TextField
        fullWidth
        size="small"
        variant="filled"
        {...register("username", { required: "username is required" })}
        label="Username"
        InputProps={{ disableUnderline: true, className: classes.input }}
        error={Boolean(formState.errors.username)}
        helperText={formState.errors?.username?.message}
      />
      <TextField
        fullWidth
        size="small"
        variant="filled"
        {...register("password", {
          required: "password is required",
          minLength: {
            value: 8,
            message: "enter valid password",
          },
        })}
        label="Password"
        type="password"
        InputProps={{ disableUnderline: true, className: classes.input }}
        error={Boolean(formState.errors.password)}
        helperText={formState.errors?.password?.message}
      />
      <Button variant="contained" fullWidth type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default Signup;
