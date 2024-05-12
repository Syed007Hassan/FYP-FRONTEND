export interface ToastProps {
  message: string;
  type: AlertColor;
}

import React, { useEffect, useState } from "react";
import Alert, { AlertColor } from "@mui/material/Alert";

const Toast = ({ message, type }: ToastProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    console.log("Toast mounted");
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // Hide after 5 seconds

    return () => clearTimeout(timer); // Clear the timer if the component is unmounted
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-20 right-5 w-72 z-50">
      <Alert severity={type} onClose={() => setVisible(false)}>
        {message}
      </Alert>
    </div>
  );
};

export default Toast;
