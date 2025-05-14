
// Google Analytics implementation
export const initializeAnalytics = () => {
  // Load Google Analytics Script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=G-MEASUREMENT_ID`;
  document.head.appendChild(script);

  // Initialize Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', 'G-MEASUREMENT_ID');
};

// Track page views
export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-MEASUREMENT_ID', {
      page_path: path,
    });
  }
};

// Track events
export const trackEvent = (
  action: string, 
  category: string, 
  label?: string, 
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
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
