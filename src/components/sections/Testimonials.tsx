
import React from 'react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';

const testimonials = [
  {
    name: "Carlos Mendes",
    position: "Operations Director",
    company: "São Paulo Shopping Center",
    text: "We've been working with Air Flow for over 5 years. Their PMOC implementation has ensured our shopping center meets all regulatory requirements while maintaining optimal comfort for our customers.",
    rating: 5,
  },
  {
    name: "Dr. Ana Santos",
    position: "Facility Manager",
    company: "Santa Casa Hospital",
    text: "Air Flow's understanding of hospital refrigeration needs is exceptional. Their maintenance team keeps our critical systems running flawlessly, which is vital for our patients' well-being.",
    rating: 5,
  },
  {
    name: "Roberto Alves",
    position: "Industrial Manager",
    company: "BrasTech Manufacturing",
    text: "After upgrading our factory's cooling systems with Air Flow, we've seen a 30% reduction in energy consumption while improving temperature control in our production areas.",
    rating: 4,
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-airflow-gray">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Client Testimonials</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto reveal">
            Hear what our clients have to say about our refrigeration and HVAC services.
          </p>
          <div className="w-20 h-1 bg-airflow-blue mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="reveal" style={{ animationDelay: `${index * 100}ms` }}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-airflow-blue">{testimonial.company}</p>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
