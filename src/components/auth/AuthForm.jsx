import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth-context";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsloading] = useState(false);
  const authCtx = useContext(AuthContext);
  const { isLoggedIn, login } = authCtx;
  const enteredEmailRef = useRef(),
    enteredPasswordRef = useRef();
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = enteredEmailRef.current.value;
    const enteredPassword = enteredPasswordRef.current.value;

    // optional: Add validation
    setIsloading(true);

    if (isLogin) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAdYTlm4g85y-TAb5Wh7akAu8xmw6cH858",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          setIsloading(false);
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Authentication failed!";
              if (data && data.error && data.error.message) {
                errorMessage = data.error.message;
              }
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          login(data.idToken);
          navigate("/home", { replace: true });
          console.log(data);
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAdYTlm4g85y-TAb5Wh7akAu8xmw6cH858",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          setIsloading(false);
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Authentication failed!";
              if (data && data.error && data.error.message) {
                errorMessage = data.error.message;
              }
              throw new Error(errorMessage);
            });
          }
        })

        .catch((err) => {
          alert(err.message);
        });
    }
  };

  const toggleHandeler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section className={classes.form}>
      <h2> {isLogin ? "Login" : "Sign Up"} </h2>
      <form onSubmit={submitHandler}>
        <Input
          type="email"
          label="Your Email"
          id="email"
          ref={enteredEmailRef}
        />
        <Input
          type="password"
          label="Your Password"
          id="pass"
          ref={enteredPasswordRef}
        />
        {!isLoading && (
          <Button type="submit">
            {" "}
            {isLogin ? "Sign In" : "Create New Account"}
          </Button>
        )}
        {isLoading && <p>Loading....</p>}
      </form>
      {!isLoggedIn && (
        <Button
          onClick={toggleHandeler}
          type="button"
          className={classes.toggle}
        >
          {isLogin ? "Create New Account" : "Login with exisiting account"}
        </Button>
      )}
    </section>
  );
};
export default AuthForm;
