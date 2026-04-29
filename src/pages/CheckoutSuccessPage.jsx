import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react"; // Optional: Use an icon library or a simple SVG

function CheckoutSuccessPage() {
  // Mock order number for the UI
  const orderNumber = "AMB-992834";

  return (
    <div className="min-h-[80vh] flex items-center justify-center container mx-auto px-4 py-10">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-3xl p-8 md:p-12 text-center border border-amber-50">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-amber-100 p-4 rounded-full">
            <svg
              className="w-16 h-16 text-amber-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
          Order Confirmed!
        </h1>

        <p className="text-amber-700 text-lg mb-8">
          Thank you for your purchase. We’re getting your signature items ready
          for shipment.
        </p>

        {/* Order Details Card */}
        <div className="bg-amber-50 rounded-2xl p-6 mb-8 inline-block w-full max-w-md">
          <div className="flex justify-between mb-2">
            <span className="text-amber-800 font-medium">Order Number:</span>
            <span className="text-amber-900 font-bold">{orderNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-amber-800 font-medium">
              Estimated Delivery:
            </span>
            <span className="text-amber-900 font-bold">3-5 Business Days</span>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-amber-600">
            A confirmation email has been sent to your inbox.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
            <Link
              to="/"
              className="w-full md:w-auto bg-amber-900 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-amber-950 transition-all active:scale-95"
            >
              Back to Shopping
            </Link>
            <button className="w-full md:w-auto bg-white text-amber-900 border border-amber-200 px-8 py-3 rounded-xl font-bold hover:bg-amber-50 transition-all">
              Track Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSuccessPage;
