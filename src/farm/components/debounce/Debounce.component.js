// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

function DebounceComponent(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  },
    [value, delay]
  );

  return debouncedValue;
}

export default DebounceComponent;