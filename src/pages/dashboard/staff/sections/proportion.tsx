import PieChartOfService from "../../../../components/piecharts/service_chart";
import { staff, staff_stat } from "../../../../data/charts";

type StatT = {
  id: number;
  name: string;
  percentage: string;
  value: number;
};

const Proportion = () => {
  const changeTextShape = (text: string): string => {
    const words = text.split(" ");
    const lastWord = words.pop();
    return `${words.join(" ")}\n${lastWord}`;
  };

  const chooseColor = (id: number): string => {
    if (id === 1) return "bg-[#636FDE]";
    else if (id === 2) return "bg-[#B2B7C2]";
    else return "bg-[#05C0DA]";
  };

  return (
    <div className="shadow p-10 rounded-lg">
      <div className="flex justify-end">
        <div className="relative inline-block text-gray-700 me-4">
          <select
            className="bg-white border border-gray-300 rounded-2xl text-sm 
            h-9 pl-4 pr-10 
             appearance-none outline-none"
          >
            <option value={"Возраст"}>Ташкент</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.5 7l5 5 5-5H5.5z" />{" "}
            </svg>
          </div>
        </div>
        <div className="relative inline-block text-gray-700 ">
          <select
            className="bg-white border border-gray-300 rounded-2xl text-sm 
             h-9 pl-4 pr-10 
             appearance-none outline-none"
          >
            {[...Array(3)].map((_, index) => (
              <option key={index} value={2023 - index}>
                {2023 - index}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.5 7l5 5 5-5H5.5z" />{" "}
            </svg>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-32">
        <PieChartOfService
          data={staff}
          title="работников"
          type={1}
          people={"75 000"}
        />
        <div className="p-4">
          {staff_stat.map((item: StatT) => (
            <div key={item.id} className="flex items-center mb-4">
              <div
                className={`w-12 h-12 rounded-full ${chooseColor(
                  item.id
                )} text-white flex items-center justify-center mr-4`}
              >
                <span className="text-sm">{item.percentage}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold">{item.value}</span>
                <span className="text-sm">{changeTextShape(item.name)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proportion;
