
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      // Standard page change: scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      // Hash present: wait for render then scroll with offset for fixed navbar
      const id = hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const navbarHeight = window.innerWidth >= 768 ? 100 : 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 150); // Small delay to allow component mounting
    }
  }, [pathname, search, hash]);

  return null;
};

export default ScrollToTop;
