import { useState } from "react";
import authService from "../service/AuthService";
import type { LoginRequest } from "../types/auth/LoginRequest";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const [formData, setFormData] = useState<LoginRequest>({
    email: "",
    password: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
 const navigate = useNavigate();
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const response = await authService.login(formData);

      localStorage.setItem("jwtToken", response.data.jwtToken);

      console.log("Login Success");
        navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-96 p-6 border rounded-lg shadow"
      >
        <h2 className="text-2xl font-bold mb-4">
          Login
        </h2>

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 mb-3"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-2 mb-3"
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;