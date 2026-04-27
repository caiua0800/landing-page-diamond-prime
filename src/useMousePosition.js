import { useState, useEffect } from 'react';

const useMousePosition = (ref) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const x = ((ev.clientX - rect.left) / rect.width) * 100;
        const y = ((ev.clientY - rect.top) / rect.height) * 100;
        ref.current.style.setProperty('--mouse-x', `${x}%`);
        ref.current.style.setProperty('--mouse-y', `${y}%`);
      }
    };

    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener('mousemove', updateMousePosition);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mousemove', updateMousePosition);
      }
    };
  }, [ref]);

  return mousePosition;
};

export default useMousePosition;