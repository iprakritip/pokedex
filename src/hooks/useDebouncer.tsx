import React, {useEffect, useState} from 'react';

export default function useDebouncer(value: any, delay: number) {
  // console.log(value);
  const [debouncedValue, setDebouncedValue] = useState('');
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return ()=> clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}
