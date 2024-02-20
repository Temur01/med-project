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
  id:number,
  username:string,
  email:string,
  time:string
}

export type Language = {
  code: string;
  name: string;
  flag: string;
};