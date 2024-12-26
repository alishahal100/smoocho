'use client'

import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { Text } from 'lucide-react';
const navigation = [
  { name: 'About', href: '/about', current: false },
  { name: 'Products', href: '/#products', current: false }, // Links to homepage with #products
  { name: 'Contact us', href: '/#contact', current: false }, // Links to homepage with #contact
];


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  
  return (
    <Disclosure as="nav" className="bg-white-800 fixed top-0 left-0 right-0 z-50 animate-slide-down">
      <div className="lg:mx-auto max-w-4xl px-2 mx-5 sm:px-6 bg-[#f2f2f2] shadow-2xl rounded-[38px] mt-5 lg:px-8 transition-all duration-500 ease-in-out">
        <div className="relative flex lg:h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-start">
            <div className="flex-shrink-0">
              <img
                alt="Smoocho Logo"
                src="/Logo.png"
                className="h-12 lg:h-16 w-auto transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-white  transition-transform duration-300 ease-in-out"
            >
              <span className="sr-only">Open main menu</span>
              <h1 aria-hidden="true" className="block h-6 w-6 text-white font-extrabold -mt-2">
               <Text className=' text-pink-300 mt-2 text-xl'/>
              </h1>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out  ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Sidebar Menu */}
      <div
        className={`fixed inset-y-0 right-0 bg-[#f2f2f2] shadow-[#e6e6] rounded-lg w-80 max-w-full transform transition-transform duration-500 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4  mt-6">
          
          <button
            onClick={toggleMenu}
            className="rounded-md p-2 text-white focus:outline-none transition-transform duration-300 ease-in-out"
          >
            <XMarkIcon className="h-6 w-6 text-pink-700" aria-hidden="true" />
          </button>
        </div>
        <div className="flex flex-col items-start p-4 space-y-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-pink-700 ',
                'block rounded-md px-3 py-2 text-base font-medium transition-colors duration-300 ease-in-out'
              )}
              onClick={toggleMenu}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </Disclosure>
  );
}
