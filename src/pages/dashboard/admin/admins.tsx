import { Pencil, Trash2 } from "lucide-react";
import { AdminRow } from "../../../types/type";

type Props = {
  admin: AdminRow;
};

const Admins = ({ admin }: Props) => {
  return (
    <tr key={admin.id} className="cursor-pointer">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {admin.id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap flex items-center gap-3">
        <img
          className="w-8 h-8 rounded-full"
          src="https://www.shutterstock.com/image-vector/black-woman-smiling-portrait-vector-600nw-2281497689.jpg"
          alt="Rounded avatar"
        />
       <div className="text-sm text-gray-500">
       {admin.username}
        <br />
        <span className="font-light text-xs">{admin.email}</span>
       </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {admin.time}
      </td>
      <td className="px-6 py-4 text-right text-sm font-medium flex items-center gap-2 ">
        <button
          className="p-2.5 bg-indigo-200 rounded-full text-gray-800 hover:text-gray-950 hover:bg-indigo-300"
          type="button"
        >
          <Trash2 size={18} />
        </button>
        <button
          className="p-2.5 bg-indigo-200 rounded-full text-gray-800 hover:text-gray-950 hover:bg-indigo-300"
          type="button"
        >
          <Pencil size={18} />
        </button>
      </td>
    </tr>
  );
};

export default Admins;
