import React from 'react';

const Logo = ({ className = "w-1 h-1" }) => {
  const cellClass = `${className} bg-white transition-colors duration-300 group-hover:bg-neutral-200`;
  const emptyClass = `${className} bg-transparent`;

  return (
    <div className="grid grid-cols-3 gap-[1px]">
      {/* Row 1 */}
      <div className={cellClass}></div>
      <div className={cellClass}></div>
      <div className={cellClass}></div>
      
      {/* Row 2 */}
      <div className={cellClass}></div>
      <div className={emptyClass}></div>
      <div className={cellClass}></div>
      
      {/* Row 3 */}
      <div className={cellClass}></div>
      <div className={cellClass}></div>
      <div className={cellClass}></div>
      
      {/* Row 4 */}
      <div className={cellClass}></div>
      <div className={emptyClass}></div>
      <div className={emptyClass}></div>
      
      {/* Row 5 */}
      <div className={cellClass}></div>
      <div className={emptyClass}></div>
      <div className={emptyClass}></div>
    </div>
  );
};

export default Logo;

