import React from "react";
import { useNavigate} from "react-router-dom";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const Navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "pal987472@gmail.com" && password === "pal123456") {
      Navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-orange-700 text-center">
          Login
        </h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
            type="email"
            id="email"
            placeholder="you@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
              console.log(e.target.value);
            }}
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
            type="password"
            id="password"
            placeholder="••••••••"
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(e.target.value);
            }}
            required
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-orange-700 hover:bg-orange-800 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-300"
        >
          Log In
        </button>

        <p className="text-sm text-center mt-4 text-gray-600">
          Don’t have an account?
          <a href="#" className="text-orange-700 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
