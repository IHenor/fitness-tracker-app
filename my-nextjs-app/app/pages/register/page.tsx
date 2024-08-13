import RegisterField from "@/app/components/Register/RegisterField";
import React from "react";

const Register = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Join us today and start enjoying our services. Registering is quick
            and easy.
          </p>
        </div>
        <RegisterField />
      </div>
    </div>
  );
};

export default Register;
