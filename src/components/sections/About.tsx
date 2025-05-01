
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">About Air Flow</h2>
          <div className="w-20 h-1 bg-airflow-blue mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Air Flow Team" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="reveal-right">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              Founded in 1990, Air Flow has been dedicated to providing high-quality industrial and commercial refrigeration solutions for over 30 years. Our mission is to ensure that your facilities operate with maximum efficiency, safety, and compliance with all technical regulations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start">
                <div className="bg-airflow-blue rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">30+ Years Experience</h4>
                  <p className="text-sm text-gray-600">Decades of industry expertise</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-airflow-blue rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Certified Team</h4>
                  <p className="text-sm text-gray-600">Highly qualified professionals</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-airflow-blue rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">National Reach</h4>
                  <p className="text-sm text-gray-600">Services across Brazil</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-airflow-blue rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Fast Response</h4>
                  <p className="text-sm text-gray-600">24/7 emergency support</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700">
              With a team of specialized engineers and technicians, Air Flow is committed to delivering top-tier refrigeration solutions tailored to the unique needs of each facility we service, ensuring comfort, safety, and energy efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
