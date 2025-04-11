import React, { useState } from "react";

const orders = [
    {
        id: "ORD12345",
        customer: "John Doe",
        date: "2025-04-01",
        total: "$120.50",
        status: "Shipped",
        items: [
            { name: "Laptop", quantity: 1, price: "$100.00" },
            { name: "Mouse", quantity: 1, price: "$20.50" },
        ],
    },
    {
        id: "ORD12346",
        customer: "Jane Smith",
        date: "2025-04-02",
        total: "$85.00",
        status: "Processing",
        items: [
            { name: "Keyboard", quantity: 1, price: "$50.00" },
            { name: "Headphones", quantity: 1, price: "$35.00" },
        ],
    },
    {
        id: "ORD12347",
        customer: "Alice Johnson",
        date: "2025-04-03",
        total: "$45.75",
        status: "Delivered",
        items: [
            { name: "Phone Case", quantity: 1, price: "$15.75" },
            { name: "Charger", quantity: 1, price: "$30.00" },
        ],
    },
];

const getStatusColor = (status) => {
    switch (status) {
        case "Shipped":
            return "bg-blue-500";
        case "Processing":
            return "bg-yellow-500";
        case "Delivered":
            return "bg-green-500";
        default:
            return "bg-gray-500";
    }
};

const OrdersList = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-lg rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-4">Orders</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-3 border border-gray-200 text-left">Order ID</th>
                                <th className="p-3 border border-gray-200 text-left">Customer</th>
                                <th className="p-3 border border-gray-200 text-left">Date</th>
                                <th className="p-3 border border-gray-200 text-left">Total</th>
                                <th className="p-3 border border-gray-200 text-left">Status</th>
                                <th className="p-3 border border-gray-200 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id} className="border border-gray-200 hover:bg-gray-50">
                                    <td className="p-3 border border-gray-200">{order.id}</td>
                                    <td className="p-3 border border-gray-200">{order.customer}</td>
                                    <td className="p-3 border border-gray-200">{order.date}</td>
                                    <td className="p-3 border border-gray-200">{order.total}</td>
                                    <td className="p-3 border border-gray-200">
                                        <span className={`px-2 py-1 rounded text-white ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="p-3 border border-gray-200">
                                        <button
                                            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                                            onClick={() => setSelectedOrder(order)}
                                        >
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {selectedOrder && (
                    <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-gray-50">
                        <h3 className="text-lg font-bold mb-2">Order Details - {selectedOrder.id}</h3>
                        <p><strong>Customer:</strong> {selectedOrder.customer}</p>
                        <p><strong>Date:</strong> {selectedOrder.date}</p>
                        <p><strong>Total:</strong> {selectedOrder.total}</p>
                        <p><strong>Status:</strong> {selectedOrder.status}</p>
                        <h4 className="mt-3 font-semibold">Items:</h4>
                        <ul className="list-disc ml-6">
                            {selectedOrder.items.map((item, index) => (
                                <li key={index}>{item.name} - {item.quantity} x {item.price}</li>
                            ))}
                        </ul>
                        <button
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            onClick={() => setSelectedOrder(null)}
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrdersList;
