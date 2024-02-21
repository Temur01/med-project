import { FC } from "react";
import PieChartOfModel from "../../../../components/piecharts/service_chart";
import { models } from "../../../../data/charts";
import { useTranslation } from "react-i18next";

const Pregnant: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="shadow-md px-12 pt-8 pb-28 rounded-lg">
      <div className="flex items-center gap-52 justify-start">
        <PieChartOfModel
          title={t("servicePregnant")}
          text={t("serviceAccount")}
          number={75}
          data={models}
          people={"50"}
        />
        <PieChartOfModel
          title={t("servicePregnant")}
          text={t("eightConsulting")}
          number={32}
          data={models}
          people={"50"}
        />
      </div>
    </div>
  );
};

export default Pregnant;
