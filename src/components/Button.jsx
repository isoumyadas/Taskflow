const Button = ({
  children,
  type = "button",
  bgColor = "bg-blue-300",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
