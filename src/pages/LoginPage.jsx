import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await fetch("https://augmntx.com/api/login", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        route("/");
        console.log("Login data", data);
      } else {
        // Handle error response from the API
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="login_page">
      <div className="">
        <div className="form_wrapper">
          <h3>Sign in to start your session</h3> <br />

          <form className="login_form" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="btn btn-primary" type="submit">
              Continue
            </button>

            <a href="/#" className="forgot_pass">Forgot password?</a>
          </form>
        </div>

        <div className="create_account">
            <p>Don't have an account? <a href="/#">Sign up</a></p>
            <p>Please <a href="/#">Contact us</a> if you require any assistance</p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
