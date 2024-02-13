import { Fragment, useState } from "react";
import { DataRow } from "../../../types/type";

type Props = {
  item: DataRow;
};

const AccordionsList = ({ item }: Props) => {
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(null);

  const handleAccordionClick = (id: number) => {
    if (openAccordionId === id) {
      setOpenAccordionId(null);
    } else {
      setOpenAccordionId(id);
    }
  };
  return (
    <Fragment key={item.id}>
      <tr
        key={item.id}
        onClick={() => handleAccordionClick(item.id)}
        className="cursor-pointer"
      >
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.id}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {item.dateAdded}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {item.year}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${
              openAccordionId === item.id ? "transform rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </td>
      </tr>
      {openAccordionId === item.id && (
        <tr>
          <td colSpan={4} className="px-6 py-4">
            Hello World
          </td>
        </tr>
      )}
    </Fragment>
  );
};

export default AccordionsList;
