import { DetailedHTMLProps, HTMLAttributes } from "react";

const Card = ({
  children,
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div className={["bg-white drop-shadow-md rounded-lg", className].join(" ")} {...props}>
      {children}
    </div>
  );
};

export default Card;
