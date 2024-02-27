import { PieChart } from "react-minimal-pie-chart";
import { FC } from "react";

type Props = {
  total: number | undefined;
  male: number | undefined;
  female: number | undefined;
};

const Population: FC<Props> = ({ total, male, female }) => {
  const population = [
    { title: "ЖЕНЩИНЫ", value: female ?? 0, color: "#CD0C88" },
    { title: "МУЖЧИНЫ", value: male ?? 0, color: "#245DDD" },
  ];

  return (
    <div className="bg-white w-72 h-72 flex justify-center items-center relative">
      <PieChart
        data={population}
        lineWidth={35}
        animate
        paddingAngle={2}
        label={({ dataEntry }) => `${Math.round(dataEntry.value * 10) / 10}%`}
        labelPosition={82}
        startAngle={145}
        className="w-full h-full"
        labelStyle={{
          fontSize: "5px",
          fill: "#fff",
        }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-black text-2xl font-semibold">{total} Млн</div>
      </div>
    </div>
  );
};

export default Population;
