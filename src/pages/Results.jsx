import { NavLink, useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { formData } = location.state;

  // ตัวแปร
  let salary = formData.salary * 1;
  let bonus = formData.bonus * 1;
  let ssecurity = formData.ssecurity;
  let child = formData.child;
  let slife = formData.slife * 1;

  // คำนวน
  let salaryOfYear = salary * 12 + bonus;
  let expenses = salaryOfYear * 0.5 <= 100000 ? salaryOfYear * 0.5 : 100000;
  let security = ssecurity * 12;
  let childs = child <= 2 ? child : 2;
  let Childi = childs * 30000;
  let slack = 60000 + security + Childi + slife;
  let net = expenses - security - slack;
  let ptax = 0;
  if (net <= 100000) ptax = 0;
  else if (net <= 300000) ptax = 0.05;
  else if (net <= 1000000) ptax = 0.1;
  else ptax = 0.15;

  return (
    <div className="bg-gradient-to-br from-purple-200 to-purple-800 p-6 rounded-lg shadow-lg mx-auto w-96 text-black">
      <h1 className="text-center text-4xl font-bold my-5">ผลการคำนวน</h1>
      <div className="space-y-4 text-lg">
        <p className="flex justify-between">
          <span>เงินได้ทั้งปี: </span>
          <strong className="text-white">{salaryOfYear.toLocaleString()}</strong>
          <span> บาท</span>
        </p>
        <p className="flex justify-between">
          <span>ค่าให้จ่าย: </span>
          <strong className="text-white">{expenses.toLocaleString()}</strong>
          <span> บาท</span>
        </p>
        <p className="flex justify-between">
          <span>ค่ายลดหย่อน: </span>
          <strong className="text-white">{slack.toLocaleString()}</strong>
          <span> บาท</span>
        </p>
        <p className="flex justify-between">
          <span>เงินได้พึงประเมินสุทธิ: </span>
          <strong className="text-white">{net.toLocaleString()}</strong>
          <span> บาท</span>
        </p>
        <p className="flex justify-between">
          <span>อัตราภาษี: </span>
          <strong className="text-white">{(ptax * 100).toLocaleString()}</strong>
          <span> %</span>
        </p>
        <p className="flex justify-between">
          <span>ภาษีที่ต้องชำระ: </span>
          <strong className="text-white">{net * ptax.toLocaleString()}</strong>
          <span> บาท</span>
        </p>
        <div className="flex justify-end mt-4">
          <NavLink to='/' className="bg-gray-100 text-purple-800 hover:bg-gradient-to-br from-purple-300 to-purple-500 hover:text-gray-100 font-bold rounded-lg shadow-lg p-1 px-2">Back</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Results;
