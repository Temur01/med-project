import { useTranslation } from "react-i18next";
import BarChartOfCategory from "../../../../components/barchart/category";
import { genderD } from "../../../../data/charts";
import {
  getPopulationListYear,
  getStatPopulationAge,
} from "../../../../api/api";
import { useFetchQuery } from "../../../../hooks/useFetchQuery";
import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import {
  BarShapeType,
  StatPopulationAgeT,
  genderT,
} from "../../../../types/type";
import Cookies from "js-cookie";

const Category = () => {
  const { t } = useTranslation();
  const [year, setYear] = useState<number>(2023);
  const [gender, setGender] = useState<genderT>(genderD[0]);
  const [newFormatData, setNewFormatData] = useState<BarShapeType[]>([]);

  const { data: years } = useFetchQuery({
    keyVal: {
      name: "years",
      id: year,
    },
    queryFunc: getPopulationListYear,
  });

  const fetchStatAge = (): Promise<StatPopulationAgeT> => {
    return getStatPopulationAge({ year, gender: gender.code });
  };

  const { data } = useFetchQuery<StatPopulationAgeT>({
    keyVal: { name: "populationAge", id: `${year}-${gender.code}` },
    queryFunc: fetchStatAge,
  });

  const newFormatSenderDataFunc = (items: BarShapeType[] | undefined) => {
    if (items) {
      const updatedData = items.map((item) => ({
        name:
          item.name +
          ` ${
            Cookies.get("i18next") === "uz"
              ? " yosh"
              : Cookies.get("i18next") === "ru"
              ? " годa"
              : " year"
          }`,
        Результат: item.Результат,
      }));
      setNewFormatData(updatedData);
    }
  };

  useEffect(() => {
    newFormatSenderDataFunc(data?.data?.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, Cookies.get("i18next")]);

  return (
    <div className="shadow-md px-6 py-2 rounded-lg">
      <div className="text-2xl text-blue-700 font-semibold">
        {t("newsAgeCategory")}
      </div>
      <div className="mb-12 px-4 flex items-center gap-4 justify-end">
        <Listbox value={year} onChange={setYear}>
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
              <Listbox.Options className="absolute mt-1 max-h-20 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {years?.data.map((item: { year: number }) => (
                  <Listbox.Option
                    key={item.year}
                    value={item.year}
                    className={({ active }) =>
                      `relative cursor-default select-none py-1 pl-8 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
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
                            <CheckIcon className="h-4 w-4" aria-hidden="true" />
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
        <Listbox value={gender} onChange={setGender}>
          <div className="relative mt-1 w-28">
            <Listbox.Button className="w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">
                {Cookies.get("i18next") === "ru"
                  ? gender.name_ru
                  : Cookies.get("i18next") === "uz"
                  ? gender.name_uz
                  : gender.name}
              </span>
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
              <Listbox.Options className="absolute mt-1 max-h-20 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {genderD.map((item: genderT) => (
                  <Listbox.Option
                    key={item.name}
                    value={item}
                    className={({ active }) =>
                      `relative cursor-default select-none py-1 pl-8 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
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
                          {item.name_ru}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-amber-600">
                            <CheckIcon className="h-4 w-4" aria-hidden="true" />
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
      </div>
      <BarChartOfCategory data={newFormatData} type="light-blue" />
    </div>
  );
};

export default Category;
