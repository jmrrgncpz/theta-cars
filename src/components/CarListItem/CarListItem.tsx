import { formatPrice } from "@/utils/number";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Car } from "../../types";
import Card from "../Card";

type Props = Car & {
  _container?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
};

const CarListItem = ({
  _container,
  img,
  make,
  model,
  price,
  vin,
  year,
}: Props) => {
  const { className: containerClassName, ...containerProps } = _container ?? {};

  return (
    <Card
      className={["flex gap-4", containerClassName].join(" ")}
      {...containerProps}
    >
      <figure className="w-48 h-48 flex justify-center items-center">
        <img src={img} className="w-full" />
      </figure>
      <div className="flex flex-col flex-1 py-2 pr-4 justify-center">
        <span className="text-sm">{vin}</span>
        <span className="text-2xl">
          {year} {model} | {make}
        </span>
        <span className="text-lg font-bold">{formatPrice(price)}</span>
      </div>
    </Card>
  );
};

export default CarListItem;
