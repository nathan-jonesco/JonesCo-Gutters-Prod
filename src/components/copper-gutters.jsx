import React from 'react';
import Image from 'next/image';

const CopperGutters = () => {
  return (
    <div className="bg-JonesCo-Blue-600 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Copper Gutters
          </h2>
          <p className="mt-4 text-lg leading-6 text-JonesCo-Green-100">
            Enhance the elegance and durability of your home with our top-quality copper gutters.
          </p>
        </div>

        <div className="mt-12">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-bold text-JonesCo-Blue-900">About Copper Gutters</h3>
              <p className="mt-1 max-w-2xl text-sm text-JonesCo-Blue-900">
                Copper gutters are a premium choice for homeowners looking to add a touch of elegance to their homes. Known for their durability and unique appearance, copper gutters can develop a patina over time, which adds a distinct character to your home.
              </p>
            </div>
            <div className="border-t border-JonesCo-Blue-200">
              <dl>
                <div className="bg-JonesCo-Blue-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-JonesCo-Blue-900">Benefits</dt>
                  <dd className="mt-1 text-sm text-JonesCo-Blue-900 sm:mt-0 sm:col-span-2">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Highly durable and long-lasting</li>
                      <li>Develops a beautiful patina over time</li>
                      <li>Requires minimal maintenance</li>
                      <li>Resistant to rust and corrosion</li>
                    </ul>
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-JonesCo-Blue-900">Installation Process</dt>
                  <dd className="mt-1 text-sm text-JonesCo-Blue-900 sm:mt-0 sm:col-span-2">
                    Our expert team ensures a seamless installation process, from initial consultation to final touches. We use the highest quality materials and techniques to ensure your copper gutters are installed to last.
                  </dd>
                </div>
                <div className="bg-JonesCo-Blue-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-JonesCo-Blue-900">Gallery</dt>
                  <dd className="mt-1 text-sm text-JonesCo-Blue-900 sm:mt-0 sm:col-span-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative w-full h-64">
                        <Image 
                          src="/images/copper-gutter-1.jpg" 
                          alt="Copper gutter example" 
                          layout="fill" 
                          objectFit="cover" 
                          className="rounded-lg shadow-md" 
                        />
                      </div>
                      <div className="relative w-full h-64">
                        <Image 
                          src="/images/copper-gutter-2.jpg" 
                          alt="Copper gutter example" 
                          layout="fill" 
                          objectFit="cover" 
                          className="rounded-lg shadow-md" 
                        />
                      </div>
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopperGutters;