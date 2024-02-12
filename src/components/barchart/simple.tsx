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
import { AdultDataItem } from "../../types/type";

type Props = {
  data: AdultDataItem[];
};

const SimpleBarChart: FC<Props> = ({ data }) => {
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
      <Legend   />
      <Bar dataKey="Мужчины" fill="#636FDE" radius={[10, 10, 10, 10]} />
      <Bar dataKey="Женщины" fill="#DE6379" radius={[10, 10, 10, 10]} />
    </BarChart>
  );
};

export default SimpleBarChart;
