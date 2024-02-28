import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { BarShapeType } from "../../types/type";
import Cookies from "js-cookie";

type Props = {
  data: BarShapeType[] | undefined;
  type?: string;
};

const BarChartOfCategory = ({ data, type }: Props) => {
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
      height={420}
      data={data}
      margin={{
        top: 40,
        right: 0,
        left: -24,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="name" axisLine={false} tickMargin={10} />
      <YAxis />
      <Tooltip />
      <Bar
        dataKey={
          Cookies.get("i18next") === "uz"
            ? "Natija"
            : Cookies.get("i18next") === "ru"
            ? "Результат"
            : "Result"
        }
        stackId="a"
        fill={
          type === "light-blue"
            ? "#71AFC9"
            : type === "error"
            ? "#DE6379"
            : type === "more-error"
            ? "#DD3957"
            : "#636FDE"
        }
        barSize={72}
        radius={[10, 10, 10, 10]}
      />
    </BarChart>
  );
};

export default BarChartOfCategory;
