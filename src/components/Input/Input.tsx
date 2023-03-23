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
      className={[
        "px-4 py-2 text-gray-100 rounded-md drop-shadow placeholder-gray-300 font-normal",
        className,
      ].join(" ")}
      {...props}
    />
  );
};

export default Input;
