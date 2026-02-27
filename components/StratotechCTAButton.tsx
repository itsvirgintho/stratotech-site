import React from "react";

interface StratotechCTAButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
}

export default function StratotechCTAButton({ variant = "primary", children, onClick }: StratotechCTAButtonProps) {
  const styles = {
    primary: {
      backgroundColor: "#FF4A00",
      color: "white",
      fontSize: "18px",
      fontWeight: "bold",
      padding: "15px 30px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    },
    secondary: {
      backgroundColor: "transparent",
      color: "white",
      fontSize: "18px",
      fontWeight: "bold",
      padding: "15px 30px",
      border: "2px solid white",
      borderRadius: "8px",
      cursor: "pointer",
    },
  };

  return (
    <button style={variant === "primary" ? styles.primary : styles.secondary} onClick={onClick}>
      {children}
    </button>
  );
}