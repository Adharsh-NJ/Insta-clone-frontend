import { Button, Link, TextField } from "@mui/material";
import classes from "../auth-page.module.css";
import { useForm } from "react-hook-form";
import { userCredentials } from "../../../interfaces/userCredentials";
import { useDispatch } from "react-redux";
import { getLoginFetch } from "../../../core/features/login/loginSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState } = useForm<userCredentials>({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const Navigate = useNavigate();
  const submitForm = (data: userCredentials) => {
    dispatch(getLoginFetch(data));
    if (sessionStorage.getItem("user")) {
      Navigate("/home");
    }
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit(submitForm)}>
      <TextField
        fullWidth
        variant="filled"
        {...register("username", { required: "username is required" })}
        size="small"
        label="Phone number,username or email address"
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
        type="password"
        label="password"
        InputProps={{ disableUnderline: true, className: classes.input }}
        error={Boolean(formState.errors.password)}
        helperText={formState.errors?.password?.message}
      />
      <Button
        fullWidth
        variant="contained"
        className={classes.submitBtn}
        type="submit"
      >
        Log In
      </Button>
      <Link underline="none" variant="body2" component="button">
        Forgotten your password?
      </Link>
    </form>
  );
};

export default Login;
