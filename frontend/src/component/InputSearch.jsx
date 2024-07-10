import React from "react";

export default function InputSearch({ inputChange }) {
  return (
    <div>
      <input
        className="inputBox"
        placeholder="Search by book name"
        onChange={inputChange}
      />
      {/* <button>Sea</button> */}
    </div>
  );
}
