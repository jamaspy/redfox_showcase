import React from "react";
import Logo from "../../../assets/logo.png";
const Login = () => {
  return (
    <div className="bg-red-600 w-full flex flex-row">
      <div className="flex w-1/2 bg-fox-blue justify-center items-center h-screen">
        <img src={Logo} width="600px" alt="redfox" />
      </div>
      <div className="flex flex-1 bg-white">
        <form>
          <label>
            Username
            <input type="text" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default Login;
