import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const Button = ({
  children = 'Button',
  className,
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      className={[
        "bg-gray-700 hover:bg-gray-800 text-white font-semibold px-4 py-2 rounded-md drop-shadow-sm",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
