import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState, useEffect } from "react";
import styles from "../../styles/Auth.module.css";
import Head from "next/head";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <>
      <Head>
        <title>login | running-passion</title>
        <meta name="description" content="Login page running passion, form." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.auth}>
        <h2>
          <FaUser size={42} /> Log In
        </h2>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input type="submit" value="Login" className="btn" />
        </form>
      </div>
    </>
  );
}

export default LoginPage;
