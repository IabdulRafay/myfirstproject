import React, { useState } from "react";
// FUNCTIONAL COMPONENT
const App = () => {
  //hook
  const [student, setStudent] = useState("Arslan");

  const [employee, setEmployee] = useState({
    Email: "ACb",
    Address: "ISb ",
    ContactNumber: "089789",
  });

  const handleUpdate = () => {
    // setStudent(student + "Ali");
    // setStudentInfo({ ...studentInfo, email: "arslan23@gmail.com" });
    setEmployee({ ...employee, Address: "Rana.rafay96@gmail.com" });
  };

  return (
    <>
      <h2>Name: {employee.Email}</h2>
      <h5>Email: {employee.Address}</h5>
      <h5> Address: {employee.ContactNumber}</h5>
      <button onClick={handleUpdate}>Update</button>
    </>
  );
};

export default App;
