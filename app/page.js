"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    email: "",
    mobile: "",
    companyName: "",
    address: "",
    location: "",
    fanType: "",
    controller: "",
    userType: "",
  });

  const locations = ["Pune", "Mumbai", "Kolkata"];
  const fanTypes = ["Axial Fan", "Centrifugal Fan", "Controller"];
  const controllers = ["Electronic", "Fan"];
  const userTypes = ["Customer", "Supplier", "Visitor"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    toast.success("Form submitted successfully!");
    setFormData({
      name: "",
      designation: "",
      email: "",
      mobile: "",
      companyName: "",
      address: "",
      location: "",
      fanType: "",
      controller: "",
      userType: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 text-black bg-white p-10 rounded-md"
      style={{ maxWidth: "500px", margin: "0 auto" }}
    >
      <h2 className=" font-medium">Transmonk Feedback Form</h2>

      <label className=" flex justify-between">
        Name:
        <input
          placeholder="Name"
          type="text"
          name="name"
          className=" border px-2 py-1 ml-3 rounded-sm"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label className=" flex justify-between">
        Designation:
        <input
          type="text"
          placeholder="Designation"
          name="designation"
          className=" border px-2 py-1  ml-3 rounded-sm"
          value={formData.designation}
          onChange={handleChange}
          required
        />
      </label>

      <label className=" flex justify-between">
        Email:
        <input
          placeholder="Email"
          className=" border px-2 py-1  ml-3 rounded-sm"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label className=" flex justify-between">
        Mobile:
        <input
          className=" border px-2 py-1  ml-3 rounded-sm"
          placeholder="Mobile"
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </label>

      <label className=" flex justify-between">
        Company Name:
        <input
          placeholder="Company Name"
          type="text"
          className=" border px-2 py-1  ml-3 rounded-sm"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
      </label>

      <label className=" flex justify-between">
        Address (Optional):
        <input
          className=" border px-2 py-1  ml-3 rounded-sm"
          placeholder="Address"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>

      <label className=" flex justify-between">
        Location:
        <select
          name="location"
          className=" border px-2 py-1  ml-3 rounded-sm cursor-pointer"
          value={formData.location}
          onChange={handleChange}
          required
        >
          <option value="">Select Location</option>
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      </label>

      <label className=" flex justify-between">
        User Type:
        <select
          className=" border px-2 py-1 ml-3 rounded-sm cursor-pointer"
          name="userType"
          value={formData.userType}
          onChange={handleChange}
          required
        >
          <option value="">Select User Type</option>
          {userTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      {formData.userType === "Customer" || formData.userType === "Supplier" ? (
        <>
          <label className=" flex justify-between">
            Controller:
            <select
              name="controller"
              className=" border px-2 py-1  ml-3 rounded-sm cursor-pointer"
              value={formData.controller}
              onChange={handleChange}
              required
            >
              <option value="">Select Controller</option>
              {controllers.map((controller, index) => (
                <option key={index} value={controller}>
                  {controller}
                </option>
              ))}
            </select>
          </label>

          {formData.controller === "Fan" ? (
            <>
              <label className=" flex justify-between">
                Fan Type:
                <select
                  className=" border px-2 py-1  ml-3 rounded-sm cursor-pointer"
                  name="fanType"
                  value={formData.fanType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Fan Type</option>
                  {fanTypes.map((fan, index) => (
                    <option key={index} value={fan}>
                      {fan}
                    </option>
                  ))}
                </select>
              </label>
            </>
          ) : null}
        </>
      ) : null}

      <button
        className=" bg-blue-700 text-white font-bold rounded-md py-3"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Page;
