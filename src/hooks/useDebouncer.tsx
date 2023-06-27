import React, {useEffect, useState} from 'react';

export default function useDebouncer(value: any, delay: number) {
  // console.log(value);
  const [debouncedValue, setDebouncedValue] = useState('');
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      // console.log('debouncedValue');
    }, delay);
    return ()=> clearTimeout(handler);
  }, [value, delay]);
  // console.log('end',debouncedValue);
  return debouncedValue;
}
