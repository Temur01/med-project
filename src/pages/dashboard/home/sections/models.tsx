import React from "react";
import PieChartOfModel from "../../../../components/piecharts/service_chart";

const HomeModel: React.FC = () => {
  return (
    <div>
      <div className="text-2xl mb-4 ms-6">Модели предоставления услуг</div>
      <div className="shadow-md px-12 pt-8 pb-28 rounded-lg">
        <div className="flex items-center gap-52 justify-start">
          <PieChartOfModel
            title="Учреждений"
            text="Практикуют систему прикрепления населения"
            number={75}
          />
          <PieChartOfModel
            title="В Гос. секторе"
            text="Общее количество медицинских учреждений ПМСП на 10.000 населения"
            number={32}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeModel;
