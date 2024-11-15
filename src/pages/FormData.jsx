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
    <>
      <h1>แบบฟอร์มภาษี</h1>
      <form onSubmit={submitForm}>
        <p>
          <label>เงินเดือน: </label>
          <input type="text" name="salary" id="salary" onChange={handlaChange} />
        </p>
        <p>
          <label>โบนัส: </label>
          <input type="text" name="bonus" id="bonus" onChange={handlaChange} />
        </p>
        <p>
          <label>ประกันสังคมต่อเดือน: </label>
          <input type="text" name="ssecurity" id="ssecurity" onChange={handlaChange} />
        </p>
        <p>
          <label>จำนวนบุตร: </label>
          <input type="text" name="child" id="child" onChange={handlaChange} />
        </p>
        <p>
          <label>ค่าเบี้ยประกันชีวิตต่อปี: </label>
          <input type="text" name="slife" id="slife" onChange={handlaChange} />
        </p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormData;
