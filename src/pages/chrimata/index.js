import { useAtom } from "jotai";
import { isAuthenticatedAtom, redirectPathAtom } from "../../atoms";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom);
  const [redirectPath, setRedirectPath] = useAtom(redirectPathAtom);
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const membershipPassword = process.env.NEXT_PUBLIC_MEMBERSHIP_PASSWORD;
    const corporatePassword = process.env.NEXT_PUBLIC_CORPORATE_PASSWORD;
    const communityPassword = process.env.NEXT_PUBLIC_COMMUNITY_PASSWORD;

    let path = "/chrimata";
    if (password === membershipPassword) {
      path = "/chrimata/membership";
    } else if (password === corporatePassword) {
      path = "/chrimata/corporate";
    } else if (password === communityPassword) {
      path = "/chrimata/community";
    } else {
      alert("Invalid password");
      return;
    }

    setIsAuthenticated(true);
    setRedirectPath(path);
    router.push(path);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-left p-8">
        <img src="/shpe_logo.png" className="h-24 my-10" />
        <h1 className="text-3xl font-bold">Chrimata</h1>
        <h2 className="text-xl font-bold">The internal tool for VPs to view their budgets and PRFs.</h2>
        <div className="mt-10">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-52 py-2 text-lg"
          />
          <span className="px-2 h-42" onClick={togglePasswordVisibility}>
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>
        <button className="text-lg font-semibold w-52 py-2 text-white bg-[#001F5B]" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
