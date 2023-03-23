import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Car } from "../../../server/types";
import Card from "../Card";

type Props = Car & {
  _container?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
};

const CarListItem = ({ _container, img, make, model, price, vin }: Props) => {
  const { className: containerClassName, ...containerProps } = _container ?? {};
  return (
    <Card
      className={["flex", containerClassName].join(" ")}
      {...containerProps}
    >
      <figure className="w-48 h-48">
        <img src={img} className="w-full" />
      </figure>
      <div className="flex flex-col flex-1 py-2 pr-4">
        <span className="text-sm">{vin}</span>
        <span className="text-2xl">
          {model} | {make}
        </span>
        <span className="text-lg font-bold">{price}</span>
      </div>
    </Card>
  );
};

export default CarListItem;
