import { useEffect } from 'react';

const useOutsideClick = (ref, callback) => {
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      const isInsideMenu = event.target.closest('[data-inside-menu]');
      if (!isInsideMenu) {
        callback();
      }
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => handleClickOutside(event);
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [ref, callback]);
};

export default useOutsideClick;