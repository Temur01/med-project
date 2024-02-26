import axios from "axios";
import { PopulationAgeT, PopulationT } from "../types/type";

const instance = axios.create({
  baseURL: "https://bi-phc.ssv.uz/",
});

export const getPopulation = async (params: PopulationT) => {
  return await instance.get(
    `stat/population?year=${params.year}&age=${params.age}`,
    {
      headers: {
        Authentication: `Bearer`,
      },
    }
  );
};

export const getPopulationAge = async (params: PopulationAgeT) => {
  return await instance.get(
    `stat/population-age?year=${params.year}&gender=${params.gender}`
  );
};

export default instance;
