import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'About', href: '#', current: false },
  { name: 'Products', href: '#', current: false },
  { name: 'Contact us', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white-800 fixed top-0 left-0 right-0 z-50 animate-slide-down">
      <div className="lg:mx-auto max-w-3xl px-2 mx-5 sm:px-6 bg-[#4e3012] rounded-[38px] mt-5 lg:px-8 transition-all duration-500 ease-in-out">
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
            <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-transform duration-300 ease-in-out">
              <span className="sr-only">Open main menu</span>
              <h1 aria-hidden="true" className="block h-6 w-6 text-white font-extrabold -mt-2">
                . . .
              </h1>
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 text-white" />
            </Disclosure.Button>
          </div>
        </div>
      </div>

      <Disclosure.Panel 
        className="bg-[#4e3012] transition-all duration-500 ease-in-out max-w-2xl  rounded-b-3xl mx-auto"
        
      >
        <div className="lg:max-w-[300px] sm:w-full flex flex-col items-center space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-[#3b200e] hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium transition-colors duration-300 ease-in-out',
              )}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  )
}
