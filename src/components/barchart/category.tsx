import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { BarShapeType } from "../../types/type";

type Props = {
  data: BarShapeType[];
};

const BarChartOfCategory = ({ data }: Props) => {
  const [chartWidth, setChartWidth] = useState(window.innerWidth - 400);

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
      height={420}
      data={data}
      margin={{
        top: 40,
        right: 0,
        left: -24,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false}/>
      <XAxis dataKey="name" axisLine={false} tickMargin={10}/>
      <YAxis />
      <Tooltip />
      <Bar dataKey="Результат" stackId="a" fill="#636FDE" barSize={80} radius={[10, 10, 10, 10]} />
    </BarChart>
  );
};

export default BarChartOfCategory;
