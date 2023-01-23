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
      
    };
  useEffect(() => {


    // If the item is active (ie open) then listen for clicks outside
    if (isActive) {
      window.addEventListener("click", onClick);
    }

      else 
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [el]);
  console.log(isActive, initialState);

  return [isActive, setIsActive];
};