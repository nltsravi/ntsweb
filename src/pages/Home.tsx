import React from 'react';
import { ArrowRight, Lightbulb, Target, Users } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Lightbulb className="h-8 w-8 text-indigo-600" />,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge solutions',
    },
    {
      icon: <Target className="h-8 w-8 text-indigo-600" />,
      title: 'Precision',
      description: 'Delivering excellence with meticulous attention to detail',
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: 'Collaboration',
      description: 'Working together to achieve extraordinary results',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Illuminating the Future
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Leading the way in innovative solutions for tomorrow's challenges
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose Neolumina?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              We combine innovation with expertise to deliver exceptional results
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 text-center hover:transform hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Transform Your Future?
            </h2>
            <p className="mt-4 text-xl text-indigo-100">
              Join us in shaping tomorrow's technology landscape
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-colors"
              >
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}