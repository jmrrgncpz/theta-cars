import { DetailedHTMLProps, SelectHTMLAttributes } from "react";

const Select = ({
  className,
  ...props
}: DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>) => {
  return (
    <select
      placeholder="Select"
      className={["rounded-md drop-shadow-sm px-4 py-2", className].join(" ")}
      {...props}
    />
  );
};

export default Select;
