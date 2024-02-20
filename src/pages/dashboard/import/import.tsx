import React, { useState } from "react";
import ImportLists from "./lists";
import { fakeData } from "../../../data/charts";
import Pagination from "../../../components/pagination/pagination";
import AddBtn from "../../../components/button/add";
import SearchBtn from "../../../components/inputs/search";

const ImportPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages] = useState<number>(4);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="flex flex-col">
      <div>
        <div className="flex justify-between items-center px-8 py-4">
          <SearchBtn />
          <AddBtn btnName="сотрудника" />
        </div>
        <div className="font-semibold mb-3 ms-8">Импортированные данные</div>
      </div>
      <div className="flex-grow">
        <div className="flex flex-col">
          {fakeData && <ImportLists data={fakeData} />}
        </div>
      </div>
      <div className="flex mt-12 justify-center items-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ImportPage;
