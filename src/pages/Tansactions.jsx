import React from "react";


const transactions = [
  {
    id: 1,
    date: "2024-10-01",
    amount: "$150.00",
    type: "Deposit",
    status: "Completed",
    color: "bg-green-200", 
  },
  {
    id: 2,
    date: "2024-10-02",
    amount: "$75.00",
    type: "Withdrawal",
    status: "Pending",
    color: "bg-yellow-200", 
  },
  {
    id: 3,
    date: "2024-10-05",
    amount: "$200.00",
    type: "Deposit",
    status: "Completed",
    color: "bg-blue-200", 
  },
  {
    id: 4,
    date: "2024-10-10",
    amount: "$50.00",
    type: "Withdrawal",
    status: "Failed",
    color: "bg-red-200",
  },
  {
    id: 5,
    date: "2024-10-12",
    amount: "$120.00",
    type: "Deposit",
    status: "Completed",
    color: "bg-green-200", 
  },
  {
    id: 6,
    date: "2024-10-18",
    amount: "$350.00",
    type: "Deposit",
    status: "Completed",
    color: "bg-green-200", 
  }
];

const Transactions = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-white to-gray-200">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Transaction History
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className={`rounded-lg shadow-lg p-4 text-center ${transaction.color} text-gray-800 transform hover:scale-105 transition-transform duration-300`}
          >
            <h2 className="text-2xl font-bold mb-2">{transaction.type}</h2>
            <p className="text-lg">{transaction.amount}</p>
            <p className="text-sm text-gray-600 mb-2">{transaction.date}</p>
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                transaction.status === "Completed"
                  ? "bg-green-400 text-white"
                  : transaction.status === "Pending"
                  ? "bg-yellow-400 text-white"
                  : "bg-red-400 text-white"
              }`}
            >
              {transaction.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
