"use client";
import { useState, FormEvent, use } from "react";
import axios from "axios";

import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Replace 'http://your-laravel-backend.com/api/login' with your actual login endpoint
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
        {
          email,
          password,
        }
      );

      // Handle response data or token storage here
      console.log(response.data);

      // Redirect to the dashboard or another page upon successful login
      router.push("/dashboard");
    } catch (error) {
      setError("Login failed. Please check your credentials.");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
