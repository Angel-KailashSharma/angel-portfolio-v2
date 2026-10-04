"use client";

import { useEffect, useState } from "react";

export default function CursorTrail() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] h-2.5 w-2.5 rounded-full bg-[#8b7cf6] shadow-lg shadow-purple-300/50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div
        className="pointer-events-none fixed z-[9998] h-8 w-8 rounded-full border border-[#8b7cf6]/30"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}