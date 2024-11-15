import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { formData } = location.state;

  // ตัวแปร
  let salary = formData.salary*1;
  let bonus = formData.bonus*1;
  let ssecurity = formData.ssecurity;
  let child = formData.child;
  let slife = formData.slife*1;

  // คำนวน
  let salaryOfYear = (salary * 12) + bonus;
  let expenses = salaryOfYear * 0.5 <= 100000 ? salaryOfYear * 0.5 : 100000;
  let security = ssecurity * 12;
  let childs = child <= 2 ? child : 2;
  let Childi = childs * 30000;
  let slack = 60000 + security + Childi + slife;
  let net = expenses - security - slack;
  let ptax = 0;
  if (net <= 100000) ptax = 0
  else if (net <= 300000) ptax = 0.05
  else if (net <= 1000000) ptax = 0.10
  else ptax = 0.15;
  return (
    <div>
      <h1>ผลการคำนวน</h1>
      <p>
        <strong>เงินได้ทั้งปี: {salaryOfYear.toLocaleString()} บาท</strong>
      </p>
      <p>
        <strong>ค่าให้จ่าย: {expenses.toLocaleString()} บาท</strong>
      </p>
      <p>
        <strong>ค่ายลดหย่อน: {slack.toLocaleString()} บาท</strong>
      </p>
      <p>
        <strong>เงินได้พึงประเมินสุทธิ: {net.toLocaleString()} บาท</strong>
      </p>
      <p>
        <strong>อัตราภาษี: {(ptax*100).toLocaleString()} %</strong>
      </p>
      <p>
        <strong>ภาษีที่ต้องชำระ: {net*ptax.toLocaleString()} บาท</strong>
      </p>
    </div>
  );
};

export default Results;
