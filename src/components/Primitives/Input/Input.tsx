import { DetailedHTMLProps, InputHTMLAttributes } from "react";

const Input = ({
  className,
  ...props
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return (
    <input
      type='search'
      className={[
        "px-4 py-2 text-gray-700 rounded-md drop-shadow-sm placeholder-gray-300 font-normal",
        className,
      ].join(" ")}
      {...props}
    />
  );
};

export default Input;
