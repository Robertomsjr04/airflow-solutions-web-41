// Google Analytics implementation
interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
}

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Updated with a real Google Analytics ID
const GA_MEASUREMENT_ID = 'G-L7QK3EN5YF';

export const initializeAnalytics = () => {
  try {
    // Check if script already exists to prevent duplicates
    if (document.querySelector(`script[src*="googletagmanager"]`)) {
      console.log('Google Analytics already initialized');
      return;
    }
    
    // Load Google Analytics Script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
    
    console.log('Google Analytics initialized successfully');
  } catch (error) {
    console.warn('Failed to initialize analytics:', error);
  }
};

// Track page views
export const trackPageView = (path: string) => {
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: path,
      });
    }
  } catch (error) {
    console.warn('Error tracking page view:', error);
  }
};

// Track events
export const trackEvent = (
  action: string, 
  category: string, 
  label?: string, 
  value?: number
) => {
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  } catch (error) {
    console.warn('Error tracking event:', error);
  }
};

// Track contact form submissions
export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent(
    'form_submission',
    'engagement',
    `${formName} - ${success ? 'success' : 'failure'}`
  );
};
