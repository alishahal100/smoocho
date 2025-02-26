import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TermsAndConditions = () => {
  return (
    <div className=" flex flex-col">
        <Navbar />
  
    <div className="p-6 lg:p-12 max-w-4xl mx-auto">
      
      <h1 className="text-3xl font-bold mb-6 mt-24 text-center">Terms and Conditions</h1>
      
      <p className="text-sm text-gray-700">
        <strong>Last updated:</strong> February 25, 2025
      </p>

      <p className="mt-4 text-gray-700">
        Please read these terms and conditions carefully before using Our Service.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">Interpretation and Definitions</h2>

      <p className="text-gray-700">
        The words with capitalized initials have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or plural.
      </p>

      <h2 className="text-lg font-semibold mt-6">Definitions</h2>

      <p className="mt-2"><strong>Application:</strong> The software program provided by the Company, available at <a href="https://smoocho.in" className="text-blue-500 underline">https://smoocho.in</a>.</p>
      <p className="mt-2"><strong>Application Store:</strong> The digital distribution service operated and developed by Apple Inc. (Apple App Store) or Google Inc. (Google Play Store) in which the Application has been downloaded.</p>
      <p className="mt-2"><strong>Company:</strong> Referred to as "We", "Us", or "Our" in this agreement, represents <strong>Smoocho Foods Pvt Ltd</strong>, located in Kerala, India.</p>
      <p className="mt-2"><strong>Device:</strong> Any device that can access the Service such as a computer, cellphone, or digital tablet.</p>

      <h2 className="text-lg font-semibold mt-6">Acknowledgment</h2>

      <p className="mt-2">
        These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms set out the rights and obligations of all users regarding the use of the Service.
      </p>

      <p className="mt-2">
        Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. By accessing or using the Service, You agree to be bound by these Terms.
      </p>

      <h2 className="text-lg font-semibold mt-6">Links to Other Websites</h2>

      <p className="mt-2">
        Our Service may contain links to third-party websites or services that are not owned or controlled by the Company. We assume no responsibility for the content, privacy policies, or practices of any third-party sites.
      </p>

      <h2 className="text-lg font-semibold mt-6">Termination</h2>

      <p className="mt-2">
        We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including breach of these Terms.
      </p>

      <h2 className="text-lg font-semibold mt-6">Limitation of Liability</h2>

      <p className="mt-2">
        To the maximum extent permitted by applicable law, the Company shall not be liable for any special, incidental, indirect, or consequential damages whatsoever.
      </p>

      <h2 className="text-lg font-semibold mt-6">Governing Law</h2>

      <p className="mt-2">
        The laws of Kerala, India, excluding its conflict of law rules, shall govern these Terms and Your use of the Service.
      </p>

      <h2 className="text-lg font-semibold mt-6">Changes to These Terms</h2>

      <p className="mt-2">
        We reserve the right to modify or replace these Terms at any time. We will provide reasonable notice prior to any material changes taking effect.
      </p>

      <p className="mt-6 text-gray-700">If you have any questions about these Terms and Conditions, please contact us.</p>
    </div>
    <Footer/>
    </div>
  );
};

export default TermsAndConditions;
