import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { signIn } from "../../api/auth";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

 const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get("jwt_token")) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn(email, password);

      const token =
        result.jwt_token ||
        result.token ||
        result.jwtToken ||
        result.data?.token;

      if (!token) {
        throw new Error("No token received from server");
      }

      Cookies.set("jwt_token", token, { expires: 7 });
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-brand">
        <h1 className="login-logo">NXTFLIX</h1>
        <p className="login-tagline">
          Unlimited movies, shows and more. Watch anywhere. Cancel anytime.
        </p>
      </div>

      <div className="login-form-panel">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Sign In</h2>

          {error && <p className="login-error">{error}</p>}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;