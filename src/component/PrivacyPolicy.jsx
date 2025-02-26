import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const PrivacyPolicy = () => {
  return (
    <div>
        <Navbar/>
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800 mt-24">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">Privacy Policy</h1>
      <p className="text-sm text-gray-500 text-center">Last updated: February 25, 2025</p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your
          information when You use the Service and tells You about Your privacy rights and how the law protects You.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Definitions</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Account:</strong> A unique account created for You to access our Service.</li>
          <li><strong>Company:</strong> Refers to Smoocho Foods Pvt Ltd, Kerala, India.</li>
          <li><strong>Personal Data:</strong> Information related to an identified or identifiable individual.</li>
          <li><strong>Service:</strong> Refers to the application <a href="https://smoocho.in/" className="text-blue-600 underline">https://smoocho.in</a>.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Types of Data Collected</h2>
        <h3 className="text-lg font-medium text-gray-800 mt-4">Personal Data</h3>
        <p className="text-gray-700 leading-relaxed">
          We may ask You to provide personally identifiable information, including but not limited to:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
        </ul>

        <h3 className="text-lg font-medium text-gray-800 mt-6">Usage Data</h3>
        <p className="text-gray-700 leading-relaxed">
          Usage Data is collected automatically when using the Service and may include information such as IP address,
          browser type, pages visited, and other diagnostic data.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">How We Use Your Data</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>To provide and maintain our Service</li>
          <li>To manage Your Account</li>
          <li>To contact You regarding updates, offers, and security alerts</li>
          <li>To improve our Service through data analysis</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Your Privacy Rights</h2>
        <p className="text-gray-700 leading-relaxed">
          You have the right to request deletion of Your personal data. You can manage this through account settings or
          contact us directly.
        </p>
      </section>

      <footer className="mt-10 text-center">
        <p className="text-gray-600 text-sm">
          If you have any questions about this Privacy Policy, please contact us at
          <a href="mailto:support@smoocho.com" className="text-blue-600 underline ml-1">support@smoocho.com</a>.
        </p>
      </footer>
    </div>
    <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
