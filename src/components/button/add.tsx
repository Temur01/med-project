import { FC } from "react";
import { Plus } from "lucide-react";

type Props = {
  btnName: string;
};

const AddBtn: FC<Props> = ({ btnName }) => {
  return (
    <button
      type="button"
      className="flex items-center gap-2 py-2.5 px-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
    >
      <Plus size={18} />
      Добавить {btnName}
    </button>
  );
};

export default AddBtn;
