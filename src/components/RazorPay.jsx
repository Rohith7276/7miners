import { useState } from "react";

const RazorPay = () => {
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        setLoading(true);

        // Call backend API to create an order
        const response = await fetch("http://localhost:5000/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: 500 }) // ₹5
        });

        const order = await response.json();
        setLoading(false);

        const options = {
            key: "your_live_or_test_key", // Replace with your Razorpay Key ID
            amount: order.amount,
            currency: order.currency,
            name: "My Website",
            description: "Purchase",
            order_id: order.id,
            handler: function (response) {
                alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
            },
            prefill: {
                name: "John Doe",
                email: "johndoe@example.com",
                contact: "9999999999"
            },
            theme: {
                color: "#3399cc"
            }
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    return (
        <button 
            onClick={handlePayment} 
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded"
        >
            {loading ? "Processing..." : "Pay Now"}
        </button>
    );
};

export default RazorPay;
