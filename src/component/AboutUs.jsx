import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      {/* Banner Section */}
      <div className="relative w-full lg:w-1/4 mx-auto mt-10 h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url('/Logo.png')` }}>
   
      </div>

      {/* Description Section */}
      <div className="max-w-7xl mx-auto p-6 sm:p-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h2>
        <p className="text-md text-gray-600 mb-6">
          Discover the sweet escape you've been craving at Smoo-Cho, your go-to destination for divine chocolate delights. Our passion
          is simple: to turn ordinary moments into extraordinary memories with the enchanting touch of cocoa. Smoo-Cho isn't just a
          dessert spot; it's a celebration of the finest chocolate creations, a place where each bite is a symphony of flavors designed to
          captivate your senses.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto p-6 sm:p-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-md text-gray-600 mb-6">
          The mission of Smoocho Foods aims to delight customers with exquisite chocolate creations and gourmet desserts while fostering
          economic growth through job creation and promoting affordable luxury in the culinary experience.
        </p>
      </div>

      {/* Vision Section */}
      <div className="max-w-7xl mx-auto p-6 sm:p-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
        <p className="text-md text-gray-600 mb-6">
          The vision of Smoocho is to become a leading provider of premium chocolates and gourmet desserts across India, establishing a
          network of over 100 branches, and offering imported, high-quality products at accessible prices while contributing positively to
          local economies and community well-being.
        </p>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto p-6 sm:p-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <div className="rounded-lg shadow-md pb-4">
            <img src="/team1.jpg" alt="Team Member 1" className="w-full h-96 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold ml-3 text-gray-800">JASIM PADIPATTA</h3>
            <p className="text-gray-600 ml-3">Managing Director</p>
          </div>

          {/* Team Member 2 */}
          <div className="rounded-lg shadow-md pb-4">
            <img src="/team2.jpg" alt="Team Member 2" className="w-full h-96 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold ml-3 text-gray-800">HUBAIL ARYATHARA</h3>
            <p className="text-gray-600 ml-3">Director</p>
          </div>

          {/* Team Member 3 */}
          <div className="rounded-lg shadow-md pb-4">
            <img src="/team3.jpg" alt="Team Member 3" className="w-full h-96 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold ml-3 text-gray-800">JEMSHEER AKKARA PARAMB</h3>
            <p className="text-gray-600 ml-3">Director</p>
          </div>
        </div>
      </div>

      {/* Certificates Section */}
      <div className="max-w-7xl mx-auto p-6 sm:p-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Certificate 1 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="/Certificate.jpg" alt="Certificate 1" className="w-full h-56 object-cover rounded-md mb-4" />
            <p className="text-gray-600">Start Up India Certificate</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
