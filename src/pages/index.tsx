import { Search, SearchValue, CarListItem } from "@/components";
import { useCarsQuery } from "@/hooks";
import Head from "next/head";
import { useState } from "react";
import { Car } from "../../server/types";

export default function Home() {
  const [searchResult, setSearchResult] = useState<Car[]>();

  const { data: cars, isLoading } = useCarsQuery();

  const handleSearchValueChange = (value: SearchValue) => {
    if (!cars) {
      return [];
    }

    const searchResult = cars.filter(
      (c) => c[value.filter as keyof Car] == value.searchTerm
    );

    setSearchResult(searchResult);
  };

  const renderCarList = () => {
    const carList = searchResult ?? cars;
    if (!carList || carList.length === 0) {
      return <span>Nothing to see here</span>;
    }

    return carList.map((carData) => (
      <CarListItem key={carData.vin} {...carData} />
    ));
  };

  return (
    <>
      <Head>
        <title>Theta Cars</title>
        <meta name="description" content="Hypothetical Car listing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full flex justify-center items-center">
        <div className="max-w-7 flex flex-col">
          <div className="py-2 px-4">
            <Search onChange={handleSearchValueChange} />
          </div>
          <div className="gap-4 px-4 flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {isLoading && (
              <span className="text-gray-400 font-semibold">Loading...</span>
            )}

            {renderCarList()}
          </div>
        </div>
      </main>
    </>
  );
}
