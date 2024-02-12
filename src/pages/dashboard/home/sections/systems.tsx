import BarChartOfCategory from "../../../../components/barchart/category";
import { medicalCentres } from "../../../../data/charts";

const MedicalSystem = () => {
  return (
    <div className="shadow-md p-6 pb-10 rounded-lg">
      <div className="text-2xl text-blue-700 font-semibold">
        Общее количество медицинских учреждений на 10 000 населения
      </div>
      <div className="text-center mt-4 text-xl">
        Национальный показатель:{" "}
        <span className="text-green-700 font-semibold">98 % </span>
      </div>
      <div className="mb-2 px-4 flex items-center gap-4 justify-end">
        <div className="relative inline-block text-gray-700">
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
      <BarChartOfCategory data={medicalCentres} />
    </div>
  );
};

export default MedicalSystem;
