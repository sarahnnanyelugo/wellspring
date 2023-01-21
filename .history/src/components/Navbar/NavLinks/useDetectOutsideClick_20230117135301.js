import { useState, useEffect } from "react";

/**
 * Hook for handling closing when clicking outside of an element
 * @param {React.node} el
 * @param {boolean} initialState
 */
export const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);
    const onClick = (e) => {
      // If the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
      }
      else
      {
        setIsActive(false);
      }
    };
  useEffect(() => {


    // If the item is active (ie open) then listen for clicks outside
    // if (isActive) {
        // console.log(isActive);
      window.addEventListener("click", onClick);
    // }
    return () => {
      window.addEventListener("click", onClick);
    };
  }, [el]);

  return [isActive, setIsActive];
};
