export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto py-20">
        {/* Header */}
        <h1 className="text-4xl font-bold text-white mb-4">
          Terms and Conditions
        </h1>
        
        <p className="text-gray-300 mb-8">
          Welcome to <span className="font-semibold text-white">Rhinon Tech</span>! 
          These terms and conditions govern your use of our website and services. 
          By accessing or using our platform, you agree to comply with the terms outlined below:
        </p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Usage of Services
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Our platform is intended for lawful use only.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>
                Unauthorized use of our services, including reverse engineering 
                or unauthorized data extraction, is strictly prohibited.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Intellectual Property
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>
                All content, trademarks, and technology provided by Rhinon Tech 
                are the exclusive property of the company.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>
                You may not reproduce, distribute, or modify any part of our 
                platform without prior consent.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Limitation of Liability
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>
                Rhinon Tech is not liable for indirect, incidental, or 
                consequential damages arising from service usage.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Changes to Terms
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>
                Rhinon Tech reserves the right to update these terms at any time. 
                Please review them periodically.
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