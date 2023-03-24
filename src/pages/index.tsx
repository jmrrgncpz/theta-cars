import { Search, SearchValue, CarListItem, PaginationBar } from "@/components";
import { useCarsQuery } from "@/hooks";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Car } from "../../server/types";

export default function Home() {
  const [searchResult, setSearchResult] = useState<Car[]>();
  const [page, setPage] = useState(1);
  const { data, isLoading } = useCarsQuery(page);
  const { items, totalItemCount } = data;

  const handleSearchValueChange = (value: SearchValue) => {
    if (!items) {
      return [];
    }

    const searchResult = items.filter(
      (c) => c[value.filter as keyof Car] == value.searchTerm
    );

    setSearchResult(searchResult);
  };

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const renderCarList = () => {
    const carList = searchResult ?? items;
    if (!carList || carList.length === 0) {
      return <span>Nothing to see here</span>;
    }

    return carList.map((carData) => (
      <Link href={`/details/${carData.id}`}>
        <CarListItem key={carData.vin} {...carData} />
      </Link>
    ));
  };

  return (
    <>
      <Head>
        <title>Theta Cars</title>
        <meta name="description" content="Hypothetical Car listing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full flex justify-center items-center min-w-sm">
        <div className="max-w-7 flex flex-col">
          <div className="py-2 px-4">
            <Search onChange={handleSearchValueChange} />
          </div>

          <PaginationBar
            onChange={handlePageChange}
            totalItemCount={totalItemCount ?? 0}
            page={page}
          />

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
