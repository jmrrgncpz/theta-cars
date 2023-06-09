import { Car } from "@/types";
import { useEffect, useState } from "react";

const useCarsQuery = (page: number) => {
  const [cars, setCars] = useState<Car[]>();
  const [totalItemCount, setTotalItemCount] = useState<number>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/cars?_page=${page}&_limit=5`)
      .then((res) => {
        const xTotalCount = res.headers.get("X-Total-Count") ?? undefined;
        if (xTotalCount) {
          setTotalItemCount(parseInt(xTotalCount));
        }

        return res.json();
      })
      .then((data: Car[]) => {
        setCars(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page]);

  return {
    data: {
      items: cars,
      totalItemCount,
    },
    isLoading,
  };
};

export default useCarsQuery;
