import { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";

const Register = () => {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form className="w-155">
      <h1 className="font-jakarta text-main font-extrabold text-[28px]">
        Create your account
      </h1>
      <section className="mt-12.25 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label
            for="fname"
            className="font-jakarta text-main font-bold text-[14px]"
          >
            Full Name
          </label>
          <input
            className="bg-surface border border-line py-3.75 px-4 rounded-xl"
            type="text"
            placeholder="John Doe"
            name="fname"
            id="fname"
            required
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <label
            for="email"
            className="font-jakarta text-main font-bold text-[14px]"
          >
            Email Address
          </label>
          <input
            className="bg-surface border border-line py-3.75 px-4 rounded-xl"
            type="text"
            placeholder="example@domain.com"
            name="email"
            id="email"
            required
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <label
            for="pass"
            className="font-jakarta text-main font-bold text-[14px]"
          >
            Password
          </label>
          <input
            value={password}
            onChange={handlePasswordChange}
            className="bg-surface border border-line py-3.75 px-4 rounded-xl"
            type="password"
            placeholder="Enter password"
            name="pass"
            id="pass"
            required
          ></input>
          <PasswordStrengthBar.default password={password} />
        </div>
        <div className="flex flex-col gap-2">
          <label
            for="cpass"
            className="font-jakarta text-main font-bold text-[14px]"
          >
            Confirm Password
          </label>
          <input
            className="bg-surface border border-line py-3.75 px-4 rounded-xl"
            type="password"
            placeholder="Confirm password"
            name="cpass"
            id="cpass"
            required
          ></input>
        </div>
      </section>
    </form>
  );
};

export default Register;
