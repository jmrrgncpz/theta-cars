import Head from "next/head";

const Canvas = () => {
  return (
    <>
      <Head>
        <title>Canvas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen p-10 bg-gray-100 flex justify-center align-center">
        <div className="bg-white w-full h-full flex justify-center items-center drop-shadow-lg rounded-lg">
        </div>
      </main>
    </>
  );
};

export default Canvas;
