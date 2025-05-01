
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-airflow-blue">Air Flow</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <ul className="flex space-x-6">
            <li>
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-airflow-blue hover:text-airflow-lightBlue font-medium transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-airflow-blue hover:text-airflow-lightBlue font-medium transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-airflow-blue hover:text-airflow-lightBlue font-medium transition-colors"
              >
                Services
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('sectors')} 
                className="text-airflow-blue hover:text-airflow-lightBlue font-medium transition-colors"
              >
                Sectors
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('differentials')} 
                className="text-airflow-blue hover:text-airflow-lightBlue font-medium transition-colors"
              >
                Differentials
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-airflow-blue hover:text-airflow-lightBlue font-medium transition-colors"
              >
                Testimonials
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-airflow-blue hover:text-airflow-lightBlue font-medium transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-airflow-blue hover:bg-airflow-lightBlue text-white"
          >
            Request a Quote
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMobileMenu}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4">
          <ul className="flex flex-col space-y-4 px-6">
            <li>
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-airflow-blue hover:text-airflow-lightBlue font-medium transition-colors w-full text-left py-2"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-airflow-blue hover:text-airflow-lightBlue font-medium transition-colors w-full text-left py-2"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-airflow-blue hover:text-airflow-lightBlue font-medium transition-colors w-full text-left py-2"
              >
                Services
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('sectors')} 
                className="text-airflow-blue hover:text-airflow-lightBlue font-medium transition-colors w-full text-left py-2"
              >
                Sectors
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('differentials')} 
                className="text-airflow-blue hover:text-airflow-lightBlue font-medium transition-colors w-full text-left py-2"
              >
                Differentials
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-airflow-blue hover:text-airflow-lightBlue font-medium transition-colors w-full text-left py-2"
              >
                Testimonials
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-airflow-blue hover:text-airflow-lightBlue font-medium transition-colors w-full text-left py-2"
              >
                Contact
              </button>
            </li>
            <li className="pt-2">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-airflow-blue hover:bg-airflow-lightBlue text-white w-full"
              >
                Request a Quote
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
