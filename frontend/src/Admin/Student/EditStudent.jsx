import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { baseApiURL } from "../../baseUrl";
import { FiSearch, FiUpload, FiX } from "react-icons/fi";
const EditStudent = () => {
  const [file, setFile] = useState();
  const [branch, setBranch] = useState();
  const [search, setSearch] = useState();
  const [searchActive, setSearchActive] = useState(false);
  const [data, setData] = useState({
    enrollmentNo: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [id, setId] = useState();
  const getBranchData = () => {
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .get(`${baseApiURL()}/branch/getBranch`, { headers })
      .then((response) => {
        if (response.data.success) {
          setBranch(response.data.branches);
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateStudentProfile = (e) => {
    e.preventDefault();
    toast.loading("Updating Student");
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .post(`${baseApiURL()}/student/details/updateDetails/${id}`, data, {
        headers: headers,
      })
      .then((response) => {
        toast.dismiss();
        if (response.data.success) {
          toast.success(response.data.message);
          setFile("");
          setSearch("");
          setId("");
          setData({
            enrollmentNo: "",
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
          });
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        toast.dismiss();
        toast.error(error.response.data.message);
      });
  };

  const searchStudentHandler = (e) => {
    setSearchActive(true);
    e.preventDefault();
    toast.loading("Getting Student");
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .post(
        `${baseApiURL()}/student/details/getDetails`,
        { enrollmentNo: search },
        { headers }
      )
      .then((response) => {
        toast.dismiss();
        if (response.data.success) {
          if (response.data.user.length === 0) {
            toast.error("No Student Found!");
          } else {
            toast.success(response.data.message);
            setData({
              enrollmentNo: response.data.user[0].enrollmentNo,
              firstName: response.data.user[0].firstName,
              lastName: response.data.user[0].lastName,
              email: response.data.user[0].email,
              phoneNumber: response.data.user[0].phoneNumber,
            });
            setId(response.data.user[0]._id);
          }
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        console.error(error);
      });
  };

  const clearSearchHandler = () => {
    setSearchActive(false);
    setSearch("");
    setId("");
    setData({
      enrollmentNo: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    });
  };

  return (
    <div className="my-6 mx-auto w-full">
      <form
        className="flex justify-center items-center border-2 border-blue-500 rounded w-[40%] mx-auto"
        onSubmit={searchStudentHandler}
      >
        <input
          type="text"
          className="px-6 py-3 w-full outline-none"
          placeholder="Enrollment No."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {!searchActive && (
          <button className="px-4 text-2xl hover:text-blue-500" type="submit">
            <FiSearch />
          </button>
        )}
        {searchActive && (
          <button
            className="px-4 text-2xl hover:text-blue-500"
            onClick={clearSearchHandler}
          >
            <FiX />
          </button>
        )}
      </form>
      {search && id && (
        <form
          onSubmit={updateStudentProfile}
          className="w-[70%] flex justify-center items-center flex-wrap gap-6 mx-auto mt-10"
        >
          <div className="w-[40%]">
            <label htmlFor="firstname" className="leading-7 text-sm ">
              Enter First Name
            </label>
            <input
              type="text"
              id="firstname"
              value={data.firstName}
              onChange={(e) => setData({ ...data, firstName: e.target.value })}
              className="w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="w-[40%]">
            <label htmlFor="lastname" className="leading-7 text-sm ">
              Enter Last Name
            </label>
            <input
              type="text"
              id="lastname"
              value={data.lastName}
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
              className="w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="w-[40%]">
            <label htmlFor="enrollmentNo" className="leading-7 text-sm ">
              Enrollment No
            </label>
            <input
              disabled
              type="number"
              id="enrollmentNo"
              value={data.enrollmentNo}
              onChange={(e) =>
                setData({ ...data, enrollmentNo: e.target.value })
              }
              className="w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="w-[40%]">
            <label htmlFor="email" className="leading-7 text-sm ">
              Enter Email Address
            </label>
            <input
              type="email"
              id="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="w-[40%]">
            <label htmlFor="phoneNumber" className="leading-7 text-sm ">
              Enter Phone Number
            </label>
            <input
              type="number"
              id="phoneNumber"
              value={data.phoneNumber}
              onChange={(e) =>
                setData({ ...data, phoneNumber: e.target.value })
              }
              className="w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          {data.profile && (
            <div className="w-full flex justify-center items-center">
              <img src={data.profile} alt="student" className="h-36" />
            </div>
          )}
          <button
            type="submit"
            className="bg-blue-500 px-6 py-3 rounded-sm mb-6 text-white"
          >
            Update Student
          </button>
        </form>
      )}
    </div>
  );
};

export default EditStudent;