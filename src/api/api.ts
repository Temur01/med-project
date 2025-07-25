import axios from "axios";
import {
  PopulationDataT,
  PopulationListAgesT,
  PopulationListYearsT,
  PopulationT,
  StatAgeParamsT,
  StatPopulationAgeT,
} from "../types/type";

const instance = axios.create({
  baseURL: "https://bi-phc.ssv.uz/",
});

export const getPopulation = async (
  params: PopulationT
): Promise<PopulationDataT> => {
  const data = await instance.get(
    `stat/population?year=${params.year}&age=${params.ageD.sort}`
  );
  return data.data;
};

export const getPopulationListAges = async (): Promise<PopulationListAgesT> => {
  const data = await instance.get(`stat/list-age`);
  return data.data;
};

export const getPopulationListYear =
  async (): Promise<PopulationListYearsT> => {
    const data = await instance.get(`stat/list-year-age`);
    return data.data;
  };

export const getStatPopulationAge = async (
  params: StatAgeParamsT
): Promise<StatPopulationAgeT> => {
  const data = await instance.get(
    `stat/population-age?year=${params.year}&gender=${params.gender}`
  );
  return data.data;
};
