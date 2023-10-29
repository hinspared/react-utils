import React from 'react';

/**
 * A custom hook that invokes a callback when a click event occurs outside of a specified element.
 * @param {() => void} callback - The function to be invoked when a click event occurs outside the element.
 * @returns {React.RefObject<HTMLElement>} - A React reference to the element outside of which the callback is triggered.
 *
 * @example
 * // Usage in a component:
 * // const elementRef = useClickOutside(callback);
 *
 * // In your component's JSX:
 * // <div ref={elementRef}> <!-- This is the element outside of which the callback will be triggered -->
 * //   <!-- Your content here -->
 * // </div>
 */

export default function useClickOutside(
  callback: () => void
): React.RefObject<HTMLElement> {
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Element;
      // Check if the target has the "hidden" class
      if (target.classList.contains('hidden')) return;
      if (ref.current && !ref.current.contains(target)) {
        // Invoke the callback when a click occurs outside the element
        callback();
      }
    };

    // Add a click event listener to the entire document
    document.addEventListener('click', handleClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [callback, ref]);

  return ref;
}
