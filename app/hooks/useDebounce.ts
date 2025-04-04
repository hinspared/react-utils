import { useLayoutEffect, useMemo, useRef } from "react";

const debounce = <T extends (...args: Parameters<T>) => void>(func: T, delay: number) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>): void => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const useDebounce = <T extends (...args: Parameters<T>) => void>(callback: T, delay = 500) => {
  const callbackRef = useRef(callback);

  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  return useMemo(
    () => debounce((...args: Parameters<T>) => callbackRef.current(...args), delay),
    [delay],
  );
};

export default useDebounce;
