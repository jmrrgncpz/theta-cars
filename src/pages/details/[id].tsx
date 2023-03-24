import { formatPrice } from "@/utils/number";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Head from "next/head";
import { Car } from "../../../server/types";

const Details = ({ data }: { data: Car }) => {
  const { img, vin, model, make, year, price } = data;
  return (
    <>
      <Head>
        <title>Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="max-w-lg mx-auto m-10 flex drop-shadow">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 md:flex-row">
              <figure className="flex-1">
                <img src={data.img} />
              </figure>
              <div className="flex flex-1 flex-col justify-center md:ml-4 mx-5">
                <span className="text-sm">{vin}</span>
                <h1 className="text-2xl">
                  {year} {model} | {make}
                </h1>
                <span className="text-lg font-bold">{formatPrice(price)}</span>
              </div>
            </div>
            <div className="mx-5">
              <h2 className="font-semibold text-lg">Ownership</h2>
              <ul className="list-disc">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>Nunc pretium odio ac lacinia pulvinar.</li>
                <li>
                  Donec bibendum tortor posuere, lacinia metus in, consectetur
                  augue.
                </li>
              </ul>
            </div>
            <div className="mx-5">
              <h2 className="font-semibold text-lg">History</h2>
              <ul className="list-disc">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>Nunc pretium odio ac lacinia pulvinar.</li>
                <li>
                  Donec bibendum tortor posuere, lacinia metus in, consectetur
                  augue.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Details;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await (
    await fetch("http://localhost:3001/cars/" + context.query.id)
  ).json();

  return {
    props: {
      data,
    },
  };
};
