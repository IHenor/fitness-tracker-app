"use client";

import React from "react";
import Link from "next/link";
const ForgotPassword = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Forgot your password?</h1>
          <p className="py-6">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <label className="label">
              <Link href="/pages/login" className="label-text-alt link link-hover">
                Back to Login
              </Link>
            </label>
            <div className="form-control ">
              <button className="btn btn-primary">Send Reset Link</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
