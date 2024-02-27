import { useTranslation } from "react-i18next";
import PersonCard from "../../../../components/card/personCard";
import PieChartComponent from "../../../../components/piecharts/population_chart";
import { useFetchQuery } from "../../../../hooks/useFetchQuery";
import {
  getPopulation,
  getPopulationListAges,
  getPopulationListYear,
} from "../../../../api/api";
import { Fragment, useState } from "react";
import { PopulationDataT } from "../../../../types/type";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const AllInformationSection = () => {
  const { t } = useTranslation();
  const [year, setYear] = useState<number | string>(2023);
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
            <Listbox value={year} onChange={setYear} >
              <div className="relative mt-1 w-28">
                <Listbox.Button className="w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{year}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {years?.data.map((item: { year: number }) => (
                      <Listbox.Option
                        key={item.year}
                        value={item.year}
                        className={({ active }) =>
                          `relative cursor-default select-none py-1 pl-8 pr-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {item.year} 
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-amber-600">
                                <CheckIcon
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
            <Listbox value={age} onChange={setAge} >
              <div className="relative mt-1 w-28">
                <Listbox.Button className="w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{age}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {ages?.data.map((item: { age: string; sort: number }) => (
                      <Listbox.Option
                        key={item.age}
                        value={item.age}
                        className={({ active }) =>
                          `relative cursor-default select-none py-1 pl-8 pr-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {item.age} 
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-amber-600">
                                <CheckIcon
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
            {/* <select
              className="w-full bg-white border border-gray-300 rounded-2xl text-sm pl-4 pr-10 h-9 appearance-none outline-none"
              aria-label="Age"
              onChange={(e) => setAge(e.target.value)}
            >
              {ages?.data.map((item: { age: string; sort: number }) => (
                <option value={item.age} key={item.age}>
                  {item.age}
                </option>
              ))}
            </select> */}
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
