import { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error as user types
    // if (errors[name]) {
    //   setErrors((prev) => ({ ...prev, [name]: "" }));
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const validationErrors = validate();
    // if (Object.keys(validationErrors).length > 0) {
    //   setErrors(validationErrors);
    //   return;
    // }
    console.log("Valid data submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <button type="submit">Create Account</button>
    </form>
  );
}
