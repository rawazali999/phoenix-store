import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../app/slices/authenticationSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  function submitHandler(e) {
    e.preventDefault();
    dispatch(login(form.username));
    navigate("/", { replace: true });
  }

  function onChangeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;
    setForm((values) => ({ ...values, [name]: value }));
  }
  return (
    <section id="signup" className="w-full h-full">
      <div className="flex justify-center">
        <div className="flex items-center justify-center mt-12 h-full">
          <div className=" flex flex-col sm:w-full w-4/5 px-6 py-1 pt-0 mb-6 shadow-lg rounded-3xl bg-zinc-50 border-0">
            <div className="text-center font-bold flex">
              <Link to="/" className=" pt-2 text-cyan-700">
                <Tooltip title="Back to home">
                  <ArrowBackIcon />
                </Tooltip>
              </Link>
              <h1 className="text-cyan-800 text-xl  pt-2 mx-2">
                Sign up Phoenix Store
              </h1>
            </div>{" "}
            <hr className="my-2 border-amber-700" />
            <form onSubmit={submitHandler}>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-cyan-600  text-xs font-bold mb-1"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="username"
                  style={{ transition: "all .15s ease" }}
                  name="username"
                  onChange={onChangeHandler}
                  value={form.username || ""}
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-cyan-600  text-xs font-bold mb-1"
                  htmlFor="username"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="border-0 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Email"
                  style={{ transition: "all .15s ease" }}
                  name="email"
                />
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-cyan-600  text-xs font-bold mb-1"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="border-0 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Password"
                  style={{ transition: "all .15s ease" }}
                  name="password"
                  value={form.password || ""}
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <label className="flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    className="form-checkbox border-0 rounded text-cyan-600  ml-1 w-5 h-5"
                    style={{ transition: "all .15s ease" }}
                  />
                  <span className="ml-2 text-sm font-semibold text-cyan-600">
                    Remember me
                  </span>
                </label>
              </div>

              <div className="flex justify-center mt-2  text-xs underline">
                <div className=" my-2">
                  <Link to="/login" className="text-gray-900">
                    Already Have an account? Sign In
                  </Link>
                </div>
              </div>

              <div className="text-center mt-4">
                <button
                  className="bg-cyan-400 text-white active:bg-white active:text-  text-md font-bold uppercase px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                  type="submit"
                  style={{ transition: "all .15s ease" }}
                >
                  sign up
                </button>
              </div>
            </form>
            <div className="px-6 py-4">
              <div className="text-center mb-3">
                <h6 className="text-gray-600 text-sm font-bold">
                  Or Sign up with
                </h6>
              </div>
              <div className="text-center sm:grid grid-cols-1 sm:grid-cols-2">
                <button
                  className="bg-white active:bg-gray-100 text-gray-800 p-2 rounded-lg outline-none focus:outline-none mr-2 mb-1  shadow hover:shadow-lg inline-flex items-center font-bold text-xs"
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  <img
                    alt="..."
                    className="w-5 mr-1"
                    src={require("../images/icons8-facebook.svg").default}
                  />
                  Facebook
                </button>
                <button
                  className="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded-lg outline-none focus:outline-none mr-1 mb-1  shadow hover:shadow-lg inline-flex items-center font-bold text-xs"
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  <img
                    alt="..."
                    className="w-5 mr-1"
                    src={require("../images/google.svg").default}
                  />
                  Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
