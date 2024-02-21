import React from "react";
import PieChartOfModel from "../../../../components/piecharts/service_chart";
import { models } from "../../../../data/charts";
import { useTranslation } from "react-i18next";

const HomeModel: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="text-2xl mb-4 ms-6">{t("newsModels")}</div>
      <div className="shadow-md px-12 pt-8 pb-28 rounded-lg">
        <div className="flex items-center gap-52 justify-start">
          <PieChartOfModel
            title={t("newsPhysicsIndicatorSpan")}
            text={t("newsPractice")}
            number={75}
            data={models}
            people={"50"}
          />
          <PieChartOfModel
            title={t("govermentSector")}
            text={t("newsAllMedicineInstitution")}
            number={32}
            data={models}
            people={"50"}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeModel;
