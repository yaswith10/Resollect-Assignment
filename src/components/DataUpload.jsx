import React, { useState } from "react";

const DataUpload = ({ onAddItem }) => {
  const [formData, setFormData] = useState({
    loanNo: "",
    loanType: "",
    borrower: "",
    address: "",
    coBorrower: "",
    amount: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ ...formData, amount: parseFloat(formData.amount) });
    setFormData({ loanNo: "", loanType: "", borrower: "", address: "", coBorrower: "", amount: "" });
  };

  return (
    <div className="p-6 ml-64">
      <h1 className="text-2xl font-bold mb-4">Data Upload</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg space-y-4">
        <input type="text" name="loanNo" placeholder="Loan No" value={formData.loanNo} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="loanType" placeholder="Loan Type" value={formData.loanType} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="borrower" placeholder="Borrower" value={formData.borrower} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="coBorrower" placeholder="Co-Borrower" value={formData.coBorrower} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} className="w-full p-2 border rounded" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Item</button>
      </form>
    </div>
  );
};

export default DataUpload;
