import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { BarShapeType } from "../../types/type";

type Props = {
    data:BarShapeType[]
}

const BarChartOfCategory = ({data}:Props) => {
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
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Результат" stackId="a" fill="#8884d8" barSize={100}  />
    </BarChart>
  );
};

export default BarChartOfCategory;
