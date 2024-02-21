import { PieChart } from "react-minimal-pie-chart";
import React from "react";
import { PieChartT } from "../../types/type";
import { useTranslation } from "react-i18next";

type Props = {
  title: string;
  text?: string;
  number?: number;
  type?: number;
  people: string;
  data: PieChartT[];
};

const PieChartOfService: React.FC<Props> = ({
  title,
  text,
  number,
  type,
  data,
  people,
}) => {
  const { t } = useTranslation();
  return (
    <div className="relative w-72 h-72">
      <div className="bg-white  flex justify-center items-center">
        <PieChart
          data={data}
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
          {t("newsAll")}:
          <br />
          <span className="font-bold text-black text-2xl">{people}</span>
          {title}
        </div>
      </div>
      {!type && (
        <div className="flex items-center gap-3 mt-6 ms-4">
          <div className="text-indigo-950 font-semibold">{number}%</div>
          <div className="w-56 leading-5">{text}</div>
        </div>
      )}
    </div>
  );
};

export default PieChartOfService;
