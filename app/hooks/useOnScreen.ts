import React from 'react';

/**
 * A custom hook to detect if an element is visible within the viewport.
 * @param {React.RefObject<HTMLElement>} ref - A React reference to the target element.
 * @param {number} threshold - The ratio of the target's visibility within the viewport (default is 0.8).
 * @param {number} delay - Delay (in milliseconds) before considering the element visible (default is 100ms).
 * @returns {boolean} - `true` if the element is visible, `false` otherwise.
 *
 * @example
 * // Usage in a component:
 * // const elementRef = useOnScreen(ref, 0.8, 100);
 *
 * // In your component's JSX:
 * // <div ref={elementRef}> <!-- This is the element you want to detect visibility for -->
 * //   <!-- Your content here -->
 * // </div>
 * // <!-- The isVisible value will be `true` when this element is 80% visible in the viewport. -->
 */

const useOnScreen = (
  ref: React.RefObject<HTMLElement>,
  threshold: number = 0.8,
  delay: number = 100
): boolean => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const newEntry = entry as IntersectionObserverEntry;
        // detect if element is visible with delay
        if (newEntry.isIntersecting) {
          timeout = setTimeout(() => {
            setIsVisible(true);
          }, delay);
        } else {
          if (timeout) {
            clearTimeout(timeout);
          }
          setIsVisible(false);
        }
      },
      {
        threshold,
      }
    );

    const currentElement = ref.current as Element;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      observer.unobserve(currentElement);
    };
  }, [delay, ref, threshold]);

  return isVisible;
};

export default useOnScreen;
