import { useState } from "react";
import AddBtn from "../../../components/button/add";
import SearchBtn from "../../../components/inputs/search";
import Pagination from "../../../components/pagination/pagination";
import AdminLists from "./lists";
import { fakeAdmins } from "../../../data/charts";
import { useTranslation } from "react-i18next";

const AdminPage = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages] = useState<number>(4);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-8 py-4">
        <SearchBtn />
        <AddBtn btnName={t("employeeAdd")} />
      </div>
      <div className="flex-grow">
        <div className="flex flex-col">
          {fakeAdmins && <AdminLists data={fakeAdmins} />}
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

export default AdminPage;
