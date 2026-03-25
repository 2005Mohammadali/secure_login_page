import React, { useEffect } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
    
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === "success" ? "bg-green-500/50" : "bg-red-800/60";

  return (
    <div className={`p-3 fixed top-5 right-5 z-50 flex items-center gap-5 font-medium shadow-lg rounded-lg overflow-hidden animate-slide-in text-white ${bgColor}`}>
      <div className="">
        {type === "success" ? "✓" : "⚠"}
      </div>
      <div className="">
        {message}
      </div>
      <button onClick={onClose} className="hover:bg-black/40 hover:rounded-full px-3 py-2 cursor-pointer">
        ✕
      </button>
    </div>
  );
};

export default Toast;