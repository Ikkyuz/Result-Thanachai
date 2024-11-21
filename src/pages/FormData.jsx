import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handlaChange = (event) => {
    // เมื่อ input มีการเปลี่ยนค่า ให้ set State formData ใหม่
    setFormData({
      ...formData,
      //   สร้าง key-value เป็นรูปแบบ name: value
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    navigate("/result", { state: { formData } });
  };

  return (
    <div className="bg-gradient-to-br from-purple-200 to-purple-800 p-6 rounded-lg shadow-lg mx-auto">
      <h1 className="text-center text-4xl font-bold my-5">แบบฟอร์มภาษี</h1>
      <form onSubmit={submitForm} className="text-lg">
        <p>
          <label>เงินเดือน: </label>
          <input type="text" name="salary" id="salary" onChange={handlaChange} className="w-full pl-1 border rounded-md"/>
        </p>
        <p className="mt-1">
          <label>โบนัส: </label>
          <input type="text" name="bonus" id="bonus" onChange={handlaChange} className="w-full pl-1 border rounded-md"/>
        </p>
        <p className="mt-1">
          <label>ประกันสังคมต่อเดือน: </label>
          <input type="text" name="ssecurity" id="ssecurity" onChange={handlaChange} className="w-full pl-1 border rounded-md"/>
        </p>
        <p className="mt-1">
          <label>จำนวนบุตร: </label>
          <input type="text" name="child" id="child" onChange={handlaChange} className="w-full pl-1 border rounded-md"/>
        </p>
        <p className="mt-1">
          <label>ค่าเบี้ยประกันชีวิตต่อปี: </label>
          <input type="text" name="slife" id="slife" onChange={handlaChange} className="w-full pl-1 border rounded-md"/>
        </p>
        <div className="flex justify-end mt-3">
          <button type="submit" className="bg-gray-100 text-purple-800 hover:bg-gradient-to-br from-purple-300 to-purple-500 hover:text-gray-100 font-bold rounded-lg shadow-lg p-1 px-2">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormData;
