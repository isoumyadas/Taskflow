import { forwardRef } from "react";
const Input = forwardRef(
  ({ label, type = "text", className = "", ...props }, ref) => {
    return (
      <div>
        {label && <label className="">{label}</label>}

        <input type={type} className={`${className}`} ref={ref} {...props} />
      </div>
    );
  }
);

export default Input;
