import React from "react";

function StudentList() {
  // Step 1: Define an array of data
  const students = [
    { id: 1, name: "Rahul", branch: "CSE" },
    { id: 2, name: "Priya", branch: "ECE" },
    { id: 3, name: "Kiran", branch: "EEE" },
    { id: 4, name: "Sneha", branch: "ME" }
  ];

  // Step 2: Use map() to iterate and render elements
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Student Details</h2>
      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        style={{ margin: "0 auto", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.branch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;