import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAuth, setUser } from "../redux/action";
export const SignIn = () => {
  const user = useSelector((store) => store.user);
  // console.log(user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [adminLogin, setAdminLogin] = useState({
    email: "",
    password: "",
  });

  const takeLogin = (event) => {
    const { id, value } = event.target;
    setAdminLogin({ ...adminLogin, [id]: value });
  };

  const loginAdmin = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://max-fashion-clone-server.vercel.app/max-fashion/login",
        adminLogin
      )
      .then((res) => {
        console.log(res);
        if (res.data.error == false) {
          let username = res.data.user.user_name;
          localStorage.setItem("teacherName", JSON.stringify(username));
          alert("Login Successful");
          dispatch(setUser(true));
          navigate("/products");
          dispatch(setAuth(true));
        }
      })
      .catch(() => {
        alert("wrong username or password");
      });
  };

  return (
    <div>
      <h1 style={{ marginLeft: "-73.5%" }}>Log in</h1>
      <div style={{ width: "50%", marginLeft: "10%" }}>
        <form
          onSubmit={loginAdmin}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <label
            style={{
              marginLeft: "-91%",
              marginBottom: "-15px",
              fontSize: "25px",
            }}
          >
            Email
          </label>
          <input
            id="email"
            onChange={takeLogin}
            type="text"
            placeholder="enter email"
            style={{
              height: "35px",
              border: "1px solid black",
              marginTop: "0px",
            }}
          />
          <label
            style={{
              marginLeft: "-84.5%",
              marginBottom: "-15px",
              fontSize: "25px",
            }}
          >
            Password
          </label>
          <input
            id="password"
            onChange={takeLogin}
            type="password"
            placeholder="enter password"
            style={{ height: "35px", border: "1px solid black" }}
          />
          <div style={{ marginLeft: "-84%" }}>
            <span>
              <input
                style={{ marginLeft: "-7%", cursor: "pointer" }}
                type="checkbox"
              ></input>
              <br />
            </span>
            Remember me
          </div>
          <input
            style={{
              border: "1px solid green",
              width: "60px",
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
            value="Login"
          />
        </form>
      </div>
      <div
        style={{
          color: "blue",
          marginLeft: "-75.8%",
          marginTop: "20px",
          cursor: "pointer",
        }}
        className="button registerr"
        onClick={() => navigate("/signup")}
      >
        Sign up
      </div>
    </div>
  );
};
