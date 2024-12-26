import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp, FaAddressCard, FaMailchimp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoCallOutline } from "react-icons/io5";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="lg:px-20 text-black py-8">
      <div className="container mx-auto px-6 lg:px-12">
      <div className="w-[70vw] h-[2px] bg-black mx-auto  mt-5 mb-6"></div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Contact Info */}
          <div className="mb-6 lg:mb-0">
            <h4 className="text-lg lg:text-2xl ml-1 font-semibold mb-4">
              Contact Us
            </h4>
            <div className="flex items-start mb-5 gap-3">
              <FaAddressCard className=" mt-3"/>
              <p className="text-sm">
                <strong>Offical Address</strong>
                <br />
                58/754, Kuttichira, Nagaram, Calicut, Kozhikode, Kozhikode,
                Kerala, India, 673001
              </p>
            </div>
            <div className="flex items-start gap-3 mb-5">
              <CgMail className=" mt-3"/>
              <p className="text-sm">
                <strong>Email Us</strong>
                <br />
                smoochofoodspvtltd@gmail.com
              </p>
            </div>
            <div className="flex items-start gap-3">
              <IoCallOutline className=" mt-3"/>
              <p className="text-sm">
                <strong>Call Us</strong>
                <br />
                +91 9656553733
              </p>
            </div>
          </div>

          {/* Social Media and Rights */}
          <div className="flex flex-col gap-5 items-center lg:items-start">
            <div className="flex space-x-4 mb-4 lg:mb-0">

            <a
                href="https://www.instagram.com/smoocho_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="text-black hover:text-pink-500"
                  size={24}
                />
              </a>
              <a
                href="https://wa.me/919656553733"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp
                  className="text-black hover:text-green-500"
                  size={24}
                />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  className="text-black hover:text-blue-500"
                  size={24}
                />
              </a>
              
             
              
            </div>
            <p className="text-sm  text-center lg:text-left">
              &copy; {currentYear}, All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
