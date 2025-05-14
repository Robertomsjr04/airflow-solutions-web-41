
/**
 * Browser support utilities
 */

// Add vendor prefixes to CSS properties
export const prefixCSS = (element: HTMLElement, property: string, value: string) => {
  const prefixes = ['', '-webkit-', '-moz-', '-ms-', '-o-'];
  
  prefixes.forEach(prefix => {
    // @ts-ignore - Dynamic property access
    element.style[prefix + property] = value;
  });
};

// Check if browser supports a specific CSS feature
export const supportsCSS = (property: string, value?: string): boolean => {
  if (!window.CSS || !window.CSS.supports) {
    // Fallback for older browsers
    const elem = document.createElement('div');
    try {
      // @ts-ignore - Dynamic property setting
      if (value) {
        elem.style[property] = value;
        return elem.style[property] === value;
      }
      elem.style[property] = '1px';
      return elem.style[property] === '1px';
    } catch (e) {
      return false;
    }
  }
  
  if (value) {
    return window.CSS.supports(property, value);
  }
  
  return window.CSS.supports(property);
};

// Detect if using a touch device
export const isTouchDevice = (): boolean => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// Detect browser type
export const getBrowser = (): string => {
  const userAgent = navigator.userAgent;
  
  if (userAgent.match(/chrome|chromium|crios/i)) {
    return 'chrome';
  } else if (userAgent.match(/firefox|fxios/i)) {
    return 'firefox';
  } else if (userAgent.match(/safari/i)) {
    return 'safari';
  } else if (userAgent.match(/opr\//i)) {
    return 'opera';
  } else if (userAgent.match(/edg/i)) {
    return 'edge';
  } else if (userAgent.match(/msie|trident/i)) {
    return 'ie';
  }
  
  return 'unknown';
};

// Load polyfills when needed
export const loadPolyfills = async (): Promise<void> => {
  // Load core-js polyfills for older browsers if needed
  if (!('Promise' in window) || 
      !Array.prototype.includes || 
      !Object.values ||
      !('fetch' in window)) {
    
    console.log('Loading polyfills for older browser support');
    // In a real implementation, we would dynamically import polyfills here
  }
};

// Apply responsive optimizations
export const applyResponsiveOptimizations = (): void => {
  // Adjust tap target sizes for mobile
  if (isTouchDevice()) {
    document.body.classList.add('touch-device');
    
    // Make tap targets bigger on mobile
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    interactiveElements.forEach((el) => {
      if (el instanceof HTMLElement) {
        if (el.offsetWidth < 44 || el.offsetHeight < 44) {
          el.classList.add('mobile-tap-target');
        }
      }
    });
  }
};
