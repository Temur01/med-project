import { FC, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { AdultDataItem, TrainingDataItemT } from "../../types/type";

type Props = {
  data: AdultDataItem[] | TrainingDataItemT[];
  type?: number;
  firstKey: string;
  secondKey: string;
};

const SimpleBarChart: FC<Props> = ({ data, type, firstKey, secondKey }) => {
  const [chartWidth, setChartWidth] = useState<number>(window.innerWidth - 400);

  useEffect(() => {
    const handleResize = () => {
      setChartWidth(window.innerWidth - 400);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <BarChart
      width={chartWidth}
      height={380}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="name" axisLine={false} tickMargin={10} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar
        dataKey={firstKey}
        fill={!type ? "#636FDE" : "#8A63DE"}
        radius={[10, 10, 10, 10]}
      />
      <Bar
        dataKey={secondKey}
        fill={!type ? "#DE6379" : "#DEAD63"}
        radius={[10, 10, 10, 10]}
      />
    </BarChart>
  );
};

export default SimpleBarChart;
