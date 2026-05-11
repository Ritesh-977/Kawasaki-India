import React from 'react';

/**
 * Divider – a thin green horizontal separator used between sections.
 * In the Figma design there's a subtle section divider.
 */
const Divider = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '4px',
        background: 'linear-gradient(90deg, var(--kawasaki-green) 0%, rgba(105,190,40,0) 100%)',
      }}
    />
  );
};

export default Divider;
