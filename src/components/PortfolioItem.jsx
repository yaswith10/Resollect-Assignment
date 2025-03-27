import React from "react";

const PortfolioItem = ({ loanNo, loanType, borrower, address, coBorrower, amount }) => {
  return (
    <tr className="border-b hover:bg-gray-100">
      <td className="p-3">{loanNo}</td>
      <td className="p-3">{loanType}</td>
      <td className="p-3">{borrower}</td>
      <td className="p-3">{address}</td>
      <td className="p-3">{coBorrower}</td>
      <td className="p-3">${amount}</td>
    </tr>
  );
};

export default PortfolioItem;
