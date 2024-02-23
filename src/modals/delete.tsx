import React from "react";
import { Frown } from "lucide-react";
import { useTranslation } from "react-i18next";

type Props = {
  setOpen: (open: boolean) => void;
};

const DeleteModal: React.FC<Props> = ({ setOpen }) => {
  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="relative p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="flex justify-center mb-4">
          <Frown size={48} color="#F32E2E" />
        </div>
        <div className="text-center">
          <h3 className="text-lg leading-4 font-medium text-gray-900">
            {t("deleteModalText")}
          </h3>
          <div className="mt-1">
            <p className="text-sm text-gray-500">Алексей Юшков?</p>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button
              id="delete-button"
              className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {t("deleteBtn")}
            </button>
            <button
              onClick={() => setOpen(false)}
              id="cancel-button"
              className="px-4 py-2 bg-white text-base font-medium text-gray-700 rounded-md border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {t("cancelBtn")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
