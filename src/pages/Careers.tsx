import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Careers() {
  const positions = [
    {
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'Tech City',
      type: 'Full-time',
    },
    {
      title: 'UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Tech City',
      type: 'Full-time',
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote',
      type: 'Full-time',
    },
  ];

  const benefits = [
    'Competitive salary and equity',
    'Health, dental, and vision insurance',
    'Flexible work arrangements',
    'Professional development budget',
    'Generous paid time off',
    'Modern equipment and tools',
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center relative py-32"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Be part of a team that's shaping the future of technology. We're always
            looking for talented individuals to join our mission.
          </p>
        </div>
      </div>

      {/* Open Positions */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="grid gap-6">
            {positions.map((position) => (
              <div
                key={position.title}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {position.title}
                    </h3>
                    <div className="mt-2 space-y-1">
                      <p className="text-gray-600">Department: {position.department}</p>
                      <p className="text-gray-600">Location: {position.location}</p>
                      <p className="text-gray-600">Type: {position.type}</p>
                    </div>
                  </div>
                  <button className="flex items-center text-indigo-600 hover:text-indigo-700">
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Work With Us?</h2>
            <p className="mt-4 text-xl text-gray-600">
              We offer competitive benefits and a great work environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors"
              >
                <p className="text-gray-800">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't See the Right Position?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors">
            Submit Your Resume
          </button>
        </div>
      </div>
    </div>
  );
}