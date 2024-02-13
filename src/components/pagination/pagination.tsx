import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  return (
    <div className="flex justify-center items-center space-x-1">
      <button
        className={`w-11 h-11 flex justify-center items-center rounded-md border ${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-400 hover:text-gray-200"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
       <ChevronLeft size={24} />
      </button>

      {range(1, totalPages).map((number) => (
        <button
          key={number}
          className={`w-11 h-11 flex justify-center items-center rounded-md border text-lg ${
            currentPage === number
              ? "text-indigo-700 border-indigo-700 border-2 font-semibold"
              : "hover:bg-gray-200"
          }`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}

      <button
        className={`w-11 h-11 flex justify-center items-center rounded-md border ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-400 hover:text-gray-200"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
             <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Pagination;
