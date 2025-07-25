export type ActiveShapeType = {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: {
    name: string;
    value: number;
  };
  percent: number;
  value: number;
};

export type BarShapeType = {
  name: string;
  Результат: number;
  Natija: number;
  Result: number;
};
export type AdultDataItem = {
  name: string;
  Мужчины: number;
  Женщины: number;
};

export type TrainingDataItemT = {
  name: string;
  Технический: number;
  Профессиональный: number;
};

export type PieChartT = {
  value: number;
  color: string;
};

export type DataRow = {
  id: number;
  dateAdded: string;
  year: number;
};

export type AdminRow = {
  id: number;
  username: string;
  email: string;
  time: string;
};

export type Language = {
  code: string;
  name: string;
  flag: string;
};

export type AgeT = {
  age: string;
  sort: number;
};

export type PopulationT = {
  year: number | string;
  ageD: AgeT;
};

export type PopulationAgeT = {
  year: string;
  gender: string;
};

export type ReturningDataFromBackendT = {
  code: number;
  success: boolean;
};

export type PopulationDataT = ReturningDataFromBackendT & {
  data: {
    year: number;
    male: number;
    female: number;
    total: number;
    "0_4"?: number;
  };
};

export type PopulationListYearsT = ReturningDataFromBackendT & {
  data: {
    year: number;
    sort: number;
  }[];
};

export type PopulationListAgesT = ReturningDataFromBackendT & {
  data: {
    sort: number;
    age: string;
  }[];
};

export type StatPopulationAgeT = ReturningDataFromBackendT & {
  data: {
    age: string;
    total: string;
    data: [];
  };
};

export type genderT = {
  name: string;
  name_uz: string;
  name_ru: string;
  id: number;
  code: string;
};

export type StatAgeParamsT = {
  gender: string;
  year: number;
};
