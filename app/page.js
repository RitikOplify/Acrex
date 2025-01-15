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
      className="flex flex-col h-full xl:h-auto gap-5 max-w-[500px] text-black bg-white p-10 justify-center xl:rounded-md"
    >
      <h2 className=" font-medium">Transmonk Visitor Form</h2>

      <label className="flex justify-between">
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
        Address:
        <input
          className=" border px-2 py-1  ml-3 rounded-sm"
          placeholder="Address"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>

      <div className=" flex flex-wrap justify-between gap-4">
        <div className="flex items-start flex-col gap-2 ">
          <label>Location:</label>
          <div className="flex flex-col">
            {locations.map((location, index) => (
              <div key={index} className="flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  id={`location-${index}`}
                  name="location"
                  value={location}
                  checked={formData.location.includes(location)}
                  onChange={handleChange}
                  className="cursor-pointer"
                />
                <label
                  htmlFor={`location-${index}`}
                  className="ml-2 cursor-pointer"
                >
                  {location}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-start flex-col gap-2">
          <label className="mr-2">User Type:</label>
          <div className="flex flex-col">
            {userTypes.map((type, index) => (
              <div key={index} className="flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  id={`userType-${index}`}
                  name="userType"
                  value={type}
                  checked={formData.userType.includes(type)}
                  onChange={handleChange}
                  className="cursor-pointer"
                />
                <label
                  htmlFor={`userType-${index}`}
                  className="ml-2 cursor-pointer"
                >
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-start flex-col gap-2">
          <label className="mr-2">Controller:</label>
          <div className="flex flex-col">
            {controllers.map((controller, index) => (
              <div key={index} className="flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  id={`controller-${index}`}
                  name="controller"
                  value={controller}
                  checked={formData.controller.includes(controller)}
                  onChange={handleChange}
                  className="cursor-pointer"
                />
                <label
                  htmlFor={`controller-${index}`}
                  className="ml-2 cursor-pointer"
                >
                  {controller}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-start flex-col gap-2">
          <label className="mr-2">Fan Type:</label>
          <div className="flex flex-col">
            {fanTypes.map((fan, index) => (
              <div key={index} className="flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  id={`fanType-${index}`}
                  name="fanType"
                  value={fan}
                  checked={formData.fanType.includes(fan)}
                  onChange={handleChange}
                  className="cursor-pointer"
                />
                <label
                  htmlFor={`fanType-${index}`}
                  className="ml-2 cursor-pointer"
                >
                  {fan}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        className=" bg-blue-700 text-white font-semibold rounded-md py-2"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Page;
