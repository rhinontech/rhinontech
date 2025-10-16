export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto py-20">
        {/* Header */}
        <h1 className="text-4xl font-bold text-white mb-4">Return Policy</h1>

        <p className="text-gray-300 mb-8">
          At <span className="font-semibold text-white">Rhinon Tech</span>, we
          prioritize customer satisfaction and provide the following return
          guidelines to ensure a fair resolution for service issues:
        </p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Service Returns
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>
                If you experience issues with our services, contact us within 14
                days to request a resolution.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>
                Service adjustments or credits will be provided based on the
                nature of the issue.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Exceptions</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>
                Services disrupted due to misuse or external factors are not
                eligible for return or adjustment.
              </span>
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-300">
            For inquiries, contact us at:{" "}
            <a
              href="mailto:info@rhinontech.com"
              className="text-blue-400 hover:text-blue-300 font-medium underline"
            >
              info@rhinontech.com
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
