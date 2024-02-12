import { FC } from "react";
import PieChartOfModel from "../../../../components/piecharts/service_chart";

const Pregnant: FC = () => {
  return (
    <div className="shadow-md px-12 pt-8 pb-28 rounded-lg">
      <div className="flex items-center gap-52 justify-start">
        <PieChartOfModel
          title="беременых"
          text="Состоящие на учете"
          number={75}
        />
        <PieChartOfModel
          title="беременых"
          text="Получившие не менее 
            8 дородовых консультаций"
          number={32}
        />
      </div>
    </div>
  );
};

export default Pregnant;
