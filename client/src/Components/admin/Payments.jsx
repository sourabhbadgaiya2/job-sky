const Payments = () => {
  const payments = [
    { id: 1, invoice: 'INV-2023-001', employer: 'Tech Corp', amount: '$500', date: '2023-05-15', status: 'Paid' },
    { id: 2, invoice: 'INV-2023-002', employer: 'Design Studio', amount: '$300', date: '2023-05-18', status: 'Paid' },
    { id: 3, invoice: 'INV-2023-003', employer: 'Marketing Agency', amount: '$200', date: '2023-05-20', status: 'Pending' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Payment Reports</h2>
        <div className="flex space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Generate Report
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Record Payment
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {payments.map(payment => (
              <tr key={payment.id}>
                <td className="px-6 py-4 whitespace-nowrap">{payment.invoice}</td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.employer}</td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${payment.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {payment.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                  <button className="text-blue-600 hover:text-blue-900">Invoice</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Earnings Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="text-lg font-medium text-blue-800">Total Earnings</h4>
            <p className="text-2xl font-bold">$12,450</p>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h4 className="text-lg font-medium text-green-800">This Month</h4>
            <p className="text-2xl font-bold">$1,200</p>
          </div>
          <div className="bg-purple-50 p-4 rounded">
            <h4 className="text-lg font-medium text-purple-800">Pending Payments</h4>
            <p className="text-2xl font-bold">$200</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;