import { PieChart } from "react-minimal-pie-chart";
import { population } from "../../data/charts";

const Population = () => {
  return (
    <div className="bg-white w-72 h-72 flex justify-center items-center relative">
      <PieChart
        data={population}
        style={{ width: "100%", height: "100%" }}
        lineWidth={35}
        animate
        paddingAngle={2}
        label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
        labelPosition={82}
        startAngle={145}
        labelStyle={{
          fontSize: "6px",
          fill: "#fff",
        }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-black text-2xl font-semibold">30 Млн</div>
      </div>
    </div>
  );
};

export default Population;
