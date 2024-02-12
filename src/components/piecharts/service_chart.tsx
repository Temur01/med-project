import { PieChart } from "react-minimal-pie-chart";
import { models } from "../../data/charts";
import React from "react";

type Props = {
  title: string;
  text: string;
  number: number;
};

const PieChartOfService: React.FC<Props> = ({ title, text, number }) => {
  return (
    <div className="relative w-72 h-72">
      <div className="bg-white  flex justify-center items-center">
        <PieChart
          data={models}
          style={{ width: "100%", height: "100%" }}
          lineWidth={35}
          animate
          paddingAngle={2}
          labelPosition={82}
          startAngle={50}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-lg text-gray-600 flex justify-center items-center flex-col">
          Всего:
          <br />
          <span className="font-bold text-black text-xl">50</span>
          {title}
        </div>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <div className="">{number}%</div>
        <div className="w-56 leading-5">{text}</div>
      </div>
    </div>
  );
};

export default PieChartOfService;
