import React, { useState } from "react";
import { FaSortUp, FaSortDown, FaSort } from "react-icons/fa";

const Portfolio = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const filteredItems = items
    .filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    .sort((a, b) => {
      if (!sortKey) return 0;
      if (sortOrder === "asc") {
        return a[sortKey] > b[sortKey] ? 1 : -1;
      } else {
        return a[sortKey] < b[sortKey] ? 1 : -1;
      }
    });

  return (
    <div className="p-6 ml-64">
      <h1 className="text-2xl font-bold mb-4">Portfolio</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-1/3 p-2 border rounded mb-4"
      />
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            {[
              { label: "Loan No", key: "loanNo" },
              { label: "Loan Type", key: "loanType" },
              { label: "Borrower", key: "borrower" },
              { label: "Address", key: "address" },
              { label: "Co-Borrower", key: "coBorrower" },
              { label: "Amount", key: "amount" }
            ].map(({ label, key }) => (
              <th
                key={key}
                onClick={() => handleSort(key)}
                className="p-3 cursor-pointer hover:bg-gray-300 border-b border-gray-400"
              >
                {label}
                {sortKey === key ? (
                  sortOrder === "asc" ? <FaSortUp className="ml-2 inline" /> : <FaSortDown className="ml-2 inline" />
                ) : (
                  <FaSort className="ml-2 inline text-gray-500" />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item, index) => (
            <tr key={index} className="border-b border-gray-300 hover:bg-gray-100">
              <td className="p-3 border-r border-gray-300">{item.loanNo}</td>
              <td className="p-3 border-r border-gray-300">{item.loanType}</td>
              <td className="p-3 border-r border-gray-300">{item.borrower}</td>
              <td className="p-3 border-r border-gray-300">{item.address}</td>
              <td className="p-3 border-r border-gray-300">{item.coBorrower}</td>
              <td className="p-3">${item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Portfolio;