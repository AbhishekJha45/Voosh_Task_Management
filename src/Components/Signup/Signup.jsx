import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import checklist from "../../Assets/checklist.png";
const Signup = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "/api/login";
      const res = await axios.post(url, data);
      localStorage.setItem("token", res.data.token);
      //alert(res.data.msg);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.msg);
      }
    }
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={checklist} className={styles.img} alt="" />
          </div>
          <div className={styles.auth_buttons}>
            <a href="#login" className={styles.auth_link}>
              Login
            </a>
            <a href="#signout" className={styles.auth_link}>
              Signup
            </a>
          </div>
        </div>
      </nav>
      <div className={styles.login_container}>
        <div className={styles.login_form_container}>
          <div className={styles.left}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
              <h1>Signup</h1>
              <input
                type="email"
                placeholder="First Name"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Last Name"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Email"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className={styles.input}
              />
              {error && <div className={styles.error_msg}>{error}</div>}
              <button type="submit" className={styles.signin_btn}>
                Signup
              </button>
            </form>
            <div className={styles.signup_link}>
              Don't have an account? <Link to="/">Sign Up</Link>
            </div>
            <br />
            <div>
            <button type="button" class={styles.login_with_google_btn}>
              Signup with Google
            </button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
