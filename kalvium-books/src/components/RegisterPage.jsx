import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registeredData, setRegisteredData] = useState(null);

  const validateForm = () => {
    if (name.length < 3 || name.length > 30) {
      alert("Name should be between 3 and 30 characters.");
      return false;
    }

    if (!email.includes("@")) {
      alert("Invalid email address.");
      return false;
    }

    if (password.length < 10) {
      alert("Password should be at least 10 characters long.");
      return false;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const data = { name, email, password };
      setRegisteredData(data);

      alert("Registration Successful");
      console.log(`${name}, ${email}, ${password}`);
    } else {
      alert("Please check your inputs.");
    }
  };

  return (
    <div className="flex flex-row justify-center items-top">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-between w-auto w-[30vw] h-[80vh] mt-10 border-2 mb-6 bg-white shadow-lg py-4 rounded-lg"
      >
        <h1 className="text-black-600 font-medium text-2xl">CREATE ACCOUNT</h1>
        <input
          placeholder=" Your name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full lg:w-[20vw] mt-5 border-2 mb-1"
          required
        />
        <input
          placeholder=" Your Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full lg:w-[20vw] mt-5 border-2 mb-1"
          required
        />
        <input
          placeholder=" Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full lg:w-[20vw] mt-5 border-2 mb-1"
          required
        />
        <input
          placeholder=" Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full lg:w-[20vw] mt-5 border-2 mb-1"
          required
        />
        <div className="flex flex-row py-5 mx-8 justify-around items-center">
          <input
            type="checkbox"
            required
            className="mt-1  border-2 mb-1 mx-2 rounded-lg"
          />
          <p className="items-center ">
            I agree to all the statements in
            <a className="underline mx-1 " href="">
              terms and conditions.
            </a>
          </p>
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white font-xl-bold px-10 py-1 hover:bg-red-600 hover:font-bold transition ease-in duration-300"
        >
          Register
        </button>
        <p className="py-2 font-m">
          Have an account already?
          <Link to="/" className="underline font-bold px-1">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
