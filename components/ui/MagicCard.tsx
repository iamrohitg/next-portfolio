"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
  glowClassName?: string;
}

export const MagicCard: React.FC<MagicCardProps> = ({
  children,
  className = "",
  glowClassName = "",
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={`pointer-events-none absolute -inset-px opacity-0 transition duration-300 ${glowClassName}`}
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
          opacity,
        }}
      />
      {children}
    </div>
  );
};
