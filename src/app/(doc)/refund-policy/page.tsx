export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto py-20">
        {/* Header */}
        <h1 className="text-4xl font-bold text-white mb-4">
          Refund Policy
        </h1>
        
        <p className="text-gray-300 mb-8">
          <span className="font-semibold text-white">Rhinon Tech</span> aims to provide transparent refund policies for its customers. 
          Below are the terms that apply to refund eligibility and processes:
        </p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Eligibility for Refunds
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Refunds are applicable only to annual plans canceled within the first 30 days of purchase.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>
                Monthly subscriptions are non-refundable.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Process for Refunds
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>
                Submit a refund request through{" "}
                <a 
                  href="mailto:support@rhinontech.com" 
                  className="text-blue-400 hover:text-blue-300 font-medium underline"
                >
                  support@rhinontech.com
                </a>
                {" "}with your order details.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>
                Refunds will be processed within 7-10 business days upon approval.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Non-Refundable Items
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>
                Setup fees, custom integrations, and usage-based costs are non-refundable.
              </span>
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-300">
            For inquiries, contact us at:{" "}
            <a 
              href="mailto:support@rhinontech.com" 
              className="text-blue-400 hover:text-blue-300 font-medium underline"
            >
              support@rhinontech.com
            </a>
          </p>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-sm text-gray-500">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}