import React from 'react';

export default function About() {
  const directors = [
    {
      name: 'Vasanth Parthasarathy',
      role: 'Director & Founder',
      image: '/ntsweb/vp.JPG',
      description: 'With over 20 years of experience in tech innovation, Vasanth leads Neolumina\'s vision and strategic direction.',
    },
    {
      name: 'Ravishankar Jayaraman',
      role: 'Director & Co-Founder',
      image: '/ntsweb/rj.jpg',
      description: 'A pioneer in AI and machine learning, Ravi drives our technological advancement and innovation initiatives.',
    },
    {
      name: 'Prasanna Ravichandran',
      role: 'Director & Co-Founder',
      image: '/ntsweb/pr.jpg?auto=format&fit=crop&q=80',
      description: 'Prasanna ensures operational excellence and sustainable growth across all our global operations.',
    },
    {
      name: 'Sudarshan Aravamudhan',
      role: 'Director & Co-Founder',
      image: '/ntsweb/sa.jpg',
      description: 'With his strategic financial planning, Sudarshan helps maintain our strong market position and growth.',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6 text-center">About Neolumina</h1>
          <p className="text-xl max-w-3xl mx-auto text-center text-indigo-100">
            We are pioneers in technological innovation, committed to creating solutions
            that shape the future of industries worldwide.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              To illuminate the path of innovation through cutting-edge technology
              solutions while maintaining the highest standards of excellence and
              sustainability.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {directors.map((director) => (
              <div key={director.name} className="text-center">
                <div className="relative mx-auto w-48 h-48 mb-6">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="rounded-full w-full h-full object-cover border-4 border-indigo-600"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{director.name}</h3>
                <p className="text-indigo-600 font-medium mb-2">{director.role}</p>
                <p className="text-gray-600">{director.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Innovation', 'Integrity', 'Excellence'].map((value) => (
              <div key={value} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value}</h3>
                <p className="text-gray-600">
                  We believe in pushing boundaries while maintaining the highest
                  ethical standards and delivering exceptional results.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}