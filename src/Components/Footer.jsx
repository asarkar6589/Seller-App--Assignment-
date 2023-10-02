import React from "react";
import { useSearchParams } from "react-router-dom";

const Footer = ({
  currentPage,
  setCurrentPage,
  recordsPerPage,
  lastIndex,
  firstIndex,
  records,
  numberOfPages,
  number,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
      setSearchParams({ page: `${currentPage + 1}` });
    }
  };

  const prePage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
      setSearchParams({ page: `${currentPage - 1}` });
    }
  };

  const changeCurrentPage = (id) => {
    setCurrentPage(id);
    setSearchParams({ page: `${id}` });
  };
  return (
    <div className="bg-slate-400 shadow-slate-300 w-full h-full mx-auto rounded-xl p-2 flex gap-10 align-center shadow-md shadow-gray-600 mt-10">
      <div className="w-full mt-1">
        {currentPage} of {numberOfPages}
      </div>

      <div className="w-full ml-60 flex justify-center">
        <button
          className="bg-white text-gray-700 mr-2 ml-2 w-9 h-9 rounded-xl"
          onClick={prePage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        {number.map((i, idx) => {
          return (
            <button
              key={idx}
              className="mr-2 ml-2 w-9 h-9 rounded-xl bg-white text-gray-700"
              onClick={() => changeCurrentPage(i)}
            >
              {i}
            </button>
          );
        })}
        <button
          className="bg-white text-gray-700 mr-2 ml-2 w-9 h-9 rounded-xl"
          onClick={nextPage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Footer;
