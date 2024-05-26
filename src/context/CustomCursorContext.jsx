import React, { createContext, useRef, useCallback, useEffect } from "react";

const CustomCursorContext = createContext();

export const CustomCursorProvider = ({ children }) => {
  const cursor = useRef(null);
  const requestRef = useRef(null);
  const previousTimeRef = useRef(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const speed = 0.2; // The speed of the cursor

  const changePosition = useCallback((e) => {
    targetPosition.current = { x: e.clientX, y: e.clientY };
  }, []);

  const animate = (time) => {
    if (previousTimeRef.current != null) {
      // Lerp calculation
      currentPosition.current.x +=
        (targetPosition.current.x - currentPosition.current.x) * speed;
      currentPosition.current.y +=
        (targetPosition.current.y - currentPosition.current.y) * speed;

      // Update cursor position
      if (cursor.current) {
        cursor.current.style.top = `${currentPosition.current.y}px`;
        cursor.current.style.left = `${currentPosition.current.x}px`;
      }
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    document.addEventListener("mousemove", changePosition);
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener("mousemove", changePosition);
      cancelAnimationFrame(requestRef.current);
    };
  }, [changePosition]);

  const enlargeCursor = useCallback(() => {
    if (cursor.current) {
      cursor.current.classList.add("cursor-enlarge");
    }
  }, []);

  const shrinkCursor = useCallback(() => {
    if (cursor.current) {
      cursor.current.classList.remove("cursor-enlarge");
    }
  }, []);

  return (
    <CustomCursorContext.Provider
      value={{ cursor, enlargeCursor, shrinkCursor }}
    >
      <div className="cursor-style" ref={cursor}></div>
      {children}
    </CustomCursorContext.Provider>
  );
};

export const useCustomCursor = () => React.useContext(CustomCursorContext);
