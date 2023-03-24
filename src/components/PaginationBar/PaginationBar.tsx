const ITEM_PER_PAGE = 5;

type Props = {
  page: number;
  totalItemCount: number;
  onChange: (page: number) => void;
};

const PaginationBar = ({ page, totalItemCount, onChange }: Props) => {
  const numberOfPages = Math.ceil(totalItemCount / ITEM_PER_PAGE);

  const handlePageClick = (page: number) => () => {
    onChange(page);
  };

  return (
    <div className="flex gap-2 p-2">
      {Array.from(Array(numberOfPages)).map((_, i) => {
        const displayPage = i + 1;
        const isCurrentPage = page === displayPage;

        return (
          <span
            onClick={handlePageClick(displayPage)}
            className={[
              "px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200",
              isCurrentPage ? "border border-gray-700 hover:bg-white" : "",
            ].join(" ")}
          >
            {displayPage}
          </span>
        );
      })}
    </div>
  );
};

export default PaginationBar;
