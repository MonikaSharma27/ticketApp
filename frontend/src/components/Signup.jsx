import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import SignupRight from "./signupRight";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:3000/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          alert("signup successfully");
        }
      })
      .catch((err) => {
        alert("Error:" + err, "Please enter correct information");
      });
  };

  return (
    <div className="bg-[#2b3441] sm:bg-[#47566a] h-screen sm:p-16 p-4 sm:px-28">
      <div className="flex sm:bg-white h-full items-center justify-center rounded-md">
        <div className="text-[#2b3441] sm:w-[50%] sm:p-10 xl:px-20 p-4">
          <div className="bg-white w-full p-6 rounded-md">
            <h1 className="text-3xl font-bold mb-6 mt-6 text-center lg:mt-10 lg:text-5xl">
              Sign up
            </h1>
            <form
              action=""
              className="flex flex-col"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("fullname", { required: true })}
                  className="outline-none border-2 border-gray-300 w-full rounded-md py-1 px-2 mb-4 bg-gray-200"
                />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required{" "}
                  </span>
                )}
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="outline-none border-2 border-gray-300 w-full rounded-md py-1 px-2 mb-4 bg-gray-200"
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required{" "}
                  </span>
                )}
              </div>

              <div className="mb-8">
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                  className="outline-none border-2 border-gray-300 w-full rounded-md py-1 px-2 bg-gray-200"
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required{" "}
                  </span>
                )}
              </div>

              <button className="bg-[#2b3441] text-white p-1 text-2xl font-bold rounded-md hover:bg-white hover:text-[#2b3441] hover:border-2 hover:border-[#2b3441]">
                Signup
              </button>
              <p className="text-end mt-2 sm:hidden text-sm">
                Already have an account?{" "}
                <Link to="/" className="text-lg font-bold">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>

        <div className="w-[50%] bg-[#2b3441] h-full rounded-bl-[25%] rounded-tl-[25%] hidden sm:block rounded-tr-md rounded-br-md">
          <SignupRight />
        </div>
      </div>
    </div>
  );
};

export default Signup;
