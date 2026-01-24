import React from 'react';
import useMousePosition from '../hooks/useMousePosition';

// Component: Custom Cursor (反色光标)
const CustomCursor = () => {
  const { x, y } = useMousePosition();
  return (
    <div 
      className="fixed w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-difference bg-white hidden md:block"
      style={{ 
        left: x, 
        top: y,
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.2s, height 0.2s' // Smooth resize if we added hover states
      }} 
    />
  );
};

export default CustomCursor;

