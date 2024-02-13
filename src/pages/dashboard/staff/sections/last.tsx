import BarChartOfCategory from "../../../../components/barchart/category";
import { medicalCentres } from "../../../../data/charts";

const LastSection = () => {
  return (
    <div className="shadow-md p-6 pb-10 rounded-lg">
      <div className="text-2xl text-blue-700 font-semibold w-1/2 leading-6">
        Доля женщин мед. техников набранных и обученных
      </div>
      <div className="mb-4 flex items-center gap-4 justify-between">
        <div className="mt-4 text-xl">
          Национальный показатель:{" "}
          <span className="text-xl text-green-500 font-semibold"> 30%</span>
        </div>
        <div>
          <div className="relative inline-block text-gray-700 me-4">
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
      </div>
      <BarChartOfCategory data={medicalCentres} type="error" />
    </div>
  );
};

export default LastSection;
