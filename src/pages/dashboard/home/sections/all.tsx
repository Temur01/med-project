import { useTranslation } from "react-i18next";
import PersonCard from "../../../../components/card/personCard";
import PieChartComponent from "../../../../components/piecharts/population_chart";
import { useFetchQuery } from "../../../../hooks/useFetchQuery";
import {
  getPopulation,
  getPopulationListAges,
  getPopulationListYear,
} from "../../../../api/api";
import { useState } from "react";
import { PopulationDataT } from "../../../../types/type";

const AllInformationSection = () => {
  const { t } = useTranslation();
  const [year, setYear] = useState<number | string>(2009);
  const [age, setAge] = useState<number | string>(0);

  const { data: years } = useFetchQuery({
    keyName: "years",
    queryFunc: getPopulationListYear,
  });

  const { data: ages } = useFetchQuery({
    keyName: "ages",
    queryFunc: getPopulationListAges,
  });

  const fetchPopulation = (): Promise<PopulationDataT> => {
    return getPopulation({ year, age });
  };

  const { data } = useFetchQuery<PopulationDataT>({
    keyName: "population",
    queryFunc: fetchPopulation,
  });

  return (
    <div className="shadow-md p-6 rounded-lg">
      <div className="text-blue-700 text-2xl font-semibold mb-12">
        {t("newsData")}
      </div>

      <div className="flex gap-28">
        <div className="mt-20">
          <PersonCard type="man" stats={data?.data.male} title={t("newsMen")} />
          <PersonCard
            type="woman"
            stats={data?.data.female}
            title={t("newsWomen")}
          />
        </div>

        <div>
          <PieChartComponent
            total={data?.data.total}
            male={data?.data.male}
            female={data?.data.female}
          />
        </div>
        <div>
          <div className="mb-14 px-4 flex items-center gap-4">
            <div className="relative inline-block text-gray-700">
              <select
                onChange={(e) => setYear(e.target.value)}
                className="bg-white border border-gray-300 rounded-2xl text-sm h-9 pl-4 pr-10 appearance-none outline-none"
              >
                {years?.data.map((item: { year: number }) => (
                  <option value={item.year} key={item.year}>
                    {item.year}
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
                className="w-full bg-white border border-gray-300 rounded-2xl text-sm pl-4 pr-10 h-9 appearance-none outline-none"
                aria-label="Age"
                onChange={(e) => setAge(e.target.value)}
              >
                {ages?.data.map((item: { age: string; sort: number }) => (
                  <option value={item.age} key={item.age}>
                    {item.age}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.5 7l5 5 5-5H5.5z" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <PersonCard
              type="man"
              stats={data?.data.total}
              title={t("newsAllCount")}
              measurment={"people"}
            />
            <PersonCard type="woman" stats={30} title={t("newsChild")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInformationSection;
