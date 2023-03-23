import { useEffect, useState } from "react";
import { Car } from "../../server/types";

const useCarsQuery = () => {
  const [cars, setCars] = useState<Car[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("http://localhost:3001/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    data: cars,
    isLoading,
  };
};

export default useCarsQuery;
