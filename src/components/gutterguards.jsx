import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const benefits = [
  { id: 1, icon: CheckCircleIcon, title: 'Prevent Blockages', description: 'Gutter guards keep leaves and debris out, preventing blockages. Learn more about our Gutter Guard Installation Services.', link: '/gutter-guards' },
  { id: 2, icon: CheckCircleIcon, title: 'Reduce Maintenance', description: 'Spend less time cleaning gutters and more time enjoying your home. Discover our Gutter Cleaning Services.', link: '/gutter-cleaning' },
  { id: 3, icon: CheckCircleIcon, title: 'Prevent Water Damage', description: 'Ensure proper water flow and prevent overflow damage. Check out our Seamless Gutter Installation.', link: '/seamless-gutter-installation' },
  { id: 4, icon: CheckCircleIcon, title: 'Extend Gutter Life', description: 'Protect your gutters from premature wear and tear. Explore our Gutter Replacement Services.', link: '/gutter-replacement' },
  { id: 5, icon: CheckCircleIcon, title: 'Improve Curb Appeal', description: 'Maintain a clean and attractive exterior with gutter guards. See our Custom Gutter Solutions.', link: '/custom-gutter-solutions' },
  { id: 6, icon: CheckCircleIcon, title: 'Pest Prevention', description: 'Keep pests and insects out of your gutters. Book a free estimate today.', link: '/contact' },
];

function GutterGuards() {
  return (
    <div>
      {/* Section 1 - Dark Blue Background */}
      <div className="bg-JonesCo-Blue-900 text-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ExclamationTriangleIcon className="h-12 w-12 text-yellow-400 mx-auto mb-4 animate-bounce" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">Why Install Gutter Guards?</h2>
            <p className="mt-4 text-base sm:text-lg md:text-xl leading-8">Gutter guards provide numerous benefits, from preventing blockages to extending the lifespan of your gutter system. Here’s why you need them:</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <motion.div 
                key={benefit.id} 
                className="flex flex-col items-center bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <benefit.icon className="h-10 w-10 text-yellow-400 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-center">{benefit.description}</p>
                <Link href={benefit.link} legacyBehavior>
                  <a className="mt-2 text-JonesCo-Blue-500 hover:text-JonesCo-Blue-700 underline">Learn More</a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2 - Dark Green Background */}
      <div className="bg-JonesCo-Green-800 text-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black leading-tight text-JonesCo-Green-100">
              Gutter Guard Installation in 4 Steps
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <div className="bg-JonesCo-Green-950 p-6 rounded-lg shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-JonesCo-Orange-300">1. Consultation</h4>
              <p className="text-sm sm:text-base text-gray-300">
                We start with a detailed consultation to understand your needs and recommend the best gutter guard solutions.<br></br> <Link href="/contact" legacyBehavior><a className="underline text-JonesCo-Green-300">Contact Us</a></Link>
              </p>
            </div>
            <div className="bg-JonesCo-Green-950 p-6 rounded-lg shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-JonesCo-Orange-300">2. Customization</h4>
              <p className="text-sm sm:text-base text-gray-300">
                We design and customize gutter guards that fit your gutters perfectly, ensuring optimal performance.<br></br> <Link href="/custom-gutter-solutions" legacyBehavior><a className="underline text-JonesCo-Green-300">Learn More</a></Link>
              </p>
            </div>
            <div className="bg-JonesCo-Green-950 p-6 rounded-lg shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-JonesCo-Orange-300">3. Installation</h4>
              <p className="text-sm sm:text-base text-gray-300">
                Our professional team installs your gutter guards with precision and care. <br></br><Link href="/seamless-gutter-installation" legacyBehavior><a className="underline text-JonesCo-Green-300">Explore Seamless Gutter Installation</a></Link>
              </p>
            </div>
            <div className="bg-JonesCo-Green-950 p-6 rounded-lg shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-JonesCo-Orange-300">4. Final Inspection</h4>
              <p className="text-sm sm:text-base text-gray-300">
                After installation, we perform a final inspection to ensure everything is perfect and provide a detailed report. <br></br><Link href="/services" legacyBehavior><a className="underline text-JonesCo-Green-300">See All Services</a></Link>
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 sm:px-8 sm:py-3 text-base sm:text-lg font-medium text-JonesCo-Green-900 hover:bg-yellow-600"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Contact Us for a Free Estimate
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GutterGuards;
