import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [register, setRegister] = useState({
    user_name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const takeRegister = (event) => {
    const { id, value } = event.target;
    setRegister({ ...register, [id]: value });
  };

  const registerTeacher = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://max-fashion-clone-server.vercel.app/max-fashion/signup",
        register
      )
      .then((res) => {
        if (res.data.error == false) {
          alert("Registration Successful");
          navigate("/signin");
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div>
      <h1 style={{ marginLeft: "-72%" }}>Sign Up</h1>
      <div style={{ width: "50%", marginLeft: "10%" }}>
        <form
          onSubmit={registerTeacher}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <label
            style={{
              marginLeft: "-91%",
              marginBottom: "-15px",
              fontSize: "25px",
            }}
          >
            User Name
          </label>
          <input
            id="user_name"
            onChange={takeRegister}
            type="text"
            placeholder="enter user_name"
            style={{
              height: "35px",
              border: "1px solid black",
              marginTop: "0px",
            }}
          />
          <label
            style={{
              marginLeft: "-91.5%",
              marginBottom: "-15px",
              fontSize: "25px",
            }}
            htmlFor=""
          >
            Email
          </label>
          <input
            style={{
              height: "35px",
              border: "1px solid black",
              marginTop: "0px",
            }}
            id="email"
            onChange={takeRegister}
            type="email"
            placeholder="enter email"
          />
          <label
            style={{
              marginLeft: "-85%",
              marginBottom: "-15px",
              fontSize: "25px",
            }}
            htmlFor=""
          >
            Password
          </label>
          <input
            style={{
              height: "35px",
              border: "1px solid black",
              marginTop: "0px",
            }}
            id="password"
            onChange={takeRegister}
            type="password"
            placeholder="enter password"
          />
          <input
            style={{
              border: "1px solid green",
              width: "100px",
              backgroundColor: "green",
              color: "white",
              textAlign: "center",
              borderRadius: "3px",
              paddingTop: "4px",
              cursor: "pointer",
              height: "40px",
              fontSize: "18px",
            }}
            type="submit"
            value="Sign up"
          />
        </form>
      </div>
      <div
        style={{
          color: "blue",
          marginLeft: "-76.8%",
          marginTop: "20px",
          cursor: "pointer",
        }}
        className="button log"
        onClick={() => navigate("/signin")}
      >
        Login
      </div>
    </div>
  );
};
