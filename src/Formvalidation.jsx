import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import "./App.css"

const Form3 = () => {

  const userValidationSchema = yup.object({
    username: yup.string().min(3).max(15).required("Username is required"),

    email: yup
      .string()
      .email("email is required")
      .required("Email is required"),

    password: yup.string().min(6).required("Password is required"),
  });

  let formData = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },

    validationSchema: userValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      alert("Done")
    },

    validateOnChange: true,
    validateOnBlur: true,
  });

  return (
    <form onSubmit={formData.handleSubmit} className=" w-full p-5 h-min m-auto pb-20">
      <h1 className="text-3xl text-center mb-4">Form</h1>

      <input
        type="text"
        name="username"
        value={formData.values.username}
        placeholder="Enter Username"
        onChange={formData.handleChange}
        onBlur={formData.handleBlur}
        className={
          formData.touched.username && formData.errors.username
            ? "input-error w-full outline-none p-3 border-2 rounded-lg"
            : "w-full outline-none p-3 border-2 rounded-lg " +
              (formData.touched.username ? "input-valid" : "input-default")
        }
      />
      {formData.touched.username && formData.errors.username && (
        <p className="text-red-600">{formData.errors.username}</p>
      )}
      <br />

      <input
        type="email"
        name="email"
        value={formData.values.email}
        placeholder="Enter Email"
        onChange={formData.handleChange}
        onBlur={formData.handleBlur}
        className={
          formData.touched.email && formData.errors.email
            ? "input-error w-full outline-none p-3 border-2 rounded-lg mt-4"
            : "w-full outline-none p-3 border-2 rounded-lg mt-4 " +
              (formData.touched.email ? "input-valid" : "input-default")
        }
      />
      {formData.touched.email && formData.errors.email && (
        <p className="text-red-600">{formData.errors.email}</p>
      )}
      <br />

      <input
        type="password"
        name="password"
        value={formData.values.password}
        placeholder="Enter Password"
        onChange={formData.handleChange}
        onBlur={formData.handleBlur}
        className={
          formData.touched.password && formData.errors.password
            ? "input-error w-full outline-none p-3 border-2 rounded-lg mt-4"
            : "w-full outline-none p-3 border-2 rounded-lg mt-4 " +
              (formData.touched.password ? "input-valid" : "input-default")
        }
      />
      {formData.touched.password && formData.errors.password && (
        <p className="text-red-600">{formData.errors.password}</p>
      )}
      <br />

      <input
        className="w-full border-2 rounded-lg mt-4 py-3 cursor-pointer hover:bg-gray-100"
        type="submit"
        value="submit"
      />
    </form>
  );
};

export default Form3;