import PersonCard from "../../../../components/card/personCard";
import PieChartComponent from "../../../../components/piecharts/population_chart";

const AllInformationSection = () => {
  return (
    <div className="shadow-md p-6 rounded-lg">
      <div className="text-blue-700 text-2xl font-semibold mb-12">
        Общие данные по населению Республики узбекистан
      </div>

      <div className="flex gap-28">
        <div className="mt-20">
          <PersonCard type="man" stats={55} title="МУЖЧИНЫ" />
          <PersonCard type="woman" stats={45} title="Женщины" />
        </div>

        <div>
          <PieChartComponent />
        </div>

        <div>
          <div className="mb-14 px-4 flex items-center gap-4">
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
            <div className="relative inline-block text-gray-700">
              <select
                className="bg-white border border-gray-300 rounded-2xl text-sm 
             h-9 pl-4 pr-10 
             appearance-none outline-none"
              >
                <option value={"Возраст"}>Возраст</option>
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

          <div>
            <PersonCard
              type="man"
              stats={30}
              title="Общее количество"
              measurment={"people"}
            />
            <PersonCard type="woman" stats={30} title="Дети 0-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInformationSection;
