// import React from "react";
// import { Link } from "react-router-dom";

// const LoginPage = () => {
//   return (
//     <div className="flex flex-col gap-8 items-center justify-center h-[calc(100vh-130px)]">
//       <div>Login page</div>
//       <div className=" mt-6">
//         <Link
//           className="bg-[#df66df] rounded-[15px] p-5 h-[30px] text-white"
//           to={"/forgot-password"}
//         >
//           Forgot password
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isSuccess = login(username, password);
    if (isSuccess) {
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="h-[calc(100vh-130px)] flex items-center flex-col-reverse justify-center" style={{ maxWidth: "400px", margin: "auto", padding: "1rem" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </label>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="bg-black text-white border-r-emerald-500 border-amber-500" type="submit" style={{ padding: "0.5rem 1rem" }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

