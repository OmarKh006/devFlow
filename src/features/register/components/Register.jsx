import { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";

const Register = () => {
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-surface p-4">
      <form className="w-full max-w-155 rounded-2xl bg-white p-10 shadow-xl">
        <h1 className="font-jakarta text-main font-extrabold text-[28px]">
          Create your account
        </h1>
        <section className="mt-7.5 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="fname"
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
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-jakarta text-main font-bold text-[14px]"
            >
              Email Address
            </label>
            <input
              className="bg-surface border border-line py-3.75 px-4 rounded-xl"
              type="email"
              placeholder="example@domain.com"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="pass"
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
            />
            <PasswordStrengthBar.default password={password} />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="cpass"
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
            />
          </div>
          <label className="flex gap-2.5">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <span>
              I agree to the{" "}
              <a href="#" className="text-brand font-bold">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-brand font-bold">
                Privacy Policy
              </a>
            </span>
          </label>
        </section>
        <section className="mt-6.5 flex flex-col">
          <button
            type="submit"
            className="bg-brand rounded-xl font-bold text-[15px] text-white text-center py-[14.5px]"
          >
            Create account
          </button>
          <div className="flex items-center gap-4 mt-5">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-sm uppercase tracking-widest text-gray-400">
              Or continue with
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="mt-4 flex flex-row gap-3">
            <button className="w-full text-center py-3.75 rounded-xl border border-line">
              Google
            </button>
            <button className="w-full text-center py-3.75 rounded-xl border border-line">
              Github
            </button>
          </div>
          <p className="mt-8 text-center">
            Already have an account?{" "}
            <a href="#" className="text-brand font-bold">
              Sign In
            </a>
          </p>
        </section>
      </form>
    </main>
  );
};

export default Register;
