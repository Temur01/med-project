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