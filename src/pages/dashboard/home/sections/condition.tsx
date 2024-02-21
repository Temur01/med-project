import MonitorCard from "../../../../components/card/monitorCard";
import girl from "../../../../assets/girl.png";
import boy from "../../../../assets/child.png";
import { useTranslation } from "react-i18next";
const Condition = () => {
  const {t}=useTranslation();
  return (
    <div className="shadow-md p-6 rounded-lg">
      <div className="text-2xl text-blue-700 font-semibold">
       {t("newsMonitor")}
      </div>

      <div className="flex items-center gap-8 px-4 py-6">
        <MonitorCard
          img={girl}
          isGood={true}
          statitics={2.7}
          title={t("newsDeathmoth")}
        />
        <MonitorCard
          img={boy}
          isGood={false}
          statitics={1.7}
          title={t("newsDeathchild")}
        />
      </div>
    </div>
  );
};

export default Condition;
