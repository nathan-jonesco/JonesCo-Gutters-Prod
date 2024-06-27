import React from 'react';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const StepsToExpect = () => {
  const steps = [
    {
      title: 'Free Consultation',
      description: 'Schedule your free consultation with our experts to assess your gutter needs.',
      link: '/contact',
    },
    {
      title: 'Detailed Estimate',
      description: 'Receive a detailed, no-obligation estimate for your gutter project.',
      link: '/services',
    },
    {
      title: 'Professional Installation',
      description: 'Our skilled team will professionally install your new gutter system.',
      link: '/seamless-gutter-installation',
    },
    {
      title: 'Thorough Cleanup',
      description: 'We ensure your property is clean and tidy after the installation.',
      link: '/about',
    },
    {
      title: 'Follow-Up Support',
      description: 'We provide ongoing support and maintenance to keep your gutters in top condition.',
      link: '/services',
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Gutter Problems Gone in 5 Steps
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Here&apos;s what to expect when you choose JonesCo Gutters for your gutter solutions.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
              <CheckCircleIcon className="h-12 w-12 text-JonesCo-Green-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{step.description}</p>
              <Link href={step.link}>
                <a className="text-JonesCo-Blue-600 hover:text-JonesCo-Blue-800 font-semibold underline">
                  Learn More
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsToExpect;
