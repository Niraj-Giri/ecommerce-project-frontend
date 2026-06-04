import { useState } from "react";
import authService from "../service/AuthService";
import type { RegisterRequest } from "../types/auth/RegisterRequest";
import { useNavigate } from "react-router-dom";
function RegisterPage() {
  const [formData, setFormData] = useState<RegisterRequest>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
  });
 const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const response = await authService.register(formData);

      localStorage.setItem("jwtToken", response.data.jwtToken);

      console.log("Registration Success");
        navigate("/login");
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
          Register
        </h2>

        <input
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full border p-2 mb-3"
        />

        <input
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full border p-2 mb-3"
        />

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

        <input
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full border p-2 mb-3"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;